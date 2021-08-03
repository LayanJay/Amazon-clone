import { db } from "."

export const addToCart = async (cart, user) => {
    await db.collection('carts').doc(`/cart_${user.uid}`).set(cart)
}

export const getUserCart = (user, setter) => {
    db.collection('carts').doc(`/cart_${user.uid}`).onSnapshot((doc) => setter(doc.data()))
}

