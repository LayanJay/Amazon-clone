//actions
export const SET_CART = 'set-cart'
export const SET_CHECKOUT = 'set-checkout'
export const SET_USER = 'set-user'

export const initialState = {
    total_items: 0,
    line_items: [],
    user: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_CART:
            return { ...state, ...action.payload }
        case SET_CHECKOUT:
            return { ...state, ...action.payload }
        case SET_USER:
            return { ...state, ...action.payload }
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}