import {
  useState,
} from 'react'

import {
  ChevronDown,
  User,
  Settings,
  Shield,
  LogOut,
  X,
} from 'lucide-react'

const ProfileDropdown = () => {

  const [
    open,

    setOpen,
  ] = useState(false)

  const [
    activeModal,

    setActiveModal,

  ] = useState(null)

const logout = () => {

  localStorage.removeItem('token')

  localStorage.removeItem('role')

  localStorage.removeItem(
    'currentUser'
  )

  window.location.replace('/')
}
  return (

    <>
      <div className='relative'>

        {/* PROFILE BUTTON */}
        <button

          onClick={() =>
            setOpen(!open)
          }

          className='
          h-[80px]

          px-5

          rounded-[28px]

          bg-white

          border
          border-slate-200

          shadow-lg

          flex items-center gap-4

          transition-all
        '
        >

          {/* AVATAR */}
          <div
            className='
            w-[60px]
            h-[60px]

            rounded-[22px]

            bg-gradient-to-r
            from-red-500
            to-orange-400

            flex items-center justify-center

            text-white
            text-3xl
            font-black
          '
          >
            A
          </div>

          {/* INFO */}
          <div className='text-left'>

            <h2 className='text-2xl font-bold text-slate-900'>
              Admin
            </h2>

            <p className='text-slate-500 text-lg'>
              Admin
            </p>

          </div>

          {/* ICON */}
          <ChevronDown
            size={28}
            className='text-slate-700'
          />

        </button>

        {/* DROPDOWN */}
        {
          open && (

            <div
              className='
              absolute

              top-[100px]
              right-0

              w-[380px]

              bg-white

              border
              border-slate-200

              rounded-[36px]

              shadow-2xl

              overflow-hidden

              z-50
            '
            >

              {/* TOP */}
              <div
                className='
                p-8

                border-b border-slate-200

                flex items-center gap-5
              '
              >

                {/* AVATAR */}
                <div
                  className='
                  w-[80px]
                  h-[80px]

                  rounded-[28px]

                  bg-gradient-to-r
                  from-red-500
                  to-orange-400

                  flex items-center justify-center

                  text-white
                  text-4xl
                  font-black
                '
                >
                  A
                </div>

                {/* INFO */}
                <div>

                  <h2 className='text-3xl font-black text-slate-900'>
                    Admin
                  </h2>

                  <p className='text-slate-500 text-lg mt-2'>
                    admin@resqlink.com
                  </p>

                  <div
                    className='
                    mt-4

                    inline-flex

                    px-4 py-2

                    rounded-2xl

                    bg-green-100

                    text-green-600

                    font-bold
                  '
                  >
                    Online
                  </div>

                </div>

              </div>

              {/* MENU */}
              <div className='p-5 space-y-3'>

                {/* PROFILE */}
                <button

                  onClick={() => {

                    setActiveModal('profile')

                    setOpen(false)
                  }}

                  className='
                  w-full

                  h-[70px]

                  px-6

                  rounded-2xl

                  flex items-center gap-5

                  text-slate-800
                  text-xl
                  font-semibold

                  hover:bg-slate-100

                  transition-all
                '
                >

                  <User size={24} />

                  Profile

                </button>

                {/* SETTINGS */}
                <button

                  onClick={() => {

                    setActiveModal('settings')

                    setOpen(false)
                  }}

                  className='
                  w-full

                  h-[70px]

                  px-6

                  rounded-2xl

                  flex items-center gap-5

                  text-slate-800
                  text-xl
                  font-semibold

                  hover:bg-slate-100

                  transition-all
                '
                >

                  <Settings size={24} />

                  Settings

                </button>

                {/* ADMIN */}
                <button

                  onClick={() => {

                    setActiveModal('admin')

                    setOpen(false)
                  }}

                  className='
                  w-full

                  h-[70px]

                  px-6

                  rounded-2xl

                  flex items-center gap-5

                  text-slate-800
                  text-xl
                  font-semibold

                  hover:bg-slate-100

                  transition-all
                '
                >

                  <Shield size={24} />

                  Admin Panel

                </button>

              </div>

              {/* LOGOUT */}
              <div
                className='
                p-5

                border-t border-slate-200
              '
              >

                <button

                  onClick={logout}

                  className='
                  w-full

                  h-[70px]

                  px-6

                  rounded-2xl

                  flex items-center gap-5

                  text-red-500
                  text-xl
                  font-bold

                  hover:bg-red-50

                  transition-all
                '
                >

                  <LogOut size={24} />

                  Logout

                </button>

              </div>

            </div>
          )
        }

      </div>

      {/* PROFILE MODAL */}
      {
        activeModal === 'profile' && (

          <div
            className='
            fixed inset-0

            bg-black/40

            flex items-center justify-center

            z-[999]
          '
          >

            <div
              className='
              w-[500px]

              bg-white

              rounded-[36px]

              p-10

              shadow-2xl
            '
            >

              <div className='flex items-center justify-between mb-8'>

                <h2 className='text-4xl font-black'>
                  Profile
                </h2>

                <button
                  onClick={() =>
                    setActiveModal(null)
                  }
                >

                  <X size={30} />

                </button>

              </div>

              <div className='space-y-6'>

                <div>

                  <p className='text-slate-500 mb-2'>
                    Name
                  </p>

                  <input
                    value='Admin'
                    readOnly

                    className='
                    w-full
                    h-[60px]

                    px-5

                    rounded-2xl

                    bg-[#f8fafc]

                    border border-slate-200
                  '
                  />

                </div>

                <div>

                  <p className='text-slate-500 mb-2'>
                    Email
                  </p>

                  <input
                    value='admin@resqlink.com'
                    readOnly

                    className='
                    w-full
                    h-[60px]

                    px-5

                    rounded-2xl

                    bg-[#f8fafc]

                    border border-slate-200
                  '
                  />

                </div>

              </div>

            </div>

          </div>
        )
      }

      {/* SETTINGS MODAL */}
      {
        activeModal === 'settings' && (

          <div
            className='
            fixed inset-0

            bg-black/40

            flex items-center justify-center

            z-[999]
          '
          >

            <div
              className='
              w-[500px]

              bg-white

              rounded-[36px]

              p-10

              shadow-2xl
            '
            >

              <div className='flex items-center justify-between mb-8'>

                <h2 className='text-4xl font-black'>
                  Settings
                </h2>

                <button
                  onClick={() =>
                    setActiveModal(null)
                  }
                >

                  <X size={30} />

                </button>

              </div>

              <div className='space-y-5'>

                <button
                  className='
                  w-full

                  h-[60px]

                  rounded-2xl

                  bg-[#f8fafc]

                  border border-slate-200

                  font-bold
                '
                >
                  Notification Settings
                </button>

                <button
                  className='
                  w-full

                  h-[60px]

                  rounded-2xl

                  bg-[#f8fafc]

                  border border-slate-200

                  font-bold
                '
                >
                  Account Preferences
                </button>

              </div>

            </div>

          </div>
        )
      }

      {/* ADMIN MODAL */}
      {
        activeModal === 'admin' && (

          <div
            className='
            fixed inset-0

            bg-black/40

            flex items-center justify-center

            z-[999]
          '
          >

            <div
              className='
              w-[600px]

              bg-white

              rounded-[36px]

              p-10

              shadow-2xl
            '
            >

              <div className='flex items-center justify-between mb-8'>

                <h2 className='text-4xl font-black'>
                  Admin Panel
                </h2>

                <button
                  onClick={() =>
                    setActiveModal(null)
                  }
                >

                  <X size={30} />

                </button>

              </div>

              <div className='grid grid-cols-2 gap-6'>

                <div
                  className='
                  bg-[#f8fafc]

                  border border-slate-200

                  rounded-3xl

                  p-8
                '
                >

                  <p className='text-slate-500'>
                    Active Cases
                  </p>

                  <h2 className='text-5xl font-black mt-4'>
                    24
                  </h2>

                </div>

                <div
                  className='
                  bg-[#f8fafc]

                  border border-slate-200

                  rounded-3xl

                  p-8
                '
                >

                  <p className='text-slate-500'>
                    Volunteers
                  </p>

                  <h2 className='text-5xl font-black mt-4'>
                    76
                  </h2>

                </div>

              </div>

            </div>

          </div>
        )
      }

    </>
  )
}

export default ProfileDropdown