import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../redux/features/cart/addToCartSlice';

function ShowCart() {
    const cartItems = useSelector((state) => state.addToCart.cartItems);
    const dispatch = useDispatch();
    const changeQty = (id, NewQty, currentQty) => {
        if (NewQty > currentQty) {
            dispatch(incrementQuantity(id));
        } else {
            dispatch(decrementQuantity(id));
        }

    }
    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>Cart {cartItems.length}</h2>
            <div className='bg-white p-4 rounded-lg lg:max-h-80 overflow-y-auto'>
                {
                    cartItems.length > 0 ? cartItems.map((item, index) => {
                        return (
                            <div key={item.id} className='border-b border-gray-300  py-2 flex justify-between items-center last:border-b-0'>
                                <div className='flex items-center gap-4'>
                                    <div>
                                        <span>{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className='font-bold'>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <span className='font-bold text-lg'>${item.price}</span>
                                    </div>
                                </div>
                                <div>
                                    <input type="number" className='border px-2 border-gray-300 w-16' onChange={(e) => {
                                        // Handle quantity change
                                        changeQty(item.id, e.target.value, item.quantity);
                                    }} value={item.quantity} />
                                </div>
                            </div>
                        )
                    }) : <p className='flex justify-center text-red-300 text-2xl'>Cart is empty</p>
                }
            </div>
        </div>
    )
}

export default ShowCart