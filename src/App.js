import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/header';
import Profile from './components/Profile';
import Portfolio from './components/portfolio';
import BarLoader from "react-spinners/BarLoader";
import Footer from './components/footer';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <div className="App">

      {
        loading ? (
        
        <div className='loader'>
          <BarLoader color={"#ffffff"} loading={loading} width={100} height={4} />
        </div>
         ) :
        <>
        <Header />
        <Profile />
        <Portfolio />
        <Footer />
        

        </>
      }

      
    </div>
  );
}

export default App;
