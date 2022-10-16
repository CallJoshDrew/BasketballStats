import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Player({ id, name, onRemove }) {

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



  return (
    <React.Fragment>
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={8}>
          <Typography
            varient="h5"
            paddingLeft="10px"
            paddingBottom="10px"
            marginTop="10px"
          >
            Offensive Stats
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="info" aria-label="Scores" fullWidth>
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
        </Grid>
        <Grid item xs={8}>
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
          <Button variant="contained" color="info" aria-label="Steal" fullWidth>
            {`Steal: ${steal1}`}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <ButtonGroup>
            <Button
              color="info"
              aria-label="reduce"
              onClick={() => {
                setSteal1(Math.max(steal1 - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              variant="outlined"
              color="info"
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
      <Grid container paddingTop="30px" spacing={1} alignItems="center">
        <Grid item xs={8}>
          <Typography varient="h5" paddingLeft="10px">
            Other Stats
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
      <Button onClick={() => onRemove(id)} variant="contained" color="error" size='small' sx={{marginTop: '20px'}} fullWidth>
        Remove Player {name}
      </Button>
    </React.Fragment>     
  );
}
 {/* <Box position="relative">
        <Fab
          onClick={() => onRemove(id)}
          sx={{
            position: "absolute",
            top: -22,
            right: 0,
            height: "1.2rem",
            minHeight: "1.2rem",
            width: "1.2rem",
          }}
          color="error"
          aria-label="add">
          <RemoveIcon sx={{ fontSize: "1rem" }} />
        </Fab>
      </Box> */}