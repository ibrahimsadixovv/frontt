import Navbar from '../Components/Navbar';
import './App.css';
import Main from './Main';
import Products from './Products';
import { Helmet } from 'react-helmet-async';
function App() {
  return (
    <div className="App">
      <Helmet>
<title>Home</title>
<meta name='description' content='Beginner friendly page for learning React Helmet.' />
</Helmet>
     <Navbar/>
     <Main/>
     <Products/>
    </div>
  );
}

export default App;
