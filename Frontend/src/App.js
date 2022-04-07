import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import PageNotFound from './Components/PageNotFound';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<TodoApp />}/>
        <Route path='Dashboard' element ={<Dashboard />} />
        <Route path = '*' element ={<PageNotFound />} />
      </Routes>
    
    
    </BrowserRouter>
   
    </>
    )
}

export default App;
