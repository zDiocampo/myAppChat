import React, { useEffect } from "react";
import {
  Paper,
  Avatar,
  Typography,
  useTheme,
  InputBase,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Message from "./Message";
import { getSessionData } from "../../utils/getSessionData";
import { scrollToBottom } from "../../utils/scrollToBotom";
import { useMessageActions } from "../../hooks/useMessageActions";
import { StyledBadge } from "./StyledBadge";
import {Link} from 'react-router-dom';

export default function MessagesScreen() {
  const theme = useTheme();
  const state = useSelector((state) => state.messagesReducer);
  const profileName = getSessionData("profileName");
  const { onTextChange, onSubmit, handleKeyDown, message } = useMessageActions(
    profileName
  );

  useEffect(() => {
    scrollToBottom();
  }, []);

  if (!profileName) {
    return <Navigate to="/" />;
  }

  return (

    <Box id="chatBox"
      sx={{
        paddingTop: "105px",
        paddingBottom: "200px",
        display: "flex",
        flexDirection: "column",
      }}
    >
    <Button as={Link} to="/" id="logoutBtn">Logout</Button>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
          height: "max-content",
          borderBottom: "1px solid #C4C4C4",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2,
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 65, height: 65 }}
            alt="Remy Sharp"
            src="./nature.jpg"
          />
        </StyledBadge>
        <Typography
          sx={{
            ...theme.typography.heading,
            fontWeight: "700",
            ml: "15px",
          }}
        >
          {profileName}
        </Typography>
      </Paper>

      <Box
        component="div"
        className="customscroll"
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          scrollbarWidth: "5px",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end !important",
            flexDirection: "column",
          }}
        >
          {state.map((item) => (
            <Message owner={profileName === item.name} chat={item} />
          ))}
        </Box>
      </Box>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0 30px",
          borderTop: "1px solid #C4C4C4",
          height: "70px",
          maxHeight: "70px",
          alignSelf: "flex-end",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <InputBase
          onKeyDown={handleKeyDown}
          value={message}
          onChange={onTextChange}
          sx={{
            flex: 1,
            background: "#EAEAEA",
            borderRadius: "10px",
            border: "none",
            pl: "15px",
            mr: "15px",
            height: "50px",
          }}
          placeholder="Type your message"
        />

        <Avatar
          onClick={onSubmit}
          sx={{ bgcolor: theme.palette.primary.main, cursor: "pointer" }}
        >
          <SendIcon fontSize="small" />
        </Avatar>
      </Paper>
    </Box>
  );
}
