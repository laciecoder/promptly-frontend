import { Link } from "react-router-dom";

const NavLink = ({
  to,
  bg,
  text,
  textColor,
  onClick,
}: {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>;
}) => {
  return (
    <Link
      to={to}
      style={{ background: bg, color: textColor }}
      className="nav-link"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default NavLink;
