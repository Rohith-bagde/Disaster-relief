import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center justify-center gap-5'>
      <h1 className='text-5xl font-bold text-red-500'>
        RESQ LINK
      </h1>

      <Link
        to='/login'
        className='bg-red-500 px-6 py-3 rounded-xl'
      >
        Go To Login
      </Link>
    </div>
  )
}

export default Landing