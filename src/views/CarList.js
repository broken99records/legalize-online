import React, { Fragment, useEffect, useState } from "react";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { Card } from '@mui/material';
import part from "./../assets/images/part-hero.png"


function CarList() {
  // Create a state variable to store the fetched data
  const [cars, setCars] = useState([]);

useEffect(() => {
  // Define a function that fetches data from the URL
  const fetchData = async () => {
    // Use fetch or axios to make an HTTP request
    const response = await fetch("https://broken99records.github.io/database/db.json");
    
    // Parse the response as JSON
    const data = await response.json();
    
    // Update the state variable with the fetched data
    setCars(data.cars);

    //console.log(response, data, cars)
  };

  // Call the function inside useEffect and pass an empty array as the second argument
  fetchData();
}, []);

  // Render the fetched data or a loading message
  
  
  return (
    <Grid
    container
    spacing={8}
    rowSpacing={1}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    xs
  >
      {cars.length > 0 ? (     
        <Fragment> 
        {cars.map((car) => (
          <Card
            sx={{ maxWidth: 345 }}              
            component={Card}
            
            className={"Card"}
            key={car.id}
            
          >
            <CardMedia
              component="img"
              alt={car.brand}
              height="140"
              image={part}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {car.brand} {car.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
         </Fragment>
      ) : (
        <p>Loading...</p>
      )}
     </Grid>
  );
      
      
}

export default CarList;