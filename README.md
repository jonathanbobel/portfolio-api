# 📦 Portfolio API

This is a lightweight Node.js + Express API built to support my personal portfolio site.  

---

## 🚀 Features

- Node.js + Express server
- API endpoints for portfolio projects
- Organized project data stored as JSON
- CORS enabled for cross-origin requests
- HTTP request logging using Morgan
- Deployed on [Render](https://render.com/)

---

## 🛠️ Endpoints

| Method | Route | Description |
|:------:|:-----:|:------------|
| `GET` | `/` | Root route, confirms API is running |
| `GET` | `/api/projects` | Returns a list of all portfolio projects |
| `GET` | `/api/projects/:id` | Returns details of a specific project by `id` |

---

## 📁 Project Structure

```
portfolio-api/
├── data/
│   └── projects.json       # Mock project data
├── routes/
│   └── projects.js         # API route definitions
├── server.js               # Express server entry point
└── package.json            # Project metadata and dependencies
```

---

## 🧰 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/jonathanbobel/portfolio-api.git
cd portfolio-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
node server.js
```

Visit `http://localhost:3000` in your browser to confirm the API is running.

---

## 🌎 Live Deployment

This API is live and accessible at:

[https://your-api.onrender.com](https://portfolio-api-d05y.onrender.com/)](https://portfolio-api-d05y.onrender.com)

---

## 📝 Notes

- Designed primarily to support my [portfolio site](https://www.jonathanbobel.com).
- Built as a learning exercise to gain hands-on experience with APIs, backend deployment, and full-stack architecture.

---

## 📜 License

MIT License.  
Feel free to fork and adapt for your own projects!

---
