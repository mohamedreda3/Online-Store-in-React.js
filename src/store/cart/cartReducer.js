import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    cart: [
        { itemId: 15, itemQuantity: 10, itemPrice: 300 },
        { itemId: 1, itemQuantity: 10, itemPrice: 5490 },
        { itemId: 2, itemQuantity: 10, itemPrice: 8990 }
    ],
    totalPrice: 0,
    loader: { isLoading: false, text: '' }
}

function setTotalPrice(item) {
    return item.reduce((sum, item1) => sum += (item1.itemQuantity * item1.itemPrice), 0)
}

initialState.totalPrice = setTotalPrice(initialState.cart);

function setLoaderTrue(item, text) {
    item.text = text
    item.isLoading = true;
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartIndex = state.cart.findIndex(item => item.itemId === action.payload.itemId);
            if (cartIndex >= 0) {
                state.cart[cartIndex].itemQuantity += action.payload.itemQuantity;
                setLoaderTrue(state.loader, 'Item Updated');
                state.totalPrice = setTotalPrice(state.cart)
            } else {
                state.cart.push(action.payload);
                setLoaderTrue(state.loader, 'Item Added');
                state.totalPrice = setTotalPrice(state.cart)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.itemId != action.payload.itemId);
            setLoaderTrue(state.loader, 'Item Removed');
            state.totalPrice = setTotalPrice(state.cart)
        },
        updateCart: (state, action) => {
            const cartIndex = state.cart.findIndex(item => item.itemId === action.payload.itemId);
            if (cartIndex >= 0) {
                state.cart[cartIndex].itemQuantity = action.payload.quant;
                setLoaderTrue(state.loader, 'Item Updated');
                state.totalPrice = setTotalPrice(state.cart)
            } else {
                alert('Not Found');
            }
        },
        disableLoader: (state) => {
            state.loader.text = '';
            state.loader.isLoading = false;
        }
    }
})

export const { addToCart, removeFromCart, updateCart, disableLoader } = cartSlice.actions
export default cartSlice.reducer