import { AppBar, Container, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { useAuth } from "../context/authContext";
import NavLink from "./NavLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "ActiveBorder", position: "static", boxShadow: "none" }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", padding: 1 }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <NavLink
                  bg={"#1E1E2F"}
                  to={"/chat"}
                  text={"Start new Chat"}
                  textColor="white"
                />
                <NavLink
                  bg={"#1E1E2F"}
                  to={"/"}
                  text={"Logout"}
                  textColor="white"
                  onClick={auth?.logout}
                />
              </>
            ) : (
              <>
                <NavLink
                  bg={"#1E1E2F"}
                  to={"/login"}
                  text={"Login"}
                  textColor="white"
                />
                <NavLink
                  bg={"#1E1E2F"}
                  to={"/signup"}
                  text={"Signup"}
                  textColor="white"
                />
              </>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
