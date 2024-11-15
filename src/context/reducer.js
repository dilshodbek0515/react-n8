export const inititalState = {
    wishlist: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "WISHLIST":
            let index = state.wishlist.findIndex(produc => produc.id === action.payload.id)
            if (index < 0) {
                return { ...state, wishlist: [...state.wishlist, action.payload] }
            } else {
                return { ...state, wishlist: state.wishlist.filter(produc => produc.id !== action.payload.id) }
            }
        default:
            return state
    }
}