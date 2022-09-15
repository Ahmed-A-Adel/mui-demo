import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Feedbar from "./components/Feedbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: darkMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar mode={darkMode} setMode={setDarkMode} />
          <Feedbar />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
