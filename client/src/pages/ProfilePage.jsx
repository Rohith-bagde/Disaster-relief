import {
  useContext,
} from 'react'

import {
  AuthContext,
} from '../context/AuthContext'

import DashboardLayout from '../layouts/DashboardLayout'

const ProfilePage = () => {

  const { user } =
    useContext(AuthContext)

  return (

    <DashboardLayout>

      <div className='max-w-5xl mx-auto'>

        {/* Profile Card */}
        <div
          className='
          bg-white/80
          dark:bg-white/5

          backdrop-blur-2xl

          border border-white/10

          rounded-[32px]

          p-10

          shadow-2xl
        '
        >

          {/* Top */}
          <div className='flex flex-col lg:flex-row lg:items-center gap-8'>

            {/* Avatar */}
            <div
              className='
              w-32 h-32

              rounded-[32px]

              bg-gradient-to-r
              from-red-500
              to-orange-400

              flex items-center justify-center

              text-6xl
              font-black
              text-white

              shadow-[0_0_40px_rgba(239,68,68,0.3)]
            '
            >
              A
            </div>

            {/* Info */}
            <div className='flex-1'>

              <h1 className='text-6xl font-black tracking-tight'>
                {user?.name}
              </h1>

              <p className='text-slate-400 text-xl mt-3'>
                {user?.email}
              </p>

              <div className='flex items-center gap-3 mt-5'>

                <div className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></div>

                <span className='text-green-500 font-semibold text-lg'>
                  Online
                </span>

              </div>

            </div>

            {/* Role */}
            <div
              className='
              bg-gradient-to-r
              from-red-500
              to-orange-400

              px-8 py-4

              rounded-3xl

              text-white
              font-bold
              text-xl
            '
            >
              {user?.role}
            </div>

          </div>

          {/* Stats */}
          <div className='grid md:grid-cols-3 gap-6 mt-14'>

            {/* Card */}
            <div
              className='
              bg-white/10

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h2 className='text-slate-400 text-lg'>
                Emergencies Handled
              </h2>

              <p className='text-6xl font-black mt-5 text-red-400'>
                128
              </p>

            </div>

            {/* Card */}
            <div
              className='
              bg-white/10

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h2 className='text-slate-400 text-lg'>
                Volunteers Managed
              </h2>

              <p className='text-6xl font-black mt-5 text-green-400'>
                76
              </p>

            </div>

            {/* Card */}
            <div
              className='
              bg-white/10

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h2 className='text-slate-400 text-lg'>
                Reports Generated
              </h2>

              <p className='text-6xl font-black mt-5 text-blue-400'>
                349
              </p>

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default ProfilePage