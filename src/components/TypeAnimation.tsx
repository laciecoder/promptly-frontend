import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Sometimes App might not work as intended",
        3000,
        "Due to payment issues",
        3000,
        // Same substring at the start will only be typed out once, initially
        "Chat with latest large language model",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "Chat with GPT-4",
        3000,
        "Chat with Upto date models",
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{
        fontSize: "30px",
        display: "inline-block",
        color: "white",
        textShadow: "1px 1px 20px #000",
        marginTop: "20px"
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
