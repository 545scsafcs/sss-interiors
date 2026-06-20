# Quick Start Guide - Admin Dashboard

## 🚀 Getting Started

### Step 1: Verify Backend Setup
```bash
# Backend folder
cd Backend

# Install dependencies (if not already done)
npm install

# Create .env file with:
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret_key
PORT=5000

# Start backend
npm start
# Should see: "Server running on port 5000"
```

### Step 2: Start Frontend Development
```bash
# Frontend folder
cd Frontend

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
# Should see: "http://localhost:5173"
```

### Step 3: Create Admin User (First Time Only)
```bash
# Backend folder
cd Backend

# Run the admin creation script
node createAdmin.js

# Follow prompts:
# Email: admin@example.com
# Password: your_password
```

### Step 4: Test Login Flow
1. Open http://localhost:5173
2. Navigate to /admin/login
3. Enter admin credentials
4. Should see dashboard with leads

---

## 📝 Default Login Credentials
(If using the createAdmin.js script)

```
Email: admin@example.com
Password: (as you set during creation)
```

---

## 🎯 Key Features to Test

### 1. Login Page
- [ ] Enter email and password
- [ ] Click "Show" to reveal password
- [ ] Submit to login
- [ ] Error message on invalid credentials

### 2. Dashboard
- [ ] Stats cards show: Total Leads, New Leads, WhatsApp Leads, Website Leads
- [ ] Search by name, email, or phone
- [ ] Filter by service
- [ ] Table displays all leads
- [ ] Click "View" to see lead details
- [ ] Click "Delete" to remove a lead

### 3. Logout
- [ ] Click "Logout" button
- [ ] Redirect to login page
- [ ] Token cleared from localStorage

### 4. Security
- [ ] Cannot access /admin/dashboard without login
- [ ] Refresh page keeps you logged in
- [ ] Logout page redirect works
- [ ] Invalid token redirects to login

---

## 📱 Responsive Testing

### Desktop (1200px+)
- Full featured dashboard
- All columns visible in table
- Multi-column stats layout

### Tablet (768px)
- Adjusted layout
- Touch-friendly buttons
- Readable text

### Mobile (480px)
- Single column layout
- Simplified table view
- Full-width inputs

---

## 🔗 API Endpoints Reference

### Public Endpoints (No Auth Required)
```
POST /api/admin/login
  Request: { email, password }
  Response: { success, token, admin }

POST /api/leads
  Request: { name, phone, email, service, message }
  Response: { success, data }
```

### Protected Endpoints (Auth Required)
```
GET /api/leads
  Headers: Authorization: Bearer {token}
  Response: { success, count, data }

DELETE /api/leads/:id
  Headers: Authorization: Bearer {token}
  Response: { success, message }

GET /api/admin/profile
  Headers: Authorization: Bearer {token}
  Response: { success, data }
```

---

## 🧪 Testing Scenarios

### Scenario 1: First Time Login
1. Open /admin/login
2. See empty form
3. Enter email: admin@example.com
4. Enter password: (your password)
5. Click "Sign In"
6. See loading spinner
7. Redirected to /admin/dashboard
8. See all leads in table

### Scenario 2: Search Leads
1. In dashboard, see all leads
2. Type a name in search box
3. Table updates in real-time
4. Results count updates

### Scenario 3: Filter by Service
1. Click service dropdown
2. Select a service
3. Table shows only that service
4. Can still search within filtered results

### Scenario 4: View Lead Details
1. In table, click "View" button
2. Modal opens with full details
3. See email and phone as clickable links
4. Click close (X) to close modal

### Scenario 5: Delete Lead
1. Click "Delete" button in table
2. Confirmation popup appears
3. Click OK to confirm
4. Lead removed from table
5. Stats update

### Scenario 6: Logout
1. Click "Logout" button
2. Redirected to /admin/login
3. Token removed from localStorage
4. Try to access /admin/dashboard
5. Redirected back to login

---

