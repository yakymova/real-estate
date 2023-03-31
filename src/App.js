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
import Footer from './Components/Footer/Footer';
import ContactsAside from './Components/ContactsAside/ContactsAside';

function App(props) {
  return (
    <div className="App">
      <Header header={props.data.header} />
      <ContactsAside icons={props.data.contactsAside} />
      <Routes>
        <Route path='/' element={<StartPage start={props.data.homeBlock} partners={props.data.partners} />} />
        <Route path='about' element={<About />} />
        <Route path='service' element={<Service />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Main main={props.data.main} />
      <Footer footer={props.data.footer} />
    </div>
  );
}

export default App;
