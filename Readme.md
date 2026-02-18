# 🔍 Emotion Lens

> AI-powered YouTube comment sentiment & emotion analysis platform built with the MERN stack.

---

## 📌 Overview

**Emotion Lens** lets you paste any public YouTube video URL and instantly analyze the audience's emotions and sentiments from the comments section using state-of-the-art HuggingFace AI models.

---

## ✨ Features

- 🎥 **YouTube Video Preview** — Fetch video metadata (title, thumbnail, views, likes, comment count) before analysis
- 🤖 **AI Sentiment Analysis** — Classifies comments as Positive, Neutral, or Negative using `distilbert-base-uncased-finetuned-sst-2-english`
- 😊 **Emotion Detection** — Detects 6 emotions (Joy, Anger, Sadness, Surprise, Fear, Disgust) using `j-hartmann/emotion-english-distilroberta-base`
- 📊 **Visual Analytics** — Interactive bar and pie charts powered by Recharts
- 🔐 **JWT Authentication** — Secure cookie-based auth (register, login, logout)
- 📧 **Password Reset via OTP** — Email-based OTP flow using Resend
- 🔔 **Toast Notifications** — Real-time feedback with react-hot-toast

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| React 19 + Vite | UI framework |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Recharts | Data visualization |
| Lucide React | Icons |
| Axios | HTTP client |
| React Router DOM v7 | Routing |
| React Hot Toast | Notifications |

### Backend
| Tech | Purpose |
|------|---------|
| Node.js + Express | REST API server |
| MongoDB + Mongoose | Database |
| JWT + bcryptjs | Authentication |
| HuggingFace Inference API | AI models |
| YouTube Data API v3 | Comment & metadata fetching |
| Resend (nodemailer) | Email delivery |
| Cookie Parser | HTTP-only cookie handling |

---

## 📁 Project Structure

```
ML-MERN/
├── backend/
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   ├── huggingface.js
│   │   ├── nodemailer.js
│   │   ├── youtube.js
│   │   └── emailTemplets.js
│   ├── controller/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── youtubeController.js
│   ├── middleware/
│   │   └── userAuth.js
│   ├── model/
│   │   ├── userModel.js
│   │   └── analysisModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── youtubeRoutes.js
│   └── services/
│       ├── huggingfaceService.js
│       └── youtubeService.js
│
└── frontend/
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── context/
        │   └── Context.jsx        # AuthProvider + useAuth
        ├── hooks/
        │   └── useAuth.js
        ├── services/
        │   ├── apiClient.js
        │   ├── authService.js
        │   └── youtubeService.js
        ├── components/
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── Feature.jsx
        │   ├── Pricing.jsx
        │   └── Footer.jsx
        └── pages/
            ├── Home.jsx
            ├── Login.jsx
            ├── ResetPassword.jsx
            ├── Analysis.jsx
            ├── Dashboard.jsx
            └── ContactUs.jsx
```

---

## ⚙️ Environment Variables

### Backend — `backend/.env`
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
YOUTUBE_API_KEY=your_youtube_data_api_key
HUGGING_FACE_TOKEN=your_huggingface_api_token
RESEND_API_KEY=your_resend_api_key
NODE_ENV=development
```

### Frontend — `frontend/.env`
```env
VITE_BACKEND_URL=http://localhost:5000
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/emotion-lens.git
cd emotion-lens
```

### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 3. Configure environment variables
Create `backend/.env` and `frontend/.env` using the variables listed above.

### 4. Run the development servers

```bash
#  Backend
cd backend
npm start

#  Frontend
cd frontend
npm run dev
```

Frontend runs at `http://localhost:5173`  
Backend runs at `http://localhost:5000`

---

## 🔌 API Endpoints

### Auth — `/api/auth`
| Method | Route | Description | 
|--------|-------|-------------|
| POST | `/register` | Register a new user | 
| POST | `/login` | Login and set cookie | 
| POST | `/logout` | Clear auth cookie | 
| GET | `/me` | Get current user info | 
| POST | `/send-reset-otp` | Send password reset OTP | 
| POST | `/reset-password` | Reset password with OTP | 

### YouTube — `/api/youtube`
| Method | Route | Description | 
|--------|-------|-------------|
| POST | `/video-meta-data` | Fetch video title, thumbnail, stats | 
| POST | `/analyze` | Analyze comments (sentiment + emotion) | 
| POST | `/get-comments` | Fetch raw comments | 

---

## 🤖 AI Models

| Task | Model |
|------|-------|
| Sentiment Analysis | `distilbert-base-uncased-finetuned-sst-2-english` |
| Emotion Detection | `j-hartmann/emotion-english-distilroberta-base` |

> Comments are capped at **100 per analysis** and truncated to **1800 characters** each to stay within the model's 512-token limit. Processed in batches of 8.

---

## 📸 Pages

| Route | Page | 
|-------|------|
| `/` | Home (Hero + Features) | 
| `/login` | Login / Register | 
| `/reset-password` | OTP Password Reset | 
| `/analysis` | YouTube Analysis | 
| `/contact` | Contact Us | 

---

## 👤 Author

**Vishal Prajapati**

