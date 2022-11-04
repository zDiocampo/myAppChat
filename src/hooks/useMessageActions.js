import { useState } from "react";
import { useDispatch } from "react-redux";
import { scrollToBottom } from "../utils/scrollToBotom";

export const useMessageActions = (profileName) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const onTextChange = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = () => {
    if (!message.trim()) {
      return;
    }

    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        message,
        name: profileName,
      },
    });
    setMessage("");
    scrollToBottom();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return {
    onTextChange,
    onSubmit,
    handleKeyDown,
    message,
  };
};
