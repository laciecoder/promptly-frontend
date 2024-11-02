import { Box, Button, Typography } from "@mui/material";
import robot from "../assets/robot_man.svg";
import Input from "../components/Input";
import { FormEvent, useEffect } from "react";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const name = data.get("name") as string;
    try {
      toast.loading("Signing up", { id: "Signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed up Successfully", { id: "Signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing up Failed", { id: "Signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/chat");
    }
  }, [auth, navigate]);
  return (
    <Box width={"100%"} height={"100%"} display={"flex"} flex={1}>
      <Box padding={8} mt={8} display={{ md: "flex", sm: "none", xs: "none" }}>
        <img src={robot} alt="robot svg" style={{ width: "400px" }} />
      </Box>
      <Box
        display={"flex"}
        flex={{ xs: 1, md: 0.5 }}
        justifyContent={"center"}
        alignItems={"center"}
        padding={2}
        mx={"auto"}
        my={"auto"}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "0 0 15px #000",
            borderRadius: "10px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign={"center"}
              padding="2"
              fontWeight={600}
            >
              Signup
            </Typography>
            <Input type="text" name="name" label="Name" />
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
          </Box>
          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "300px",
              borderRadius: 2,
              backgroundColor: "#1E1E2F",
              color: "white",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            Signup
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
