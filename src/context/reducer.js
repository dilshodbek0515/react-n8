export const inititalState = JSON.parse(localStorage.getItem("storage")) ||
{
    wishlist: []
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
        default:
            return state
    }
}