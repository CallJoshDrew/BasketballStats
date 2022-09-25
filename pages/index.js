import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Head from "next/head";
import styles from "../styles/Home.module.css";



export default function Home() {
  const [player1, setPlayer1] = useState("Player1");
  const [score1, setScore1] = useState(0);
  const [assist1, setAssist1] = useState(0);
  const [threepoints1, setThreepoints1] = useState(0);
  const [missShot1, setMissShot1] = useState(0);
  const [blkShot1, setBlkShot1] = useState(0);
  const [rebound1, setRebound1] = useState(0);
  const [steal1, setSteal1] = useState(0);
  
  // useEffect(() => {
  //   localStorage.setItem("player1", JSON.stringify(player1))
  // }, [player1]);

  useEffect(() => {
      localStorage.setItem("score", JSON.stringify(score1))
    }, [score1]);

  // useEffect(()=>{
  //   const data = JSON.parse(localStorage.getItem('score'));
  //   console.log(data);
  //   if ( data !== null ) setScore1(data);
  // },[])

  useEffect(() => {
    localStorage.setItem("assist", JSON.stringify(assist1))
  }, [assist1]);

  useEffect(() => {
    localStorage.setItem("3 points", JSON.stringify(threepoints1))
  }, [threepoints1]);

  useEffect(() => {
    localStorage.setItem("Miss Shot", JSON.stringify(missShot1))
  }, [missShot1]);
  useEffect(() => {
    localStorage.setItem("Block Shot", JSON.stringify(blkShot1))
  }, [blkShot1]);
  useEffect(() => {
  localStorage.setItem("Rebound Shot", JSON.stringify(rebound1))
  }, [rebound1]);
  useEffect(() => {
    localStorage.setItem("Steal", JSON.stringify(steal1))
    }, [steal1]);
  
  // const handleChange = (e) => {
  //   e.preventDefault();
  //   console.log(playerOne);
  // };


  


 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="md">
        <Grid container padding="10% 2% 0" spacing={1} alignItems="center">
          <Grid item xs={12}>
            <TextField
              label="Player1"
              variant="outlined"
              placeholder={player1}
              onInput={(e) => setPlayer1(e.target.value)}
              
            />
          </Grid>
          <Grid item xs={12}>
            <Typography varient="h5" paddingLeft="10px" marginTop="20px">
              Offensive Stats
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Scores: ${score1}`}
              variant="outlined"
              type="number"
             
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setScore1(Math.max(score1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setScore1(score1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Assists: ${assist1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setAssist1(Math.max(assist1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setAssist1(assist1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`3 Points: ${threepoints1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setThreepoints1(Math.max(threepoints1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setThreepoints1(threepoints1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid container padding="10% 2%" spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Typography varient="h5" paddingLeft="10px">
              Defensive Stats
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Miss Shot: ${missShot1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setMissShot1(Math.max(missShot1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setMissShot1(missShot1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Block Shot: ${blkShot1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setBlkShot1(Math.max(blkShot1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setBlkShot1(blkShot1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Rebound: ${rebound1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setRebound1(Math.max(rebound1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setRebound1(rebound1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={`Steal: ${steal1}`}
              variant="outlined"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <ButtonGroup>
              <Button
                aria-label="reduce"
                onClick={() => {
                  setSteal1(Math.max(steal1 - 1, 0));
                }}
              >
                <RemoveIcon fontSize="small" />
              </Button>
              <Button
                aria-label="increase"
                onClick={() => {
                  setSteal1(steal1 + 1);
                }}
              >
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
