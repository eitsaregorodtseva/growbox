import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Box from "@mui/material/Box";
import { Paper, ThemeProvider } from "@mui/material";
import { theme } from "./theme/components";
import backImage from "./back.jpg";
import { Auth, Connection, Main, Panel, PredictImage, Users } from "./pages";
import { Footer } from "./components/Footer";
import { User } from "./pages/User/User";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ backgroundImage: `url(${backImage})` }}>
        <Box
          sx={{
            color: "#ffffff",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            overflowX: "hidden"
          }}
        >
          <Navbar />
          <Box
            sx={{
              // minHeight: '80vh',
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/connection" element={<Connection />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/users" element={<Users />} />
                <Route path="/predict" element={<PredictImage />} />
                <Route path="/panel" element={<Panel />} />
                <Route path="/dashboard" element={<User />} />
              </Routes>
            </BrowserRouter>
          </Box>
          {/* <Footer /> */}
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
