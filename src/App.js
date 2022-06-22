// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (

   <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Tecno-Stock" />
   </div>

  );
}

export default App;
