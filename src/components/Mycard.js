import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { getMatchDetail } from '../Api/Api';
  
const Mycard=({match})=>{
    const [detail,setDetail]= useState({});
    const [open,setOpen] = useState(false);
    const handleClick = (id) =>{
        getMatchDetail(id)
        .then((data)=> {console.log("Match",data);
    setDetail(data);
})
        .catch((error)=> console.log(error));
    };
return(
    <Card style={{marginTop: 15}}>
        <CardContent>
            
        <Grid container justify="center">
            <Grid item>
                <Typography variant="h5">
                {match["team-1"]}
                </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h1">
                    VS
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5">{match["team-2"]}</Typography>
                </Grid>
            </Grid>
        
        </CardContent>
        <CardActions>
            <Grid container justify="center">
            <Button onClick={
                ()=> {
                    handleClick(match.unique_id); 
                }
            } style={{marginRight:15}} item variant="contained" color = "HUE[SHADE]">
                <Typography variant="h5">
                show detail
                </Typography>
            </Button>
            <Button item variant="contained" color="secondary">
              Start Time  {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
            </Grid> 
        </CardActions>
    </Card>
)
};

export default Mycard;