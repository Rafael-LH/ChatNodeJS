const reducer = (state, action) => {
  switch (action.type) {
    case 'FORM_REQUEST':
      return {
        ...state,
        user: action.payload
      }
      break;
    default:
      return {
        ...state
      }
  }
}
export default reducer 