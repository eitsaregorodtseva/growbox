import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box
      sx={{
        marginLeft: "35px",
        marginBottom: "30px",
        height: '100px'
      }}
    >
      <Typography variant="body1">ⓒ 2023 Лукошко</Typography>
    </Box>
  );
};
