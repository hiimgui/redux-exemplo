// type Actions = {
//   type: string,
//   payload?: any,
// };
// type Projeto = {
//   id: string,
//   name: string,
//   codador: string,
// };
// const initialState = {
//   projetos: [],
// };
// export const projetosReducer = (state = initialState, action) => {
//   const { id, name, codador } = action.payload;
//   switch (action.type) {
//     case "ADICIONAR_PROJETO":
//       return {
//         ...state,
//         projetos: [
//           ...state.projetos,
//           {
//             id,
//             name,
//             codador,
//           },
//         ],
//       };
//     case "REMOVER_PROJETO":
//       return {
//         ...state,
//         projetos: state.projetos.filter((projeto) => projeto.id === id),
//       };
//     default:
//       return state;
//   }
// };
