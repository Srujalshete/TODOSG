import React from 'react';
import Home from './components/home';
import Navbar from './components/Navbar';
import Loader from './components/loader';
import Footer from './components/footer';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
     
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? (<Loader />) : (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;