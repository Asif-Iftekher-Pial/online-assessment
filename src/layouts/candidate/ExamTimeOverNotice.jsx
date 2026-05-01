import React from 'react'
import Modal from '../../components/Modal'
import { useAuth } from '../../context/AuthContext'
import clockTimeOut from '../../assets/timeout.svg'
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
function ExamTimeOverNotice({ showNotice }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const onClose = () => {
    const examStartTime = localStorage.getItem('examStartTime');
    if (examStartTime) {
      localStorage.removeItem('examStartTime');
    }
    navigate('/candidate/dashboard');
  }
  return (
    <Modal show={showNotice} hideFooter={true} onClose={onClose} size='3xl' title='' handleSave={() => { }}>
      <div className='flex flex-col justify-center items-center'>
        <img src={clockTimeOut} alt="Timeout" className='h-16 w-16 text-red-500 mb-4' />
        <h2 className='text-xl font-bold mb-4'>Timeout!</h2>
        <p className='text-gray-600'>Dear {user?.name || user?.email || 'Candidate'}, Your exam time has been finished. Thank you for participating.</p>
        <div className='mt-6'>
          <Button title={'Back to Dashboard'} outlined={true} className=' bg-[#6633FF] text-white px-6 py-2 rounded-lg' onClick={onClose} />
        </div>
      </div>
    </Modal>

  )
}

export default ExamTimeOverNotice