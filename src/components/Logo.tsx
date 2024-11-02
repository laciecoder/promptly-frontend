import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Typography } from "@mui/material";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        gap: "8px",
        alignItems: "center",
      }}
    >
      <Link
        to={"/"}
        style={{ display: "flex", gap: "8px", alignItems: "center" }}
      >
        <img src={logo} alt="promptly" width={"30px"} height={"30px"} />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            mr: "auto",
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          Promptly
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
