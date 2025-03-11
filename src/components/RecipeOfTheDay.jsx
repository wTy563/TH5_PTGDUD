import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
// import recipeOfTheDay from '../assets/image/Lab_01/';

function RecipeOfTheDay() {
  return (
    <Container className="text-center my-5">
      <Card className="shadow-lg p-3">
        <Card.Img variant="top" src={recipeOfTheDay} alt="Salad Caprese" />
        <Card.Body>
          <h5>Recipe of the Day</h5>
          <h3>Salad Caprese</h3>
          <p>Classic Italian salad with fresh ingredients, perfect as an appetizer.</p>
          <Button variant="primary">View Recipe</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RecipeOfTheDay;
