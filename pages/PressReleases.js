import { Typography, Container, Grid } from "@mui/material";
import styles from "../styles/PressReleases.module.css";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";

export default function PressReleases() {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <div>
            <img src="../1.png" className={styles.img1}></img>
          </div>
          <div className={styles.content1}>
            <Typography className={styles.date1}>Oct 13th, 2021</Typography>
            <Typography className={styles.Typo1}>
              SecureKloud Technologies to list its subsidiary Healthcare
              Triangle Inc on Nasdaq
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <img src="../2.png" className={styles.img2}></img>
          </div>
          <div className={styles.content2}>
            <Typography className={styles.date2}>Oct 13th, 2021</Typography>
            <Typography className={styles.typo2}>
              SecureKloud Technologies to list its subsidiary Healthcare
              Triangle Inc on Nasdaq
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <img src="../3.png" className={styles.img3}></img>
          </div>
           <div className={styles.content3}>
            <Typography className={styles.date3}>
            Oct 13th, 2021
            </Typography>
          <Typography className={styles.typo3}>
            SecureKloud Technologies to list its subsidiary Healthcare Triangle
            Inc on Nasdaq
          </Typography>
        </div> 
        </Grid>
      </Grid>
      <div>
        <Grid1/>
      </div>
      <div>
        <Grid2/>
      </div>
      
    </div>
  );
}
