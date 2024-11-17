import { TextField, Box } from "@mui/material";
import { useState } from "react";
import styles from "../styles/form.module.css";

const Form = () => {
  const [formData, setFormData] = useState();
  return (
    <Box className={styles.formBox}>
      <TextField label="Playlist 1" variant="outlined" />
      <TextField label="Playlist 2" variant="outlined" />
      <TextField label="Playlist 3" variant="outlined" />
    </Box>
  );
};

export default Form;
