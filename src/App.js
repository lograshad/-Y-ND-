import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Featured from './Components/Featured/Featured';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Scroll from './Components/Scroll/Scroll';
import Title from './Components/Title/Title';
import { useState, useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

function App() {
  const [Link, setLink] = useState(false);
  const updateLink = () => {
    setLink(true);
  }
  const updateLeave = () => {
    setLink(false);
  }

  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div className="App" id='main-container'>
          <Cursor
            Link={Link}
          />
          <Header
            Link={Link}
            updateLink={updateLink}
            updateLeave={updateLeave}
          />
          <Nav />
          <Title />
          <Scroll />
          <About />
          <Featured />
          <Contact />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
