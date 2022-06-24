import { CAPTURAR, GUARDAR } from "../actions/pokemon.actions";

export const pokemonReducer = (state = "", action) => {
  switch (action.type) {
    case CAPTURAR:
      return console.log(` capturou ${action.payload.nome}`);
    case GUARDAR:
      return console.log(` guardou ${action.payload.nome}`);
    default:
      return state;
  }
};
