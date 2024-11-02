import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          padding: 2,
          minHeight: "10vh",
          maxHeight: "30vh",
          marginTop: 50,
          borderTop: "1px solid black",
          backgroundColor: "white",
          color: "black"
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center" }}>
          Made with 💓 by{" "}
          <Link
            // className="nav-link"
            to="https://www.github.com/laciecoder"
            style={{ textDecoration: "none" }}
          >
            laciecoder
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
