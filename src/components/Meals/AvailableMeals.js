import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Vada-Pav',
      description: 'spicy and crispy vada with chutney',
      price: 5,
    },
    {
      id: 'm2',
      name: 'Pav-Bhaji',
      description: 'A  specialty!',
      price: 7,
    },
    {
      id: 'm3',
      name: 'Poha',
      description: 'Authentic and tasty ',
      price: 2,
    },
    {
      id: 'm4',
      name: 'Misal-pav',
      description: 'A spicy curry and pav  topped with onions and sev',
      price: 6,
    },
  ];
function AvailableMeals() {
  const mealsList=DUMMY_MEALS.map((meal)=>(
  <MealItem 
  id={meal.id}
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price}/>
  ))
  return (
    <section className={classes.meals}>
    <Card>
      {mealsList}
    </Card>
    </section>
  );
}

export default AvailableMeals;
