import { Box, Typography, Avatar, Button } from "@mui/material";
import { Settings, Lock, Logout, Person } from "@mui/icons-material";
import { styled } from "@mui/system";

const Sidebar = styled(Box)`
  width: 20%;
  height: 100vh - 20px;
  background: radial-gradient(circle at top left, #ff00ff, #6600ff, #1e1e2f);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0px 20px;
  margin: 20px;
  border-radius: 30px;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
`;


const MenuContainer = styled(Box)`
  width: 100%;
  margin-top: 20vh;
    display: flex;
    flex-direction: column;
  `;

const MenuButton = styled(Button)`
  color: white;
  justify-content: flex-start;
  width: 100%;
  height: 8vh;
  font-size: 20px;
  text-transform: none;
  border-radius: 8px;
  transition: all 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
  }
`;

const LeftTab = () => {
    return (

        <Sidebar>
            {/* <UserAvatar src="https://via.placeholder.com/80" />
      <Typography variant="h6">User Name</Typography>
      <UserEmail variant="body2">username@email.com</UserEmail> */}

            <MenuContainer>
                <MenuButton startIcon={<Person />}>Account</MenuButton>
                <MenuButton startIcon={<Settings />}>Settings</MenuButton>
                <MenuButton startIcon={<Lock />}>Change Password</MenuButton>
                <MenuButton startIcon={<Logout />}>Logout</MenuButton>
            </MenuContainer>
        </Sidebar>
    );
};

export default LeftTab;