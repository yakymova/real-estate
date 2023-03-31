import './App.css';
import Header from './Components/Header/Header';
import StartPage from './Components/StartBlock/StartPage';
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Service from './Components/Service/Service';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Main/Main';

function App(props) {
  return (
    <div className="App">
      <Header header={props.data.header} />
      <Routes>
        <Route path='/' element={<StartPage start={props.data.homeBlock} partners={props.data.partners} />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Main main={props.data.main} />
    </div>
  );
}

export default App;
