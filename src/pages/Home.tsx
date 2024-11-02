import { Box } from "@mui/material";
import TypingAnimation from "../components/TypeAnimation";
import robot from "../assets/chat_robot.svg";
import sample from "../assets/sample.png";
const Home = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{ width: "100%", flexDirection: "column", alignItems: "center" }}
        display={"flex"}
        mx="auto"
      >
        <Box>
          <TypingAnimation />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row", xs: "column", sm: "column" },
            gap: 5,
            my: 10,
          }}
        >
          <img
            src={robot}
            style={{ width: "400px", margin: "auto" }}
            className="zoom-animation"
          />
          <p
            style={{
              textAlign: "justify",
              fontWeight: "bold",
              fontSize: "20px",
              wordSpacing: "5px",
            }}
          >
            The intent of this project is to learn OpenAI's sdk as well as how
            llm's work in general, so I used this Project as a practice medium
            to explore OpenAI's API offerings and how different types of chats
            costs differnt based on tokens being generated.
          </p>
        </Box>
        <Box sx={{ display: "flex", width: "100%", mx: "auto" }}>
          <p>App Sample: </p>
          <img
            src={sample}
            alt="App Sample"
            style={{
              display: "flex",
              margin: "auto",
              width: "60%",
              borderRadius: "20",
              boxShadow: "-5px -5px 105px #1E1E2F",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
