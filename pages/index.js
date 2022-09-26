import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
  Box,
  CardMedia,
} from "@mui/material";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "../styles/Home.module.css";
import Image from "../public/curry.jpg"

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Home() {
  // Player 1
  const [score1, setScore1] = useState(0);
  const [jpShoot1, setJpShoot1] = useState(0);
  const [bkShoot1, setBkShoot1] = useState(0);
  const [layUp1, setLayUp1] = useState(0);
  const [freeThrow1, setFreeThrow1] = useState(0);
  const [assist1, setAssist1] = useState(0);
  const [threepoints1, setThreepoints1] = useState(0);
  const [missShot1, setMissShot1] = useState(0);
  const [missPass1, setMissPass1] = useState(0);
  const [blkShot1, setBlkShot1] = useState(0);
  const [rebound1, setRebound1] = useState(0);
  const [steal1, setSteal1] = useState(0);

  // useEffect(() => {
  //   localStorage.setItem("player1", JSON.stringify(player1))
  // }, [player1]);

  // useEffect(()=>{
  //   const data = JSON.parse(localStorage.getItem('score'));
  //   console.log(data);
  //   if ( data !== null ) setScore1(data);
  // },[])

  // useEffect(() => {
  //   localStorage.setItem("score", JSON.stringify(score1));
  // }, [score1]);

  // useEffect(() => {
  //   localStorage.setItem("assist", JSON.stringify(assist1));
  // }, [assist1]);

  // useEffect(() => {
  //   localStorage.setItem("3 points", JSON.stringify(threepoints1));
  // }, [threepoints1]);

  // useEffect(() => {
  //   localStorage.setItem("Miss Shot", JSON.stringify(missShot1));
  // }, [missShot1]);
  // useEffect(() => {
  //   localStorage.setItem("Block Shot", JSON.stringify(blkShot1));
  // }, [blkShot1]);
  // useEffect(() => {
  //   localStorage.setItem("Rebound Shot", JSON.stringify(rebound1));
  // }, [rebound1]);
  // useEffect(() => {
  //   localStorage.setItem("Steal", JSON.stringify(steal1));
  // }, [steal1]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(playerOne);
  // };

  // Player 2
  const [score2, setScore2] = useState(0);
  const [assist2, setAssist2] = useState(0);
  const [threepoints2, setThreepoints2] = useState(0);
  const [missShot2, setMissShot2] = useState(0);
  const [blkShot2, setBlkShot2] = useState(0);
  const [rebound2, setRebound2] = useState(0);
  const [steal2, setSteal2] = useState(0);

  // Player 3
  const [score3, setScore3] = useState(0);
  const [assist3, setAssist3] = useState(0);
  const [threepoints3, setThreepoints3] = useState(0);
  const [missShot3, setMissShot3] = useState(0);
  const [blkShot3, setBlkShot3] = useState(0);
  const [rebound3, setRebound3] = useState(0);
  const [steal3, setSteal3] = useState(0);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <Container sx={{ padding: "0", margin: "20px 0" }}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Stephy" value="1" />
                <Tab label="Cps" value="2" />
                <Tab label="WinYan" value="3" />
              </TabList>
            </Box>
            <TabPanel sx={{ padding: "15px 0", margin: "0" }} value="1">
              <Grid container spacing={1} alignItems="center" justifyContent="center">
                <Grid item xs={6}>
                  <Typography varient="h5" paddingLeft="10px" paddingBottom="10px" marginTop="10px">
                    Offensive Stats
                  </Typography>
                  {/* <Button
                    variant="contained"
                    color="info"
                    aria-label="Offensive Stats"
                    fullWidth
                    sx={{fontSize: '1rem'}}
                  >
                    Offensive Stats
                  </Button> */}
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Scores: ${score1}`}
                  </Button>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="Jump Shot"
                    fullWidth
                  >
                    {`Jump Shot: ${jpShoot1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setJpShoot1(Math.max(jpShoot1 - 1, 0));
                        setScore1(Math.max(score1 - 2, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setJpShoot1(Math.max(jpShoot1 + 1, 0));
                        setScore1(score1 + 2);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="Bank Shot"
                    fullWidth
                  >
                    {`Bank Shot: ${bkShoot1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setBkShoot1(Math.max(bkShoot1 - 1, 0));
                        setScore1(Math.max(score1 - 2, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setBkShoot1(Math.max(bkShoot1 + 1, 0));
                        setScore1(score1 + 2);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="Lay Up"
                    fullWidth
                  >
                    {`Lay Up: ${layUp1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setLayUp1(Math.max(layUp1 - 1, 0));
                        setScore1(Math.max(score1 - 2, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setLayUp1(Math.max(layUp1 + 1, 0));
                        setScore1(score1 + 2);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid><Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="Free Throw"
                    fullWidth
                  >
                    {`Free Throw: ${freeThrow1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setFreeThrow1(Math.max(freeThrow1 - 1, 0));
                        setScore1(Math.max(score1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setFreeThrow1(Math.max(freeThrow1 + 1, 0));
                        setScore1(Math.max(score1 + 1, 0));
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="Assist"
                    fullWidth
                  >
                    {`Assists: ${assist1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setAssist1(Math.max(assist1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setAssist1(assist1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="info"
                    aria-label="3 Points"
                    fullWidth
                  >
                    {`3 Points: ${threepoints1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="info"
                      aria-label="reduce"
                      onClick={() => {
                        setThreepoints1(Math.max(threepoints1 - 1, 0));
                        setScore1(Math.max(score1 - 3, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setThreepoints1(threepoints1 + 1);
                        setScore1(Math.max(score1 + 3, 0));
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid container paddingTop="30px" spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography varient="h5" paddingLeft="10px">
                    Defensive Stats
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="Missed Shot"
                    fullWidth
                  >
                    {`Missed Shot: ${missShot1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      aria-label="reduce"
                      onClick={() => {
                        setMissShot1(Math.max(missShot1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      aria-label="increase"
                      onClick={() => {
                        setMissShot1(missShot1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="Missed Pass"
                    fullWidth
                  >
                    {`Missed Pass: ${missPass1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      aria-label="reduce"
                      onClick={() => {
                        setMissPass1(Math.max(missPass1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      aria-label="increase"
                      onClick={() => {
                        setMissPass1(missPass1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="Steal"
                    fullWidth
                  >
                    {`Steal: ${steal1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      aria-label="reduce"
                      onClick={() => {
                        setSteal1(Math.max(steal1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      aria-label="increase"
                      onClick={() => {
                        setSteal1(steal1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="Block Shot"
                    fullWidth
                  >
                    {`Block Shot: ${blkShot1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      aria-label="reduce"
                      onClick={() => {
                        setBlkShot1(Math.max(blkShot1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      aria-label="increase"
                      onClick={() => {
                        setBlkShot1(blkShot1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="Rebound"
                    fullWidth
                  >
                    {`Rebound: ${rebound1}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="warning"
                      aria-label="reduce"
                      onClick={() => {
                        setRebound1(Math.max(rebound1 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="outlined"
                      color="warning"
                      aria-label="increase"
                      onClick={() => {
                        setRebound1(rebound1 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                
              </Grid>
            </TabPanel>
            <TabPanel sx={{ padding: "15px 0", margin: "0" }} value="2">
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography varient="h5" paddingLeft="10px" marginTop="10px">
                    Offensive Stats
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Scores: ${score2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setScore2(Math.max(score2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setScore2(score2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Assists: ${assist2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setAssist2(Math.max(assist2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setAssist2(assist2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`3 Points: ${threepoints2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setThreepoints2(Math.max(threepoints2 - 1, 0));
                        setScore2(Math.max(score2 - 3, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setThreepoints2(threepoints2 + 1);
                        setScore2(Math.max(score2 + 3, 0));
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid container paddingTop="30px" spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography varient="h5" paddingLeft="10px">
                    Defensive Stats
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Miss Shot: ${missShot2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setMissShot2(Math.max(missShot2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setMissShot2(missShot2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Block Shot: ${blkShot2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setBlkShot2(Math.max(blkShot2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setBlkShot2(blkShot2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Rebound: ${rebound2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setRebound2(Math.max(rebound2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setRebound2(rebound2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Steal: ${steal2}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setSteal2(Math.max(steal2 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setSteal2(steal2 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel sx={{ padding: "15px 0", margin: "0" }} value="3">
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography varient="h5" paddingLeft="10px" marginTop="10px">
                    Offensive Stats
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Scores: ${score3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setScore3(Math.max(score3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setScore3(score3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Assists: ${assist3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setAssist3(Math.max(assist3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setAssist3(assist3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="info"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`3 Points: ${threepoints3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setThreepoints3(Math.max(threepoints3 - 1, 0));
                        setScore3(Math.max(score3 - 3, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setThreepoints3(threepoints3 + 1);
                        setScore3(Math.max(score3 + 3, 0));
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid container paddingTop="30px" spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <Typography varient="h5" paddingLeft="10px">
                    Defensive Stats
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Miss Shot: ${missShot3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setMissShot3(Math.max(missShot3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setMissShot3(missShot3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Block Shot: ${blkShot3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setBlkShot3(Math.max(blkShot3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setBlkShot3(blkShot3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Rebound: ${rebound3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setRebound3(Math.max(rebound3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setRebound3(rebound3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={8}>
                  <Button
                    variant="outlined"
                    color="warning"
                    aria-label="Scores"
                    fullWidth
                  >
                    {`Steal: ${steal3}`}
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <ButtonGroup>
                    <Button
                      color="error"
                      aria-label="reduce"
                      onClick={() => {
                        setSteal3(Math.max(steal3 - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      variant="contained"
                      color="info"
                      aria-label="increase"
                      onClick={() => {
                        setSteal3(steal3 + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </TabPanel>
          </TabContext>
          <CardMedia
          component="img"
          image={Image.src}
          alt="Stephen Curry"
        />
        </Box>
      </Container>
    </div>
  );
}
