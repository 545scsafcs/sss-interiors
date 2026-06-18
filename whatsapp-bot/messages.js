const twilio = require("twilio");
const axios = require("axios");
const Groq = require("groq-sdk");
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
const userState = {};

async function handleMessage(from, text, res) {
  const twiml = new twilio.twiml.MessagingResponse();
  
  if (!userState[from]) {
    userState[from] = { history: [] };
  }

  userState[from].history.push({ role: "user", content: text });

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: `You are a WhatsApp assistant for SSS Interiors, an interior design company in India.
Your job:
- Welcome customers warmly on first message
- Answer questions about services: Living Room, Bedroom, Kitchen, Office, Bathroom, Full Home
- Pricing starts from ₹50,000 depending on room size
- Collect name, phone, service needed, consultation date when they want to book
- When you have ALL of: name, phone, service, date → reply exactly: SAVE_LEAD:name|phone|service|date
- If they want human agent → reply exactly: HUMAN_HANDOFF
- Keep replies short, friendly, professional
- Always reply in same language as customer`
      },
      ...userState[from].history
    ],
    max_tokens: 300
  });

  const reply = completion.choices[0].message.content;
  userState[from].history.push({ role: "assistant", content: reply });

  if (reply.includes("SAVE_LEAD:")) {
    const data = reply.split("SAVE_LEAD:")[1].split("|");
    try {
      await axios.post(process.env.BACKEND_URL, {
        name: data[0],
        phone: data[1],
        service: data[2],
        message: `Consultation date: ${data[3]}`,
        email: ""
      });
    } catch (err) {
      console.error("Backend error:", err.message);
    }
    twiml.message(`✅ Booking Confirmed! Our team will contact you within 24 hours.`);
    userState[from] = { history: [] };
  }

  else if (reply.includes("HUMAN_HANDOFF")) {
    twiml.message(`Connecting you to our team! 🤝\n\n📞 +91 XXXXXXXXXX\n⏰ Mon-Sat, 9AM-6PM`);
  }

  else {
    twiml.message(reply);
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
}

module.exports = { handleMessage };