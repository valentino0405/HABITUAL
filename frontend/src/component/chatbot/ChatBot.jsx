import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  IconButton,
  Select,
  MenuItem,
  InputAdornment,
  List,
  ListItem,
} from "@mui/material";
import {
  Send,
  Edit,
  Home,
  Settings,
  Add,
  People,
  Business,
} from "@mui/icons-material";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Salesforce");

  const handleSend = () => {
    if (message.trim()) {
      console.log("User Message:", message);
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        sx={{
          width: 60,
          background: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          borderRight: "1px solid #ddd",
        }}
      >
        <IconButton>
          <Home />
        </IconButton>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <People />
        </IconButton>
        <IconButton>
          <Business />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton>
          <Settings />
        </IconButton>
      </Box>

      {/* Main Chat Section */}
      <Box flexGrow={1} display="flex" flexDirection="column">
        {/* Header */}
        <Box textAlign="center" mt={4}>
          <Typography variant="h5" fontWeight="bold">
            Talk Data to Me
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Choose a prompt below or write your own to start chatting with Seam
          </Typography>
        </Box>

        {/* Prompt Buttons */}
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          {[
            "Clean account fields",
            "Clean contact fields",
            "Create master ‘People’ list",
            "Account Fit Score",
            "Match leads to account",
          ].map((text, index) => (
            <Button key={index} variant="outlined" sx={{ textTransform: "none" }}>
              {text}
            </Button>
          ))}
        </Box>

        {/* Chat Input Section */}
        <Box flexGrow={1} />

        <Container maxWidth="md">
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              p: 2,
              borderRadius: 3,
              mt: 2,
              position: "relative",
            }}
          >
            {/* Edit Icon */}
            <IconButton sx={{ position: "absolute", top: 10, left: 10 }}>
              <Edit fontSize="small" />
            </IconButton>

            {/* Input Field */}
            <TextField
              fullWidth
              placeholder="What are the best open opportunities by company size?"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: { ml: 4, fontSize: 16 },
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* Dropdown Selector */}
            <Select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              sx={{ mx: 2, minWidth: 120 }}
            >
              <MenuItem value="Salesforce">Salesforce</MenuItem>
              <MenuItem value="HubSpot">HubSpot</MenuItem>
              <MenuItem value="Zoho">Zoho</MenuItem>
            </Select>

            {/* Send Button */}
            <IconButton
              sx={{ background: "#ADFF2F", color: "black", borderRadius: 2 }}
              onClick={handleSend}
            >
              <Send />
            </IconButton>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default ChatBot;
