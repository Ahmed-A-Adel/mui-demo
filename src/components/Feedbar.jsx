import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";
const Feedbar = () => {
  return (
    <Box flexGrow={4} p={2} component={"main"} style={{ marginLeft: "0" }}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feedbar;
