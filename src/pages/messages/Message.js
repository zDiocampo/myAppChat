import React from "react";
import { Avatar, Typography, useTheme, Box } from "@mui/material";

export default function Message({ owner = false, chat }) {
  const theme = useTheme();

  if (chat.hasOwnProperty("user")) {
    return (
      <Box
        sx={{
          ...theme.typography.flex,
          justifyContent: "center",
          mt: "5px",
        }}
      >
        <Typography
          sx={{
            background: "#EAEAEA",
            borderRadius: "8px",
            border: "none",
            height: "max-content",
            width: "max-content",
            padding: "5px 10px",
            fontSize: ".85rem",
            color: "#54656F",
          }}
        >
          {`${chat.user} joined the chat`}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {!owner && (
        <Box
          sx={{ ...theme.typography.column, width: "max-content", mt: "10px" }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Avatar
              alt={chat.name}
              sx={{ width: 35, height: 35, mr: "10px", mb: "3px" }}
            />
            <Typography
              sx={{
                bgcolor: "#67bbff",
                padding: "15px",
                borderRadius: "10px",
                width: "500px",
                "@media (max-width: 500px)": {
                  width: "200px",
                },
              }}
            >
              {chat.message}
            </Typography>
          </Box>
          <Typography sx={{ textAlign: "end", fontSize: "0.7rem" }}>
            {chat.name}
          </Typography>
        </Box>
      )}

      {owner && (
        <Box
          sx={{
            ...theme.typography.column,
            alignItems: "flex-end",
            mt: "10px",
          }}
        >
          <Box
            sx={{
              width: "500px",
              "@media (max-width: 500px)": {
                width: "200px",
              },
            }}
          >
            <Typography
              sx={{
                bgcolor: "#D6D6D6",
                padding: "15px",
                borderRadius: "10px",
                "@media (max-width: 500px)": {
                  width: "200px",
                },
              }}
            >
              {chat.message}
            </Typography>

            <Typography sx={{ textAlign: "end", fontSize: "0.7rem" }}>
              {chat.name}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}
