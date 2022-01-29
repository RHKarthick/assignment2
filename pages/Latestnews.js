import { Typography, Container, Grid } from "@mui/material";
import styles from "../styles/Latestnews.module.css";
import React from "react";

export default function Latestnews() {
  return (
    <div>
      < Grid container className={styles.container} >
        <Grid item  >
          <img src="../1.png" className={styles.img1} ></img>
           <img src="../halfdark.png" className={styles.img1} ></img> 
          <Typography className={styles.date1}>Oct 13th, 2021</Typography> 
          
          <Typography className={styles.content1}>SecureKloud Technologies to list its subsidiary Healthcare Triangle Inc on Nasdaq</Typography>
        </Grid>
       
        <Grid item className={styles.I}>
         
          <div className={styles.img2}>
              <Typography className={styles.date2}>Oct 13th, 2021</Typography>
              <Typography className={styles.content2}>SecureKloud Technologies to list its subsidiary Healthcare Triangle Inc on Nasdaq</Typography>
              <Typography className={styles.readmore1}>Read More</Typography>
          </div>
         
        </Grid>
        
        <Grid item className={styles.I}>
             <div className={styles.img3}> 
            <Typography className={styles.date3}>Oct 13th, 2021</Typography>
            <Typography className={styles.content3}>SecureKloud Technologies to list its subsidiary Healthcare Triangle Inc on Nasdaq</Typography>
            <Typography className={styles.readmore2}>Read More</Typography>
            </div>
          
        </Grid> 
      </Grid>
    </div>
  );
}
