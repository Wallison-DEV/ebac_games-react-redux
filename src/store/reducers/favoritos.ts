import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  itens: Produto[]
}

const initialState: favoritoState = {
  itens: []
}

export const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const objeto = action.payload

      if (state.itens.find((p) => p.id === objeto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(objeto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
