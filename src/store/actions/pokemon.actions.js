export const CAPTURAR = "CAPTURAR";
export const GUARDAR = "GUARDAR";

export function capturar(nome) {
  return {
    type: CAPTURAR,
    payload: { nome },
  };
}

export function guardar(nome) {
  return {
    type: GUARDAR,
    payload: { nome },
  };
}
