import { Link, SvgIcon } from "@mui/material";
import Box from "@mui/material/Box";
import { Magnifier } from "../icons/Magnifier";
import { Logo } from "../icons/Logo";

export const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "35px 30px",
        marginRight: "30px",
        gap: '30px'
      }}
    >
      <Box>
        <SvgIcon sx={{height: '24px', width: '24px'}}>
          <Logo />
        </SvgIcon>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "end",
        }}
      >
        <Link sx={{textDecoration: 'none'}} href="/">Главная</Link>
        <Link sx={{textDecoration: 'none'}} href="/panel">Панель</Link>
        <Link sx={{textDecoration: 'none'}} href="/auth">Вход</Link>
        <SvgIcon sx={{height: '24px', width: '24px'}}>
          <Magnifier />
        </SvgIcon>
      </Box>
    </Box>
  );
};
