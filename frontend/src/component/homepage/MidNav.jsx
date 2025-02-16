import { Box, Typography, styled } from "@mui/material";

// Styled Components for Layout
const MainBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  width: 100%;
  background-color: #f4f4f4; /* Light background for contrast */
`;

// Common Tile Styling
const Tile = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 250px;
  background-color: #ffffff;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

// Wrapper for Tile Grid
const TileGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  width: 80%;
  margin-top: 20px;
`;

const MidNav = () => {
  // Navigation Items
  const sections = [
    "User Profile",
    "Leaderboard",
    "Chatbot",
    "Dashboard",
    "E-commerce",
    "Doctor Appointment",
    "Habit (Journal + Routine)",
  ];

  return (
    <MainBox>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Welcome to Healthify
      </Typography>
      <TileGrid>
        {sections.map((section, index) => (
          <Tile key={index}>{section}</Tile>
        ))}
      </TileGrid>
    </MainBox>
  );
};

export default MidNav;