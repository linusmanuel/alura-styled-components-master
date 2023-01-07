import React from "react"; 
import { Box } from '../UI'
import { extratoLista } from '../../info'

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({id, type, value, date, from}) => {
        return (
          <>
            <div>{type}</div>
          </>
        )
      })}
    </Box>
  )
}

export default Extrato
