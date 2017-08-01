let cart = {
  total: 0,
  dishes: {
    // 'sdsdsdd':
    // {
    //   name:
    //   poster:
    //  }
    //
  }
}

export default function cartReducer(state=cart, action) {
  switch (action.type) {
    case 'ADD_CART':
      let nextDishes = {
        ...state.dishes, [action.dishId]: action.dish
      }
      return {...state, total: state.total + 1, dishes: nextDishes }
    default:
      return state
  }
}