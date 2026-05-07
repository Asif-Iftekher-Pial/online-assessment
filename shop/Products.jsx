import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddProductForm from '../src/learn_redux/components/AddProductForm';
import ShowCart from '../src/learn_redux/components/ShowCart';
import { addToCart } from '../src/redux/features/cart/addToCartSlice';

function Products() {
    // Access the products from the Redux store
    const productsFromStore = useSelector((state) => state.products.products);
    // Access the addToCart dispatch function from Redux
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Products</h1>
            <div className='grid grid-cols-3 gap-4'>
                <div className='bg-gray-200 p-4 rounded-lg col-span-2'>
                    <div className='lg:max-h-150 overflow-y-auto'>
                        <h2 className='text-xl font-bold mb-4'>Product List</h2>
                        <div className='grid grid-cols-3 gap-2'>

                            {
                                productsFromStore.length > 0 ? productsFromStore.map((data) => {
                                    return (
                                        <div key={data.id} className='bg-white p-4 rounded-lg'>
                                            <h3 className='font-bold'>{data.name}</h3>
                                            <div className='rounded-lg overflow-hidden my-2'>
                                                <img src={data.image} alt={data.name} srcSet="" className='w-full h-auto' />
                                            </div>
                                            <p>{data.description}</p>
                                            <div className='text-right'>
                                                <span className='font-bold text-lg'>${data.price}</span>
                                            </div>
                                            <div className='text-right mt-2'>
                                                <button onClick={() => dispatch(addToCart({...data, quantity: 1}))} className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg cursor-pointer'>Add to Cart</button>
                                            </div>
                                        </div>
                                    )
                                }) : <p className='text-red-300 text-2xl'>No products available</p>
                            }
                        </div>
                    </div>
                </div>
                <div className='bg-gray-200 p-4 rounded-lg'>
                    <div>
                        <ShowCart />
                    </div>
                    <div>
                        <AddProductForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products