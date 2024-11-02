import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import { getFirstTwoCharacters } from "../lib/utils";
import { useAuth } from "../context/authContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chatItem";
import { IoMdSend } from "react-icons/io";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  deleteUserChats,
  getUserChats,
  sendChatRequest,
} from "../lib/apiHelper";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const first = getFirstTwoCharacters(auth?.user?.name);
  const [chatMessage, setChatMessage] = useState<
    {
      role: string;
      content: string;
    }[]
  >([]);
  const handleSubmit = async () => {
    const content = inputRef.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: {
      role: string;
      content: string;
    } = { role: "user", content };
    setChatMessage((prev) => [...prev, newMessage]);
    const chatData = await sendChatRequest(content);
    setChatMessage([...chatData.chats]);
  };

  const handleDeleteChats = async () => {
    try {
      toast.loading("Deleting chats", { id: "delete" });
      deleteUserChats();
      setChatMessage([]);
      toast.success("Chats deleted", { id: "delete" });
    } catch (error) {
      toast.error("unable to delete chats", { id: "delete" });
      console.log(error);
    }
  };

  useEffect(() => {
    if (!auth?.user) {
      return navigate("/login");
    }
  }, [auth, navigate]);

  useLayoutEffect(() => {
    if (auth?.isLoggedIn && auth.user) {
      toast.loading("loading chats", { id: "loadchat" });
      getUserChats()
        .then((data) => {
          setChatMessage([...data.chats]);
          toast.success("Chat Loaded Successfully", { id: "loadchat" });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Chat Load failed, try again after some time", {
            id: "loadchat",
          });
        });
    }
  }, [auth]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box sx={{ display: { md: "flex", xs: "none", sm: "none" }, flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "#1E1E2F",
            borderRadius: 5,
            mx: 3,
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 600,
            }}
          >
            {first}
          </Avatar>
          <Typography sx={{ mx: "auto", textTransform: "uppercase" }}>
            You're talking to a chatbot
          </Typography>
          <Typography sx={{ mx: "auto", my: 4, p: 3 }}>
            Sometimes due to payment issue, chatbot might not work, if it is
            like that do notify to this email: ramaneshparasumanna@gmail.com
          </Typography>
          <Button
            onClick={handleDeleteChats}
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            Clear Chat
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 2, sm: 1, xs: 1 },
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "30px",
            color: "white",
            mb: 1,
            mx: "auto",
          }}
        >
          Model: GPT-4o-Mini
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            scrollBehavior: "smooth",
            overflowX: "hidden",
            borderRadius: "10px",
          }}
        >
          {chatMessage.map(({ role, content }, idx) => (
            <ChatItem key={idx} content={content} role={role} name={first} />
          ))}
        </Box>
        <div
          style={{
            borderRadius: "10px",
            backgroundColor: "#1E1E2F",
            margin: "10px 0",
            display: "flex",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            style={{
              width: "100%",
              padding: "15px",
              border: "none",
              backgroundColor: "transparent",
              outline: "none",
              color: "white",
              fontSize: "20px",
              marginRight: "auto",
            }}
          />
          <IconButton
            sx={{ ml: "auto", color: "white" }}
            onClick={handleSubmit}
          >
            <IoMdSend />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};

export default Chat;
