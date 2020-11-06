export function buy(item,qty) {
    return { type: 'BUY', item: item,qty }
}

export function checkout() {
    // ...
    return {type: 'CHECKOUT'}
}