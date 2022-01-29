import { Typography, Container, Grid} from "@mui/material";
import styles from "../styles/Grid2.module.css";

export default function Grid2() {
  return (
    <Grid container>
        <Grid item>
        <img src="../Grid/g5.png" className={styles.g5}></img>
        <div className={styles.content1}>
        <Typography className={styles.date1}>Apr 17th, 2019</Typography>
          <Typography className={styles.typo1}>
          Achievement : SecureKloud renews status as AWS Managed Services Partners
          </Typography>
        </div>
        </Grid>
        <Grid item>
        <img src="../Grid/g6.png" className={styles.g6}></img>
        <div className={styles.content2}>
        <Typography className={styles.date1}>Aug 6th, 2020</Typography>
          <Typography className={styles.typo1}>
          Achievement: SecureKloud maintains status as AWS Managed Services Provider for fifth consecutive
          </Typography>
        </div>
        </Grid>
        <Grid item>
        <img src="../Grid/g7.png" className={styles.g7}></img>
        <div className={styles.content3}>
        <Typography className={styles.date1}>Nov 4th, 2020</Typography>
          <Typography className={styles.typo1}>
          Community Day, Chennai
          </Typography>
        </div>
        </Grid>
        <Grid item>
        <img src="../Grid/g8.png" className={styles.g8}></img>
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
