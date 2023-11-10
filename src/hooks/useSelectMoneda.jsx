import {useState} from 'react'
const useSelectMoneda = (label, opciones) => {
    const [estado, setEstado] = useState('')
  const SelectMoneda = ()=>(
    <select className='select-filter' value={estado} onChange={(e)=> setEstado(e.target.value)}>
      <option value=''>{label}</option>
      {opciones.map((opcion)=>(
        <option value={opcion.id} key={opcion.id}>{opcion.nombre}</option>
      ))}
    </select>
  )

  return [SelectMoneda, estado]
};

export default useSelectMoneda;
