import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage'
import SingleCategory from './pages/SingleCategory';
import SingleRecipe from './pages/SingleRecipe';
import RecipesBasket from './pages/RecipesBasket';
import Error from './pages/Error';
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/:categoryName" element={<SingleCategory />}/>
      <Route path="/recipe/:id"  element={<SingleRecipe />}/>
      <Route path="/recipeBasket" element={<RecipesBasket />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error />} />
    </Routes>
  
   </BrowserRouter>
  );
}

export default App;
