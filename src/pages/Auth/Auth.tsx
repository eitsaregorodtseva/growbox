import { Box, TextField, Typography } from "@mui/material";

export const Auth = () => {
  return (
    <Box
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">Авторизация</Typography>
      <Box
        sx={{
          marginTop: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <TextField 
          variant="standard" 
          label="Логин"
        />
        <TextField 
          variant="standard" 
          label="Пароль"
          type="password"
        />
      </Box>
    </Box>
  );
};
