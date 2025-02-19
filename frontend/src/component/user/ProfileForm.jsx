import { Box, Typography, TextField, Button, Avatar } from "@mui/material";
import { styled } from "@mui/system";

const ProfileContainer = styled(Box)`
  flex: 1;
  padding: 40px;
`;

const InfoSection = styled(Box)`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
`;

const ProfileForm = () => {
  return (
    <ProfileContainer>
      <Typography variant="h5" fontWeight="bold">Edit User Profile</Typography>

      <Box display="flex" alignItems="center" gap={2} marginTop={3}>
        <Avatar src="https://via.placeholder.com/80" sx={{ width: 80, height: 80 }} />
        <Box>
          <Typography variant="body1">Your Photo</Typography>
          <Button variant="contained" sx={{ marginRight: 1 }}>Upload New</Button>
          <Button variant="outlined">Save</Button>
        </Box>
      </Box>

      <InfoSection>
        <Typography variant="h6">Personal Information</Typography>
        <TextField fullWidth label="Full Name" margin="normal" defaultValue="Ayman Shaltoni" />
        <TextField fullWidth label="Email Address" margin="normal" defaultValue="aymanshaltoni@gmail.com" />
        <TextField fullWidth label="Mobile Number" margin="normal" defaultValue="+966 5502938123" />
        <TextField fullWidth label="Role" margin="normal" defaultValue="Senior Product Designer" />
      </InfoSection>
    </ProfileContainer>
  );
};

export default ProfileForm;
