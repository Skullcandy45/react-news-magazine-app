import { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [active, setActive] = useState("general");

  const categories = [
    "general",
    "technology",
    "business",
    "health",
    "sports",
    "entertainment",
  ];

  const handleClick = (cat) => {
    setActive(cat);
    setCategory(cat);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className="badge bg-light text-dark fs-4">newsmag</span>
        </span>

        <ul className="navbar-nav">
          {categories.map((cat) => (
            <li className="nav-item" key={cat}>
              <button
                className={`nav-link btn btn-link text-capitalize ${
                  active === cat ? "fw-bold text-warning" : ""
                }`}
                onClick={() => handleClick(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
