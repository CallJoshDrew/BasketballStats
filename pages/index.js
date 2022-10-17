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
                {players.map(({ id, name }) => (
                  <Tab label={name} value={id} key={id} />
                ))}
              </TabList>
            </Box>
            {players.map(({ id, name }) => (
              <TabPanel sx={{ padding: "15px 0", margin: "0" }} value={id} key={id}>
                <Player id={id} name={name} onRemove={handleRemove}/>
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
