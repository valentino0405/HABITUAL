import { Box, styled, Button, FormControl, TextField, Typography, InputAdornment } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import HttpsIcon from '@mui/icons-material/Https';

const Container = styled(Box)`
    width: 60vw;
    margin: 5% auto;
    display: flex;
    height: 70vh;
    box-shadow: -13px 20px 40px 11px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    overflow: auto;
`;

const LeftContainer = styled(Box)`
    flex: 1.5;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
`;

const RightContainer = styled(Box)`
    flex: 1;
    background: linear-gradient(to right, #141E30, #243B55);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    gap: 20px;
`;

const SocialIconsContainer = styled(Box)`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px 0;
`;

const StyledButton = styled(Button)`
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
`;

const Login = () => {
    return (
        <Container>
            {/* LEFT SIDE (Login Form) */}
            <LeftContainer>
                <Typography variant="h4" fontWeight="bold">Sign in</Typography>
                <SocialIconsContainer>
                    <FacebookOutlinedIcon fontSize="large" />
                    <GoogleIcon fontSize="large" />
                    <LinkedInIcon fontSize="large" />
                </SocialIconsContainer>
                <Typography variant="body2" color="gray">or use your account</Typography>
                
                <FormControl fullWidth>
                    <TextField
                        name="email"
                        placeholder="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <TextField
                        name="password"
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <HttpsIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                </FormControl>

                <Typography variant="body2" sx={{ mt: 2, cursor: 'pointer', color: 'gray' }}>Forgot your password?</Typography>
                <StyledButton variant="contained" color="primary" sx={{ background: "Black", color: "white", width: '30%', borderRadius: '30px' }}>Sign In</StyledButton>
            </LeftContainer>

            {/* RIGHT SIDE (Welcome Message with Gradient Background) */}
            <RightContainer>
                <Typography variant="h4" fontWeight="bold">Hello, Friend!</Typography>
                <Typography variant="body1" textAlign="center">
                    Enter your personal details and <br/> start your journey with us
                </Typography>
                <StyledButton variant="outlined" sx={{ borderColor: "white", color: "white", width: '50%' }}>Sign Up</StyledButton>
            </RightContainer>
        </Container>
    );
};

export default Login;
