import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Chip
} from "@mui/material";
import {
  Dashboard,
  Business,
  School,
  Group,
  Book,
  LocalOffer,
  People,
  AccountCircle,
  Schedule,
  Payment,
  Wifi,
  Logout,
  Upload,
  Email,
  Phone,
  Work,
  Twitter,
  Instagram,
  LinkedIn
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, height: "100vh", background: "#f5f5f5", p: 2, borderRight: "2px solid #e0e0e0" }}>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Avatar src="https://via.placeholder.com/40" />
        <Box>
          <Typography fontWeight="bold">Ayman Shaltoni</Typography>
          <Typography variant="caption" color="textSecondary">Co-Founder</Typography>
        </Box>
      </Box>
      <List>
        {[
          { text: "Dashboard", icon: <Dashboard /> },
          { text: "Company Profile", icon: <Business /> },
          { text: "Roadmap", icon: <School /> },
          { text: "My Mentor", icon: <Group /> },
          { text: "Expert Directory", icon: <Book /> },
          { text: "Sessions", icon: <LocalOffer /> },
          { text: "Library", icon: <Book /> },
          { text: "Deals", icon: <LocalOffer /> },
          { text: "Community", icon: <People /> },
          { text: "My Profile", icon: <AccountCircle /> },
          { text: "Availability", icon: <Schedule /> },
          { text: "Billings & Earnings", icon: <Payment /> },
          { text: "Connectivity", icon: <Wifi /> },
          { text: "Logout", icon: <Logout />, color: "red" },
        ].map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton sx={{ borderRadius: 2, "&:hover": { background: "#ddd" }, color: item.color || "inherit" }}>
              <ListItemIcon sx={{ color: item.color || "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

const EditProfile = () => {
  const [industries, setIndustries] = useState(["UI Design", "Framer", "Startups"]);
  const [newIndustry, setNewIndustry] = useState("");
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Twitter", icon: <Twitter />, link: "https://twitter.com/Shalt0ni" },
    { platform: "Instagram", icon: <Instagram />, link: "https://instagram.com/shaltoni" },
    { platform: "LinkedIn", icon: <LinkedIn />, link: "https://linkedin.com/in/aymanshaltoni/" },
  ]);
  const [newSocial, setNewSocial] = useState({ platform: "", link: "" });

  const handleAddIndustry = () => {
    if (newIndustry.trim()) {
      setIndustries([...industries, newIndustry]);
      setNewIndustry("");
    }
  };

  const handleAddSocial = () => {
    if (newSocial.platform && newSocial.link) {
      setSocialLinks([...socialLinks, { ...newSocial }]);
      setNewSocial({ platform: "", link: "" });
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" fontWeight="bold" mt={4}>
        Edit User Profile
        <Typography variant="caption" color="primary" sx={{ ml: 1, cursor: "pointer" }}>Preview ↗</Typography>
      </Typography>

      {/* Profile Image */}
      <Paper sx={{ p: 3, mt: 3, display: "flex", alignItems: "center", gap: 2, borderRadius: 2, background: "linear-gradient(135deg, #ff9a9e, #fad0c4)" }}>
        <Avatar src="https://via.placeholder.com/80" sx={{ width: 80, height: 80, border: "3px solid white", boxShadow: 1 }} />
        <Box>
          <Typography fontWeight="bold">Your Photo</Typography>
          <Typography variant="caption" color="textSecondary">This will be displayed on your profile</Typography>
          <Box mt={1}>
            <Button variant="outlined" startIcon={<Upload />}>Upload New</Button>
            <Button variant="contained" sx={{ ml: 1 }}>Save</Button>
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={3} mt={3}>
        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography fontWeight="bold">Personal Information</Typography>
            <TextField label="Full Name" defaultValue="Ayman Shaltoni" fullWidth margin="normal" InputProps={{ startAdornment: <AccountCircle sx={{ mr: 1 }} /> }} />
            <TextField label="Email" defaultValue="Aymanshaltoni@gmail.com" fullWidth margin="normal" InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }} />
            <TextField label="Phone" defaultValue="+966 5502938123" fullWidth margin="normal" InputProps={{ startAdornment: <Phone sx={{ mr: 1 }} /> }} />
            <TextField label="Role" defaultValue="Senior Product Designer" fullWidth margin="normal" InputProps={{ startAdornment: <Work sx={{ mr: 1 }} /> }} />
          </Paper>
        </Grid>

        {/* Industry/Interests */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography fontWeight="bold">Industry/Interests</Typography>
            <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
              {industries.map((industry, index) => (
                <Chip key={index} label={industry} onDelete={() => setIndustries(industries.filter((_, i) => i !== index))} />
              ))}
            </Box>
            <TextField fullWidth value={newIndustry} onChange={(e) => setNewIndustry(e.target.value)} placeholder="Add new interest" margin="normal" />
            <Button variant="outlined" onClick={handleAddIndustry}>+ Add More</Button>
          </Paper>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography fontWeight="bold">Social Media</Typography>
            {socialLinks.map((social, index) => (
              <TextField key={index} label={social.platform} defaultValue={social.link} fullWidth margin="normal" InputProps={{ startAdornment: social.icon }} />
            ))}
            <TextField label="Platform" fullWidth margin="normal" value={newSocial.platform} onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })} />
            <TextField label="URL" fullWidth margin="normal" value={newSocial.link} onChange={(e) => setNewSocial({ ...newSocial, link: e.target.value })} />
            <Button variant="outlined" onClick={handleAddSocial}>+ Add More</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const UserProfile = () => (
  <Box display="flex">
    <Sidebar />
    <EditProfile />
  </Box>
);

export default UserProfile;
