import React from "react";
import styles from "../styles/About.module.css";
import { Typography, Container, Grid } from "@mui/material";

export default function About() {
  return (
    <div className={styles.container1}>
      <div className={styles.container2}>
        <Typography className={styles.typo3}>
          SecureKloud is a cloud native company with a combination of products,
          frameworks and services, designed to solve problems around Blockchain,
          Cloud, Enterprise Security, Decision Engineering and Managed Services.
        </Typography>
        <img src="../Fb.png" className={styles.fb}></img>
        <img src="../Ln.png" className={styles.ln}></img>
        <Typography className={styles.products}>Products</Typography>
        <img src="../products.png" className={styles.img1}></img>
        <Typography className={styles.Services}>Services</Typography>
        <img src="../services.png" className={styles.img2}></img>
        <Typography className={styles.Company}>Company</Typography>
        <img src="../company.png" className={styles.img3}></img>
        <Typography className={styles.Resources}>Resources</Typography>
        <img src="../resources.png" className={styles.img4}></img>
        <img src="../support.png" className={styles.support}></img>
        <img src="../TermsnConditions.png" className={styles.TermsnConditions}></img>
        <img src="../rights.png" className={styles.rights}></img>
      </div>
      <div className={styles.container3}>
        <img src="../securekloud1.png" className={styles.securekloud1}></img>
        <Typography className={styles.typo1}>
          No. 5, Cenotaph Road, "Srinivas" Towers, II Floor, Teynampet, Chennai
          - 600 018 Tamil Nadu
        </Typography>
        <Typography className={styles.typo2}>
          +91-44-6602-8000 info@securekloud.com
        </Typography>
       
      </div>
    </div>
  );
}
