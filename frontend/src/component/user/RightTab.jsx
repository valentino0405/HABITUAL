import { Box, Typography, Avatar, Button } from "@mui/material";
import { Settings, Lock, Logout, Email, Person, SwapHoriz } from "@mui/icons-material";
import { styled } from "@mui/system";

const RightSidebar = styled(Box)`
  flex: 1;
  height: 100vh - 40px;
  color: white;
padding: 40px 40px 0px 40px;`
    ;

const ProfileContainer = styled(Box)`
  margin-top: 32px;
  background: linear-gradient(135deg, #222244, #444477);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
`;

const UserAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

const InfoText = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonGroup = styled(Box)`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const RightTab = () => {
    return (
        <RightSidebar>
            <Typography variant="h4" fontWeight="bold">
                Account Settings
            </Typography>
            <ProfileContainer>
                <Typography variant="h6">Profile Information</Typography>
                <Box display="flex" alignItems="center" gap={2} marginTop={2}>
                    <UserAvatar src="https://via.placeholder.com/60" />
                    <Box>
                        <Typography variant="h6">User Name</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                            username@email.com
                        </Typography>
                    </Box>
                </Box>

                <Box marginTop={3}>
                    <InfoText variant="body1">
                        <Email /> Email: username@email.com
                    </InfoText>
                    <InfoText variant="body1" marginTop={1}>
                        <Person /> Name: User Name
                    </InfoText>
                </Box>

                <ButtonGroup>
                    <Button startIcon={<Lock />} variant="contained" color="primary">
                        Change Password
                    </Button>
                    <Button startIcon={<SwapHoriz />} variant="outlined" color="secondary">
                        Transfer Ownership
                    </Button>
                </ButtonGroup>
            </ProfileContainer>
        </RightSidebar>
    );
};

export default RightTab;