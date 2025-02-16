import { Box, Typography, IconButton, Avatar, Menu, MenuItem, Badge } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { styled } from "@mui/system";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";

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

const RightSection = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
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

const TopNav = () => {
  const { account, setAccount } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const savedAccount = localStorage.getItem("account");
    if (savedAccount) {
      setAccount(savedAccount);
    }
    const date = new Date().toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    setCurrentDate(date);
  }, [setAccount]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setAccount("");
    localStorage.removeItem("account");
    handleClose();
    navigate("/login");
  };

  return (
    <NavBar>
      {/* Left Section - Profile and Account */}
      <LeftSection>
        <CurvedBox>
          <Avatar alt="User" src="/profile.jpg" sx={{ width: 32, height: 32 }} />
          <Typography variant="body2" onClick={handleClick} style={{ cursor: "pointer" }}>
            {account || "Guest"}
          </Typography>
        </CurvedBox>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={logoutUser}>
            <PowerSettingsNewIcon color="primary" fontSize="small" />
            <Typography style={{ marginLeft: 10 }}>Logout</Typography>
          </MenuItem>
        </Menu>
      </LeftSection>

      {/* Right Section - Notifications, Date, and Menu */}
      <RightSection>
        <Badge badgeContent={5} color="primary">
          <IconButton>
            <NotificationsNoneIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Badge>
        <CurvedBox>
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