## 🐛 Troubleshooting

### Problem: Cannot Login
**Solution:**
1. Check admin credentials are correct
2. Verify JWT_SECRET in .env matches
3. Check MongoDB connection
4. Check backend is running

### Problem: Leads Not Loading
**Solution:**
1. Check token is in localStorage
2. Verify API base URL in api.js
3. Check network tab for errors
4. Verify backend /api/leads endpoint

### Problem: Logout Not Working
**Solution:**
1. Check logout button is clicked
2. Check localStorage is cleared
3. Verify AuthContext state is reset
4. Check browser console for errors

### Problem: Dashboard Shows Loading Forever
**Solution:**
1. Check network requests in DevTools
2. Verify API_BASE_URL is correct
3. Check backend is running
4. Look for CORS errors

### Problem: Search Not Working
**Solution:**
1. Check search input is typed correctly
2. Verify data is loaded in table
3. Check browser console for errors
4. Try clearing and retyping search

---

## 📊 File Locations for Changes

### Backend Files Changed
- `/Backend/controllers/adminController.js` - Added profile endpoint
- `/Backend/routes/adminRoutes.js` - Added profile route
- `/Backend/routes/leadRoutes.js` - Added auth protection

### Frontend Files Created
- `/Frontend/src/config/api.js` - API configuration
- `/Frontend/src/context/AuthContext.jsx` - Auth state management
- `/Frontend/src/pages/AdminLogin.css` - Login styling

### Frontend Files Updated
- `/Frontend/src/pages/AdminLogin.jsx` - New login page
- `/Frontend/src/pages/Dashboard.jsx` - New dashboard
- `/Frontend/src/pages/Admin.jsx` - Updated for new API
- `/Frontend/src/pages/Admin.css` - New dashboard styling
- `/Frontend/src/components/PrivateRoute.jsx` - Improved protection
- `/Frontend/src/App.jsx` - Fixed routing

---

## 🔑 Environment Variables Needed

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sss-interiors
JWT_SECRET=your_super_secret_key_here_1234567890
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

### Frontend (config/api.js)
```javascript
// Already configured for production
API_BASE_URL = "https://sss-interiors-backend.onrender.com"
```

---

## 📦 Dependencies Verified

### Backend
- express ✓
- cors ✓
- dotenv ✓
- mongoose ✓
- bcryptjs ✓
- jsonwebtoken ✓

### Frontend
- react ✓
- react-router-dom ✓
- axios ✓
- aos ✓

All dependencies required are already in package.json

---

## 🎓 Learning Resources

### Related Files to Understand
1. `src/context/AuthContext.jsx` - How auth state works
2. `src/config/api.js` - How API calls are made
3. `src/components/PrivateRoute.jsx` - How routes are protected
4. `Backend/middleware/authMiddleware.js` - How JWT is verified

### Key Concepts
- JWT (JSON Web Tokens) for authentication
- React Context API for state management
- React Router for navigation
- Axios for API requests
- Protected routes pattern

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Backend running on http://localhost:5000
- [ ] Frontend running on http://localhost:5173
- [ ] Can navigate to /admin/login
- [ ] Can login with admin credentials
- [ ] Dashboard displays leads
- [ ] Can search leads
- [ ] Can view lead details
- [ ] Can delete leads
- [ ] Can logout
- [ ] Logout redirects to login
- [ ] Cannot access dashboard without login
- [ ] Refresh keeps you logged in
- [ ] No console errors
- [ ] Responsive on mobile

---

## 🚀 Production Deployment

### Deploy to Render (Backend)
1. Push to GitHub
2. Render auto-deploys from `main` branch
3. Set environment variables in Render dashboard
4. Verify at https://sss-interiors-backend.onrender.com

### Deploy to Vercel (Frontend)
1. Push to GitHub
2. Vercel auto-deploys from connected repo
3. Environment variables handled automatically
4. Verify at your deployed URL

---

**All Set! Your admin dashboard is ready to use! 🎉**
