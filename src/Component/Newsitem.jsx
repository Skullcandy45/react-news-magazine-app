const Newsitem = ({ title, description, src, url }) => {
  const fallbackImage = "https://source.unsplash.com/345x200/?news";

  return (
    <div className="card h-100">
      <img
        src={src || fallbackImage}
        onError={(e) => (e.target.src = fallbackImage)}
        className="card-img-top"
        alt={title || "News image"}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "No Title"}</h5>
        <p className="card-text">{description || "No description available"}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
