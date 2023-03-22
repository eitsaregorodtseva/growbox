import { InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useMemo, useState } from "react";
import { postImage } from "../../api/postImage";
import { input } from "./styles";
import pic00 from "../../pics/set/pic_0000.jpg";
import pic01 from "../../pics/set/pic_0001.jpg";
import pic04 from "../../pics/set/pic_0004.jpg";
import pic13 from "../../pics/set/pic_0013.jpg";
import pic18 from "../../pics/set/pic_0018.jpg";
import pic21 from "../../pics/set/pic_0021.jpg";
import pic30 from "../../pics/set/pic_0030.jpg";
import pic32 from "../../pics/set/pic_0032.jpg";
import pic34 from "../../pics/set/pic_0034.jpg";

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
        margin: "30px 50px 50px 50px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography variant="h4">Определение стадии роста растения</Typography>
      <Typography variant="h6">
        Наши гроубоксы используют современные технологии в области
        искусственного интеллекта для определения стадии роста растения.
      </Typography>
      <Typography variant="h5">Попробуйте сами!</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "20px",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2px",
            justifyContent: "center",
            width: '70%'
          }}
        >
          <img src={pic00} width="30%" />
          <img src={pic01} width="30%" />
          <img src={pic04} width="30%" />
          <img src={pic13} width="30%" />
          <img src={pic18} width="30%" />
          <img src={pic21} width="30%" />
          <img src={pic30} width="30%" />
          <img src={pic32} width="30%" />
          <img src={pic34} width="30%" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "30px",
            width: '300px'
          }}
        >
          <Typography>
            Выберите любое изображение и нажмите на кнопку, расположенную ниже.
          </Typography>
          <Button sx={{ marginBottom: "30px" }} onClick={handlePredictRequest}>
            Определить стадию
          </Button>
        </Box>
      </Box>
      {/* <Box
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
      </Box> */}

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
