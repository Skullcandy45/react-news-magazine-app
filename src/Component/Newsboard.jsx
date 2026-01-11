import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load news");
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <h4 className="text-center my-4">Loading news...</h4>;
  }

  if (error) {
    return <h4 className="text-center text-danger my-4">{error}</h4>;
  }

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row g-3">
        {articles.map((news) => (
          <div className="col-md-4" key={news.url}>
            <Newsitem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
