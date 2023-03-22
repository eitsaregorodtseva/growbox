import { InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useMemo, useState } from "react";
import { postImage } from "../../api/postImage";
import { input } from "./styles";

export const PredictImage = () => {
  const [file, setFile] = useState<File>();
  const [result, setResult] = useState();

  const filename = useMemo(() => {
    if (file) {
      return file?.name;
    }
    return "";
  }, [file]);

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handlePredictRequest = () => {
    if (file) {
      postImage(file)
        .then((response) => {
          console.log(response);
          return JSON.parse(JSON.stringify(response.data));
        })
        .then((data) => {
          console.log(data);
          setResult(data.filename);
        });
    }
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        margin: "40px 50px 50px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Typography variant="h3">Определение стадии роста растения</Typography>
      <Typography variant="h6">
        Наши гроубоксы используют современные технологии в области
        искусственного интеллекта для определения стадии роста растения.
      </Typography>
      <Typography variant="h4">Попробуйте сами!</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "0 0 0 0",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <InputLabel>
          <TextField
            sx={{ display: "none" }}
            name="upload-photo"
            type="file"
            onChange={handleChangeFile}
          />
          <Button component="span">Загрузить фото</Button>
        </InputLabel>
        <TextField
          value={filename}
          label="Ваше изображение:"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            readOnly: true,
          }}
          sx={input}
        />
      </Box>
      <Button sx={{ marginBottom: "30px" }} onClick={handlePredictRequest}>
        Предсказать
      </Button>
      {result && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <Typography variant="body1">Ваше растение на стадии:</Typography>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            {result}
          </Typography>
        </Box>
      )}
    </Box>
  );
};
