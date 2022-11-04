import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const useHomeActions = () => {
  const [name, setName] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    const { value } = e.target;
    if (value.trim()) {
      sessionStorage.setItem("profileName", value.toLowerCase());
      setName(value.toLowerCase());
    }
  };

  const navigateToMessages = async () => {
    if (name) {
      await dispatch({
        type: "ADD_USER",
        payload: {
          user: name,
        },
      });
      navigate("/messages", { replace: true });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigateToMessages();
    }
  };

  return {
    onTextChange,
    navigateToMessages,
    handleKeyDown,
    name,
  };
};
