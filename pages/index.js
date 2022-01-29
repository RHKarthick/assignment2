import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Newsroom.module.css";
import styles from "../styles/Nroom.module.css";
import { Typography, Container, Grid } from "@mui/material";
import PressReleases from "./PressReleases";
import Latestnews from "./Latestnews";
import Invertednews from "./Invertednews";
import Clients from "./Clients";
import About from "./About";

function Newsroom() {
  return (
    <div>
      <Head>
        <title>Newsroom</title>
        {/* <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;500;600&display=swap');
        </style> */}
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@200;500;600&family=Lato&display=swap');
        </style>
      </Head>

      <Container fixed  className={styles.bg}>
        <Container>
          <img src="../0.png" className={styles.bimg}></img>
          <img src="../dark.png" className={styles.blackimg}></img>
          <img src="../Cname.png" className={styles.Cname}></img>
          <img src="../bar.png" className={styles.bar}></img>
          <Typography className={styles.typo1}>Be the first one to know!</Typography>
          <Typography className={styles.typo2}>
            Keep up with our latest company activities, customer success
            stories, social media talks, and all the big news you wouldn’t want
            to miss.
          </Typography>
        </Container>
        <Typography className={styles.heading1}>Overview</Typography>
        <Container>
          <Typography className={styles.para}>
            Get to know the 5 W’s (Who, What, When, Where, Why) of SecureKloud
            at one place, and explore our past, present, and ongoing action from
            here. We’re thrilled to share our work with the world, so keep
            coming for more.
          </Typography>
        </Container>

        <Typography className={styles.heading2}>Latest News</Typography>
        <Container  className={styles.container2}>
          <Latestnews />
        </Container>

        <Typography className={styles.heading3}>Press Releases</Typography>
        <Container className={styles.container1}>
          <PressReleases />
        </Container>

        <Typography className={styles.heading4}>Latest Blog</Typography>
        <Container className={styles.container3}>
          <Latestnews />
        </Container>
        <Container className={styles.container4}>
          <Invertednews />
        </Container>

        <Container>
          <Clients />
        </Container>

        <Container>
          <About />
        </Container>
      </Container>
    </div>
  );
}
export default Newsroom;
