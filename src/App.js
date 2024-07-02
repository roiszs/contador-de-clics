import './App.css';
import Boton from './componentes/boton';
import joel from './imagenes/joel.jpeg';


function App() {


  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }



  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo' 
        src={joel} alt='logo' >
        </img>
      </div>
      <div className='contenedor-principal'>

        <Boton 
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}/>

        <Boton 
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
