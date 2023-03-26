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
      <Typography variant="h3">Авторизация</Typography>
      <Box
        sx={{
          marginTop: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
          alignItems: 'center'
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
