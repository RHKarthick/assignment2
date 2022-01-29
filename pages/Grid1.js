import { Typography, Container, Grid } from "@mui/material";
import styles from "../styles/Grid1.module.css";

export default function Grid1() {
  return (
    <Grid container>
      <Grid item>
        <img src="../Grid/g1.png" className={styles.g1}></img>
        <div className={styles.content1}>
          <Typography className={styles.date1}>Nov 3th, 2020</Typography>
          <Typography className={styles.typo1}>
            Case For Integrated Corporate Governance
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <img src="../Grid/g2.png" className={styles.g2}></img>
        <div className={styles.content2}>
          <Typography className={styles.date1}>Aug 6th, 2020</Typography>
          <Typography className={styles.typo1}>
            Achievement: SecureKloud maintains status as AWS Managed Services
            Provider for fifth consecutive
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <img src="../Grid/g3.png" className={styles.g3}></img>
        <div className={styles.content3}>
          <Typography className={styles.date1}>Nov 4th, 2020</Typography>
          <Typography className={styles.typo1}>
          Community Day, Chennai
          </Typography>
        </div>
      </Grid>
      <Grid item>
        <img src="../Grid/g4.png" className={styles.g4}></img>
        <div className={styles.content4}>
          <Typography className={styles.date1}>May 11th, 2019</Typography>
          <Typography className={styles.typo1}>
          Visual Studio 2019 Launch at SecureKloud, Chennai
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
