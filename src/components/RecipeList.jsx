import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeCard from './RecipeCard';
// import recipe1 from '../assets/images/recipe1.jpg';
// import recipe2 from '../assets/images/recipe2.jpg';
// import recipe3 from '../assets/images/recipe3.jpg';

// const recipes = [
//   { title: "Italian-style tomato salad", image: recipe1, time: 15 },
//   { title: "Spaghetti with vegetables", image: recipe2, time: 20 },
//   { title: "Lotus delight salad", image: recipe3, time: 25 },
// ];

function RecipeList() {
  return (
    <Container className="my-4">
      <h2 className="text-center">This Summer Recipes</h2>
      <Row>
        {recipes.map((recipe, index) => (
          <Col key={index} md={4} className="mb-4">
            <RecipeCard {...recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RecipeList;
