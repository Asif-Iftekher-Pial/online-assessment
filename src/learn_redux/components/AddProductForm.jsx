import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/features/products/productsSlice';

function AddProductForm() {
    const [prodInfo, setProdInfo] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });
    const dispatch = useDispatch();
    const onSubmit = () => {
        dispatch(addProduct(prodInfo));
        setProdInfo({
            name: "",
            description: "",
            price: "",
            image: "",
        });
    }
    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>Add Product Form</h2>
            <form className='bg-white p-4 rounded-lg mt-4' onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
            }}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>Product Name</label>
                    <input onChange={(e) => setProdInfo({ ...prodInfo, name: e.target.value })} value={prodInfo.name} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Enter product name' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='description'>Description</label>
                    <textarea onChange={(e) => setProdInfo({ ...prodInfo, description: e.target.value })} value={prodInfo.description} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='description' placeholder='Enter product description'></textarea>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>Price</label>
                    <input onChange={(e) => setProdInfo({ ...prodInfo, price: e.target.value })} value={prodInfo.price} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='price' type='number' placeholder='Enter product price' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='image'>Image</label>
                    <input onChange={(e) => setProdInfo({ ...prodInfo, image: e.target.value })} value={prodInfo.image} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='https://example.com/image.jpg' />
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer w-full' type='submit'>
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default AddProductForm