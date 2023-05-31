// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogged: true,
        users: action.payload,
        name: action.payload.name
      }
    case 'GET_FAIL':
      return {
        ...state,
        error: action.payload
      }
    case 'ADD_USER':
      return {
        ...state,
        isLogged: true,
        users: [...state.users, action.payload]
      }
    case 'REGISTER_FAIL':
      return {
        ...state,
        error: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogged: false,
        users: [],
        name: null
      }
    default:
      return state;
  }
}