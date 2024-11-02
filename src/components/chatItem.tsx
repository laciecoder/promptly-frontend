import { Avatar, Box, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "react-markdown";

// function extractBlocks(message: string) {
//   if (message.includes("```")) {
//     const blocks = message.split("```");
//     return blocks;
//   }
// }

// function isBlock(str: string) {
//   return ["=", ";", "{", "}", "[", "]", "\\n", "#", "//"].some((sym) =>
//     str.includes(sym)
//   );
// }

const ChatItem = ({
  role,
  content,
  name,
}: {
  content: string;
  role: string;
  name?: string;
}) => {
  // const blocks = extractBlocks(content);
  return role === "assistant" ? (
    <>
      <Box
        sx={{
          display: "flex",
          p: 2,
          my: 1,
          gap: 2,
          alignItems: "start",
          borderRadius: "10px",
        }}
        className="assistant-chat"
      >
        <Avatar sx={{ ml: "0" }}>
          <img src={logo} alt="ai bot" width="30px" />
        </Avatar>
        <Box>
          {/* {blocks ? (
            <>
              {blocks.map((block) =>
                isBlock(block) ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={block.split("")[0].replace("\n", "")}
                  >
                    {block}
                  </SyntaxHighlighter>
                ) : (
                  <Typography color="white" fontSize={"20px"}>
                    {content}
                  </Typography>
                )
              )}
            </>
          ) : ( */}
          <Typography color="white" fontSize={"20px"}>
            <Markdown>{content}</Markdown>
          </Typography>
          {/* // )} */}
        </Box>
      </Box>
    </>
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          p: 2,
          gap: 2,
          my: 1,
          color: "black",
          bgcolor: "#f0f0f0",
          borderRadius: "10px",
        }}
      >
        <Avatar sx={{ ml: "0" }}>{name}</Avatar>
        <Box>
          {/* {blocks ? (
            <>
              {blocks.map((block) =>
                isBlock(block) ? (
                  <SyntaxHighlighter
                    style={dark}
                    language={block.split("")[0].replace("\n", "")}
                  >
                    {block}
                  </SyntaxHighlighter>
                ) : (
                  <Typography color="white" fontSize={"20px"}>
                    {content}
                  </Typography>
                )
              )}
            </>
          ) : ( */}
          <Typography color="black" fontSize={"20px"}>
            <Markdown>{content}</Markdown>
          </Typography>
          {/* )} */}
        </Box>
      </Box>
    </>
  );
};

export default ChatItem;
