const Resultados = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL } = cotizacion;
  return (
    <div className='text-white'>
      <p>
        <i className='fa fa-check-circle'></i> Precio: {PRICE}
      </p>
      <p>
        <i className='fa fa-check-circle'></i> Precio mas alto del día {HIGHDAY}
      </p>
      <p>
        <i className='fa fa-check-circle'></i> Precio mas bajo del día {LOWDAY}
      </p>
      <p>
        <i className='fa fa-check-circle'></i> Variación del precio{" "}
        {CHANGEPCT24HOUR}
      </p>
      <img
        src={`https://cryptocompare.com/${IMAGEURL}`}
        className='thumbnails'
        alt='imagen-cripto'
      />
    </div>
  );
};

export default Resultados;
