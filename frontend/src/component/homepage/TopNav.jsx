import { Box, styled, IconButton, Typography, Avatar, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SyncIcon from "@mui/icons-material/Sync";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState, useEffect } from "react";

const NavBar = styled(Box)`
  background: #000000;
  width: 90vw;
  height: 10vh;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 2px solid #e0e0e0;
`;

const LeftSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButton = styled(IconButton)`
  border: 2px solid #e0e0e0;
  border-radius: 50%;
  padding: 6px;
  color: #ffffff;
`;

const CurvedBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid #e0e0e0;
  padding: 6px 12px;
  border-radius: 20px;
  color: #ffffff;
`;

const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TopNav = () => {
  // State to store the current date
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const options = { weekday: "short", day: "2-digit", month: "short" };
    setCurrentDate(today.toLocaleDateString("en-US", options));
  }, []);

  return (
    <NavBar>
      {/* Left Side - Action Buttons */}
      <LeftSection>
        <ActionButton>
          <SyncIcon />
        </ActionButton>
        <ActionButton>
          <CheckCircleIcon />
        </ActionButton>
        <CurvedBox>
          <Avatar src="/profile.jpg" alt="User" sx={{ width: 32, height: 32 }} />
          <Typography variant="body2">Chandresh S. Singh</Typography>
          <FavoriteIcon fontSize="small" />
          <MoreHorizIcon fontSize="small" />
        </CurvedBox>
      </LeftSection>

      {/* Right Side - Greeting, Date, and Menu */}
      <RightSection>
        {/* <Box display="flex" alignItems="center" gap="0.5rem">
          <Box>
            <Typography variant="body2">Hi Chandresh,</Typography>
            <Typography variant="caption">Welcome to Healthify</Typography>
          </Box>
        </Box> */}
        <Badge badgeContent={5} color="primary">
          <IconButton>
            <NotificationsIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Badge>
        <CurvedBox display="flex" alignItems="center" gap="0.5rem">
          <CalendarTodayIcon fontSize="small" />
          <Typography variant="body2">{currentDate}</Typography>
        </CurvedBox>
        <IconButton>
          <MenuIcon sx={{ color: "#ffffff" }} />
        </IconButton>
      </RightSection>
    </NavBar>
  );
};

export default TopNav;
