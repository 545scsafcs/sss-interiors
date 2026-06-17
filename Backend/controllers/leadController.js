const Lead = require("../models/Lead");

const createLead = async (req, res) => {
  try {
    const { name, phone, email, service, message } = req.body;

    const newLead = await Lead.create({
      name,
      phone,
      email,
      service,
      message,
    });

    res.status(201).json({
      success: true,
      data: newLead,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getLeads = async (req, res) => {
  try {

    const leads = await Lead.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const deleteLead = async (req, res) => {
  try {

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    await lead.deleteOne();

    res.status(200).json({
      success: true,
      message: "Lead deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  createLead,
  getLeads,
  deleteLead,
};