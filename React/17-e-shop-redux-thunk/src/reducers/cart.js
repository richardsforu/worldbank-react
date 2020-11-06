export function cartReducer(state = {}, action) {
    console.log('>>> cart reducer');
    let { type } = action
    switch (type) {
        case 'CHECKOUT': {
            //.....
            return {}
        }
        case 'BUY': {
            let { item, qty=1 } = action
            let { id } = item;
            let cartLine = state[id];
            if (!cartLine) {
                cartLine = { item, qty:1}
            } else {
                cartLine = { item, qty: cartLine.qty + qty }
            }
            if (cartLine.qty === 0) {
                delete state[id]
                return { ...state }
            } else
                return { ...state, [id]: cartLine }


        }
        default: {
            return state;
        }

       
    }

}
