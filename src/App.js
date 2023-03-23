import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Featured from './Components/Featured/Featured';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Scroll from './Components/Scroll/Scroll';
import Title from './Components/Title/Title';
import { useState } from 'react';

function App() {
  const [Link, setLink] = useState(false);
  const updateLink = () => {
    setLink(true);
  }
  const updateLeave = () => {
    setLink(false);
  }

  return (
    <div className="App">
      <Cursor
        Link={Link}
      />
      <Header 
        Link={Link}
        updateLink={updateLink}
        updateLeave={updateLeave}
      />
      <Nav/>
      <Title/>
      <Scroll/>
      <About/>
      <Featured/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
