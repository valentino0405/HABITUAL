import React from "react";
import { Box, keyframes } from "@mui/material";
import LeftTab from "./LeftTab";
import RightTab from "./RightTab";
import { styled } from "@mui/system";


const Container = styled(Box)`
  display: flex;
  height: 100vh;
   background: linear-gradient(120deg, #110022, #220044, #2a2a3b);
  background-size: 400% 400%;
`;

const UserProfile = () => {
  return (
    <Container>
      <LeftTab />
      <RightTab />
    </Container>
  );
};

export default UserProfile;