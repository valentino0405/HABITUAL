import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";

const drawerWidth = 80;

// Styled Components
const Sidebar = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    background: "#f8f9fa",
    paddingTop: "20px",
  },
});

const TopNav = styled(AppBar)({
  background: "#ffffff",
  boxShadow: "none",
  padding: "10px",
});

const MainContainer = styled(Box)({
  display: "flex",
});

const ToolbarContent = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const IconGroup = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15px",
});

const LeftNav = () => {
  const [open, setOpen] = useState(true);

  return (
    <MainContainer>
      {/* Left Sidebar */}
      <Sidebar variant="permanent">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShowChartIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Sidebar>

      {/* Main Content Area */}
      <Box flexGrow={1}>
        {/* Top Navigation Bar */}
        <TopNav position="static">
          <ToolbarContent>
            {/* Left - Menu Icon */}
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>

            {/* Right - Profile & Notifications */}
            <IconGroup>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit">
                <PersonIcon />
              </IconButton>
              <IconButton color="inherit">
                <SettingsIcon />
              </IconButton>
            </IconGroup>
          </ToolbarContent>
        </TopNav>
      </Box>
    </MainContainer>
  );
};

export default LeftNav;