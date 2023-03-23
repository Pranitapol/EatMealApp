import React,{useEffect,useState} from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
import axios from 'axios';
import { FaSpinner } from "react-icons/fa";

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
  const [meals, setMeals] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [isError,setHttpError]=useState();
  const getdata=async ()=>{
  setIsLoading(true)
    const result= await axios.get('http://localhost:5000/meals/getmeal')
    console.log(result);
    setMeals(result.data)
    setIsLoading(false)
    if(result.status!=='ok'){
      throw new Error('something went wrong...')
    }
   }
  useEffect(() => {
    getdata().catch((err)=>{
      setIsLoading(false);
      console.log(err);
      if(err.code==='ERR_BAD_RESPONSE' || err.code==='ERR_NETWORK')
      setHttpError('something went wrong...');
    })
   }, []);
  
  
  const mealsList=meals.map((meal)=>(
  <MealItem 
  id={meal.mealId}
  key={meal.mealId}
  name={meal.name}
  description={meal.description}
  price={meal.price}/>
  ))
  if(!isError){
    return (
      <section className={classes.meals}>
       {isLoading?<span className={classes.loading}><FaSpinner/></span>:''}
      <Card>
    {mealsList}
      </Card>
      </section>
    );
  }else{
    return(
      <p style={{textAlign:'center',color:'red',fontSize:'1.5rem'}}>{isError}</p>
    )
  }
 
}

export default AvailableMeals;
