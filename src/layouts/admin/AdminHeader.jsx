import React from 'react'
import { GrSearchAdvanced } from "react-icons/gr";
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function AdminHeader({ searchQuery, onSearchChange }) {
    return (
        <div className='flex justify-between mx-15 mt-10 items-center'>
            <div>
                <span className='font-semibold text-2xl leading-[1.3] tracking-normal'>Online test</span>
            </div>
            <div>
                <div className='relative'>

                    {/* Gradient border wrapper */}
                    <div className="p-px rounded-lg w-155.25" style={{
                        background: 'linear-gradient(90.22deg, #A086F7 0.84%, #ECDBFF 15.72%, #BAA9F2 74.13%, #B199FF 100%)'
                    }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className='w-full h-12 rounded-lg py-2 px-3 bg-white outline-none'
                            placeholder='Search by exam title'
                        />
                    </div>
                    <div className='h-9 w-9 bg-[#673FED1A] rounded-full absolute right-2 top-2'>
                        <GrSearchAdvanced className='absolute right-2 top-2 w-5 h-5 bg-[#673FED1A]' />
                    </div>
                </div>
            </div>
            <div>
                <Link to="/admin/create-online-test">
                    <Button title={"Create online text"} outlined={false} />
                </Link>
            </div>
        </div>
    )
}

export default AdminHeader