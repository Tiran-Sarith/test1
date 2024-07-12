import According from './components/According';
import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/Header';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    
    <div >
      <Header/>
      <BrowserRouter>
    <Routes>
<Route path="/add" element={<AddStudents/>}/>
  
</Routes>
    </BrowserRouter>

        <h1>Hello React</h1>
    <According/>
    </div>
   
  );
}

export default App;
