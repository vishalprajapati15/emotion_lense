# Workflow Overview (Backend)

## 1) Server bootstrap
- server.js loads env vars, connects MongoDB via config/db.js, and mounts routes:
  - /api/auth -> routes/authRoutes.js
  - /api/user -> routes/userRoutes.js
  - /api/youtube -> routes/youtubeRoutes.js

## 2) Database connection
- config/db.js connects to MongoDB using MONGODB_URI with the database name "emotion_lense".

## 3) Auth flow
- Register: authController.register
  - Validate input (name, email, password)
  - Hash password (bcrypt)
  - Create user (model/userModel.js)
  - Issue JWT in httpOnly cookie
  - Send welcome email via config/nodemailer.js
- Login: authController.login
  - Validate input
  - Verify user and password
  - Issue JWT in httpOnly cookie
- Logout: authController.logout
  - Clear JWT cookie
- Password reset:
  - sendResetOtp
    - Generate OTP, store in user, send email
  - resetPassword
    - Validate OTP and expiry, update password

## 4) User data flow
- userRoutes.js -> userAuth middleware -> userController.getUserData
  - userAuth verifies JWT from cookie and sets req.userId
  - getUserData returns user name

## 5) YouTube comment flow
- youtubeRoutes.js -> youtubeController.getComments
  - Validate youtubeUrl
  - Extract video ID (services/youtubeService.js)
  - Fetch comments from YouTube API
  - Clean comments (utils/cleanText.js)
  - Return list
- youtubeRoutes.js -> youtubeController.analyzeComments
  - Validate youtubeUrl
  - Extract video ID
  - Fetch comments
  - Analyze sentiment and emotion via Hugging Face (services/huggingfaceService.js)
  - Return summary

## 6) External services
- Hugging Face
  - config/huggingface.js sets API token and model URLs
  - services/huggingfaceService.js calls inference endpoints
- YouTube Data API
  - config/youtube.js builds commentThreads endpoint URL
  - services/youtubeService.js fetches comments
- Email (Resend)
  - config/nodemailer.js sends emails
  - config/emailTemplets.js provides HTML templates

## Environment variables (expected)
- PORT
- MONGODB_URI
- JWT_SECRET_KEY
- RESEND_API_KEY
- HUGGING_FACE_TOKEN
- YOUTUBE_API_KEY
