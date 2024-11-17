import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import { Box, Typography } from "@mui/material";

import styles from "../styles/home.module.css";
import Form from "./Form";

const Home = () => {
  return (
    <Paper className={styles.homeBackground}>
      <Box className={styles.headerBox}>
        <Typography variant="h3" className={styles.mainTitle}>
          Spot Mix
        </Typography>
      </Box>
      <Form />
    </Paper>
  );
};

export default Home;
