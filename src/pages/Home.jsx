import React from 'react';
import Header from '../components/Header';
import RecipeOfTheDay from '../components/RecipeOfTheDay';
import RecipeList from '../components/RecipeList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <RecipeOfTheDay />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default Home;
