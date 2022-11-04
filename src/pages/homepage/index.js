import React from "react";
import { Box, InputBase, useTheme, Button } from "@mui/material";
import { useHomeActions } from "../../hooks/useHomeActions";

export default function Homepage() {
  const theme = useTheme();

  const {
    onTextChange,
    navigateToMessages,
    handleKeyDown,
    name,
  } = useHomeActions();

  return (
    <Box id="homePage"
      sx={{
        ...theme.typography.flex,
        px: "100px",
        height: "100vh",
        "@media (max-width: 500px)": {
          px: "10px",
        },
      }}
    ><div>
    <h1 id="welcomeText">Welcome to my <span id="spanChat">Chat</span><span id="spanApp">App</span>!</h1>
    </div>
      <InputBase
        id="inputField"
        onKeyDown={handleKeyDown}
        data-testid="home-button"
        onChange={onTextChange}

        placeholder="Enter your name"
      />
      <Button
        id="goBtn"
        onClick={navigateToMessages}
        disableElevation
        sx={{ width: "100px", height: "50px", ml: "10px" }}
        variant="contained"
      >
        Go!
      </Button>
    </Box>
  );
}
