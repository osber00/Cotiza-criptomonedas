import { useState, useEffect } from "react";
import useSelectMoneda from "../hooks/useSelectMoneda";
import { Divisas } from "../data/divisas";
import Alerta from "./Alerta";

const Formulario = ({setMonedas}) => {
  const [Criptomonedas, setCriptomonedas] = useState([]);
  const [Error, setError] = useState(false)
  const [SelectMoneda, moneda] = useSelectMoneda("Seleccione Divisa", Divisas);
  const [SelectCripto, cripto] = useSelectMoneda(
    "Seleccione Criptomoneda",
    Criptomonedas
  );

  const fetchCriptomonedas = async () => {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
    const request = await fetch(url);
    const response = await request.json();
    const arrayCriptomonedas = response.Data.map((cripto) => {
      const objeto = {
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      };
      return objeto;
    });

    setCriptomonedas(arrayCriptomonedas);
  };

  useEffect(() => {
    fetchCriptomonedas();
  }, []);

  const handleCotizar = (e) => {
    e.preventDefault();
    if ([moneda, cripto].includes("")) {
        setError(true)
        return
    }
    setError(false)
    setMonedas({
        moneda,
        cripto
    })
  };

  return (
    <form onSubmit={handleCotizar}>
        {Error && <Alerta>Los campos son requiridos</Alerta>}
      <div className='cd-select mt-4'>
        <SelectMoneda />
      </div>
      <div className='cd-select mt-4'>
        <SelectCripto />
      </div>
      <button
        value='send'
        className='btn btn-default-yellow-fill mt-4 mb-3 me-3'>
        <i className='fas fa-check-circle'></i> Cotizar
      </button>
    </form>
  );
};

export default Formulario;
