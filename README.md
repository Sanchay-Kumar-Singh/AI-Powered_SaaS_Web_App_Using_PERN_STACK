# 🚀 QuickAI – Full Stack AI SaaS Platform

Intellicore Ai is a production-ready AI SaaS platform offering powerful tools.

Built with modern technologies, secure authentication, cloud storage, and scalable APIs.

---

## 🌐 Live Demo - https://intellicore-ai-dusky.vercel.app/

---

## ✨ Features

### 🤖 AI Powered
- 🎨 Generate images from text prompts  
- 🖼 Remove image backgrounds  
- 🧹 Remove unwanted objects  
- ✍️ Write full articles  
- 📰 Generate blog titles  
- 📄 Review resumes with AI suggestions  

### 👤 User Experience
- Secure login & signup  
- Personal dashboard  
- Community feed  
- Mobile responsive  
- Real-time processing  

### 🛡 Enterprise Ready
- Secure cloud uploads  
- PDF resume reading  
- REST API architecture  
- High traffic ready  

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js 
- Vite  
- Tailwind CSS  
- Axios  
- React Router DOM  
- Lucide Icons  
- React Hot Toast  
- React Markdown  
- Clerk Authentication  

### Backend
- Node.js  
- Express  
- PostgreSQL (Neon)  
- OpenAI API  
- Cloudinary  
- Multer  
- CORS  
- pdf-parse  

### DevOps
- Vercel (frontend)  
- Render / Vercel (backend)  
- Neon DB  
- Cloudinary CDN  

---

## 🏗 Architecture

```
QuickAI/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│
├── server/
│   ├── configs/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   └── server.js
```

---

## ⚙️ Getting Started

### ✅ Prerequisites
- Node.js v18+
- npm v8+
- PostgreSQL database
- Google Gemini account
- Cloudinary account
- Clerk account

---

## 🔑 Environment Variables

### Client (.env)
```
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_BASE_URL=http://localhost:5000
```

### Server (.env)
```
GEMINI_API_KEY=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
DATABASE_URL=...
CLERK_SECRET_KEY=sk_test_...
PORT=5000
```
---

## 🧠 AI Modules

### 🎨 Image Generation
- Prompt → Image  
- HD output  
- Style control  

### 🖼 Image Editing
- Background removal  
- Object cleanup  

### 📝 Content Creation
- Articles  
- SEO titles  
- Tone options  

### 📄 Resume Intelligence
- Score calculation  
- Missing skills  
- Improvements  
- PDF extraction  

---

## 🔌 API Endpoints

### AI Routes `/api/ai`

| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | /generate-image | Create image |
| POST | /remove-background | Remove background |
| POST | /remove-object | Remove object |
| POST | /write-article | Write content |
| POST | /generate-titles | Blog titles |
| POST | /review-resume | Resume analysis |

### User Routes `/api/users`

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | /profile | User profile |
| POST | /creations | Save creation |
| GET | /creations | Get creations |
| GET | /community | Community feed |

---

## 📈 Scalability Highlights
- Modular controllers  
- API-first design  
- Cloud-based storage  
- Serverless compatible  

---

## 🧪 Future Improvements
- Payment integration  
- Usage limits  
- Team workspaces  
- AI history timeline  

---

## 👨‍💻 Developed By
**Sanchay Kumar Singh**