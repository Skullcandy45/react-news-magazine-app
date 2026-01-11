# React News Magazine App 📰

A modern React news application that fetches and displays the latest headlines using the NewsAPI.  
Users can browse news by category with an improved and intuitive user experience.

## 🚀 Features
- Category-based news filtering
- Active category highlight in navbar
- Real-time data from NewsAPI
- Loading & error handling
- Image fallback using Unsplash
- Responsive UI with Bootstrap

## 🛠️ Tech Stack
- React
- JavaScript (ES6)
- React Hooks (`useState`, `useEffect`)
- NewsAPI
- Bootstrap
- Vite

## 📂 Project Structure
src/
├── Component/
│ ├── Navbar.jsx
│ ├── Newsboard.jsx
│ ├── Newsitem.jsx
├── App.jsx
├── main.jsx
└── index.css

## ⚙️ Environment Setup

Create a `.env` file in the root directory:


Get your API key from https://newsapi.org

## ▶️ How the App Works
- Navbar updates the selected category
- Active category is visually highlighted
- Newsboard fetches news when category changes
- News items are rendered with image fallback support

### Example
User clicks **Technology** →  
Technology button highlights →  
Latest technology news is displayed

## ▶️ Run Locally

1. Clone the repository
```bash
git clone https://github.com/your-username/react-news-magazine-app.git

Install dependencies

npm install


Start the development server

npm run dev

🔮 Future Enhancements

Search functionality

Pagination / Load more

Dark mode

Skeleton loaders

Mobile navbar improvements

---

## ⭐ Best next step (recommended)
👉 Add **screenshots + live demo link** to the README (huge portfolio boost).

Say **`add screenshots section`** if you want that next.
