import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect } from "react";
import logo from "./growBox.png";

export const Main = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "100px",
    }}
    >
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        columnGap: "150px",
        rowGap: "80px",
        // flexBasis: "500px",
        // marginLeft: '200px',
        // marginRight: '50px'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "40pt", textTransform: "uppercase" }}>
          Лукошко
        </Typography>
        <Typography>Умный гроубокс для вашего дома</Typography>
      </Box>
      <Box sx={{ marginLeft: "30px" }}>
        <img src={logo} height="400px" alt="" />
      </Box>
      
    </Box>
    {/* <Link sx={{textDecoration: 'none'}} href="/connection">Заказать</Link> */}
    </Box>
  );
};
