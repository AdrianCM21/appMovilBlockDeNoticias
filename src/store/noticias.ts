import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../screens/home/HomePage';


interface InvitadoState {
  noticias: Post[] | null
}

const initialState: InvitadoState = {
  noticias: null
};

const noticiasSlice = createSlice({
  name: 'noticias',
  initialState,
  reducers: {
    cargarNoticias(state, action) {
      state.noticias = action.payload
    },
  },
});

export const {
  cargarNoticias
} = noticiasSlice.actions;

export default noticiasSlice.reducer;