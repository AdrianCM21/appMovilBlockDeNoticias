import { createSlice } from '@reduxjs/toolkit';


interface InvitadoState {
  noticias: {
    nombre: string
  }[]
}

const initialState: InvitadoState = {
  noticias: []
};

const noticiasSlice = createSlice({
  name: 'noticias',
  initialState,
  reducers: {

  },
});

export const {

} = noticiasSlice.actions;

export default noticiasSlice.reducer;