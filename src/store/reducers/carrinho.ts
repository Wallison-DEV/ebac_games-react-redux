import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const objeto = action.payload

      if (state.itens.find((Produto) => Produto.id === objeto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(objeto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions

export default carrinhoSlice.reducer
