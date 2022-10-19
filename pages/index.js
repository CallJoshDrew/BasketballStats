import React, { useEffect, useState } from "react";
import { Box, Button, CardMedia, Container, Grid, Tab, TextField, Typography } from "@mui/material";
import Player from "../components/player";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import Image from "../public/curry.jpg";
export default function BasketballState() {

  const [players, setNewPlayers] = React.useState([]);
  
  // Finding the length of the Object
  const totalPlayers = Object.keys(players).length;
  const [enterName, setEnterName] = React.useState('');
  const generateKey = (pre) => {
    return `Player_${ pre }_${ new Date().getTime() }`;
  }
  
  const handleAddNew = () => {
    setNewPlayers([...players, { id: generateKey(enterName), name: enterName }]);
  };
  const handleRemove = (id) => {
    const playerId = players.filter((player) => player.id !== id);
    setNewPlayers(playerId);
  };
  // tabpanel value
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const onIncrease = (id, name, scores) => {
  //   console.log('Clicked '+ id + ' '+ name + ' with total '+ scores);
  //   const found = players.find(player => {
  //     return player.id === id;
  //   });

  //   // const b = {...found, scores: 100};
  //   // setNewPlayers([...players, b]);
  //   // const newArr = [...players];
  //   // const index = newArr.indexOf(found);
  //   // newArr[index] = {...found};
  //   // // newArr[index].scores+1;
  //   setScores(Math.max(scores + 1, 0));
  //   // setNewPlayers([...players, newArr[index]]);
    
  //   // setNewPlayers([...players, {...found, scores: scores}]);
  //   console.log('Scores is '+ scores);
  //   console.log(players);
  // }

  // const onDecrease = (id) => {
  //   console.log('Clicked '+ id);
  //   const found = players.find(player => {
  //     return player.id === id;
  //   });
  //   const newArr = [...players];
  //   const index = newArr.indexOf(found);
  //   newArr[index] = {...found};
  //   newArr[index].scores-1;
  //   console.log(newArr[index]);
  // }
  // const updateScores =(score1, id) => {
  //   console.log('Score is ' + score1);
  //   setJpShoot1(Math.max(jpShoot1 + 1, 0));
  //   console.log(jpShoot1);
  //   const newArr = {...players};
  //   console.log(id);
  //   console.log(newArr[0]);
    // newArr[id].scores++;
    // setNewPlayers[newArr];
    // console.log(players);
    
    // console.log(score1);
    // setNewPlayers(players.map(player => {
    //   if (player.id === id){
    //     return {...player, scores: score1}
    //   } else {
    //     return player
    //   }
    // }))
  // }
  // console.log('Player '+enterName+' scores is '+ scores);
  
  return (
    <Container sx={{ padding: "0", margin: "20px 0" }}>
      <Grid container sx={{ padding: "20px" }} align="center" alignItems="center" spacing={1}>
        {/* <Grid item xs={3}>
          <Typography variant="button" sx={{ padding: "10px 15px", borderRadius: "5px", width: '100%' }} backgroundColor={statusColor} color="white">
            {formatCount()}
          </Typography>
        </Grid> */}
        <Grid item xs={8}>
          <TextField
            
            // error temporary out on hold
            // helperText="Incorrect entry."
            autoComplete="off"
            onChange={(e) => setEnterName(e.target.value)}
            label="Enter Player's Name"
            // InputProps={{
            //   endAdornment: (<IconButton onClick={handleClearClick} sx={{ visibility: value ? 'visible':'hidden'}} size='small'><ClearIcon/></IconButton>)
            // }}
            focused
            size='small'
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleAddNew} variant="outlined" color="info" aria-label="Scores" fullWidth>
            Add
          </Button>
        </Grid>

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{ ".MuiTabs-scrollButtons.Mui-disabled": { opacity: 0.3 } }}
                aria-label="lab API tabs example"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile>
                {players.map((player) => (
                  <Tab label={player.name} value={player.id} key={player.id} />
                ))}
              </TabList>
            </Box>
            {players.map((player) => (
              <TabPanel sx={{ padding: "15px 0", margin: "0" }} value={player.id} key={player.id}>
                <Player {...player} onRemove={handleRemove} />
              </TabPanel>
            ))}
            
          </TabContext>
          <Typography margin='15px 5px'>Every time I rise up, I have confidence that I&apos;m going to make it.</Typography>
          <CardMedia component="img" image={Image.src} alt="Stephen Curry" />
        </Box>
      </Grid>
    </Container>
  );
};


// const [count, setCount] = React.useState(0);
  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };
  // const formatCount = () => (count === 0 ? "Zero" : count);
  // const statusColor = () => {
  //   let x;
  //   switch (true) {
  //     case count === 0:
  //       x = "#FDD017";
  //       break;
  //     case count > 0:
  //       x = "#2e7d32";
  //       break;
  //     case count < 0:
  //       x = "red";
  //       break;
  //   }
  //   return x;
  // };

  
// const AddButton = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };
// const RemoveButton = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const ListComponent = (props) => {
//   return (
//     <div className="Component">
//       <h1>{props.text}</h1>
//       <RemoveButton text="Remove" />
//     </div>
//   );
// };

// function App() {
//   const [components, setComponents] = useState(["Sample Component"]);

//   function addComponent() {
//     setComponents([...components, "testing"]);
//   }
//   const removeComponent = (index) => {
//     console.log("clicked" + index);
//   };

//   return (
//     <div>
//       <AddButton onClick={addComponent} text="Add" />
//       {components.map((component, index) => (
//         <div key={index}>
//           <ListComponent text={component} onDelete={removeComponent(index)} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
