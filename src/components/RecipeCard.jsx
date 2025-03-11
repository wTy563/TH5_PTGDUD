import React from 'react';
import { Card, Button } from 'react-bootstrap';

function RecipeCard({ title, image, time }) {
  return (
    <Card className="shadow-sm">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{time} minutes</Card.Text>
        <Button variant="primary">View Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default RecipeCard;
