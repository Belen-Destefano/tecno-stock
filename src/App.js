// import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './itemDetailContainer/ItemDetailContainer';

function App() {
  return (

   <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Tecno-Stock" />
      <ItemDetailContainer/>
   </div>

  );
}

export default App;
