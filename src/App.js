import react,{Fragment, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import {getMatches} from './Api/Api'

function App() {

  const [matches,setMatches]= useState([]);
  useEffect(() => {
    getMatches()
      .then((data)=> {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch((error) => alert("could not load data"));
  }, []);
  return ( 

    <div className="App">
       <Navbar/>
       <Typography variant="h3">
       live SCORE App
       </Typography>
       <Grid container >
         <Grid sm="3"></Grid>
         <Grid  sm="6"  >
         {matches.map((match)=>(
           <Fragment key={match.unique_id}>
         
            {match.type=="Twenty20"? ( <Mycard key={match.unique_id} match={match} />): ('')
}
           </Fragment>
       ))}
       
         </Grid>
       </Grid>
    </div>
  );
}

export default App;
