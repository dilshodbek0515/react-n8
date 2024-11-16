export const inititalState = JSON.parse(localStorage.getItem("storage")) ||
{
    wishlist: [],
    cart: []
}

export const reducer = (state, action) => {
    let result = state
    switch (action.type) {
        case "WISHLIST":
            let index = state.wishlist.findIndex(produc => produc.id === action.payload.id)
            if (index < 0) {
                result = { ...state, wishlist: [...state.wishlist, action.payload] }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            } else {
                result = { ...state, wishlist: state.wishlist.filter(produc => produc.id !== action.payload.id) }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }

        case "ADD_CART":
            let cartIndex = state.cart.findIndex(produc => produc.id === action.payload.id)
            if (cartIndex < 0) {
                result = { ...state, cart: [...state.cart, { ...action.payload, amount: 1 }] }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            } else {
                result = {
                    ...state, cart: state.cart.map((cart, inx) => (
                        cartIndex === inx ? { ...cart, amount: cart.amount + 1 } : cart
                    ))
                }
                localStorage.setItem("storage", JSON.stringify(result))
                return result
            }

        case "DECREMENT_CART":
            let decIndex = state.cart.findIndex(produc => produc.id === action.payload.id)
            result = {
                ...state, cart: state.cart.map((cart, inx) => (
                    decIndex === inx ? { ...cart, amount: cart.amount - 1 } : cart
                ))
            }
            localStorage.setItem("storage", JSON.stringify(result))
            return result


        case "REMOVE_CART":
            result = { ...state, cart: state.cart.filter(produc => produc.id !== action.payload.id) }
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        case "CLEAR_CART":
            result = { ...state, cart: [] }
            localStorage.setItem("storage", JSON.stringify(result))
            return result
        default:
            return state
    }
}