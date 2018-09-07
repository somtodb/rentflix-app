import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';


const MovieCard = (props) => {
  return (
    
        <Card body>
          <CardTitle>{this.props.name}</CardTitle>
          <Button>Rent Movie</Button>
        </Card>
 
  );
};

export default MovieCard;