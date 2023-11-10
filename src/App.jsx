import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Resultados from "./components/Resultados";

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  const hacerContizacion  = async(monedas)=>{
    setCargando(true)
    setCotizacion({})
    const {moneda, cripto} = monedas
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    const request = await fetch(url)
    const response = await request.json()
    //console.log(response.DISPLAY[cripto][moneda]);
    setCotizacion(response.DISPLAY[cripto][moneda])
    setCargando(false)
  }

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      hacerContizacion(monedas)
    }
  }, [monedas])

  return (
    <>
      <div className='box-container limit-width'>
        <div className='top-header'>
          <div className='total-grad encabezado'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='wrapper'>
                  <div className='heading'>Cotizador Criptomonedas</div>
                  <div className='subheading'>Proyecto de práctica ReactJs</div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='wrapper'>
                  <Formulario setMonedas={setMonedas}/>
                  {cargando && <p className="text-warning">Consultando...</p>}
                  {cotizacion.PRICE && <Resultados cotizacion={cotizacion}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
