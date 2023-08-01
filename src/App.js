import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Grid from './components/Grid';
import Footer from './components/Footer';
import Filter from './components/Filter';
import { useState } from 'react';

function App() {

  const [category, setCategory] = useState('All')
  const [sortCondition, setSortCondition] = useState("Price Asc")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [rating, setRating] = useState(1)

  return (
    <div className="App">
      <Header/>
      <div className='body'>
          <Filter setPriceRange={setPriceRange} setRating={setRating}/>
        <div className='wrapper'> 
          <Body setCategory={setCategory} setSortCondition={setSortCondition}/>
          <Grid category={category} sortCondition={sortCondition} priceRange={priceRange} rating={rating}/>   
        </div>  
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
