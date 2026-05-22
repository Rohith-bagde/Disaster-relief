import NotificationBell from './NotificationBell'
import ChatBox from './ChatBox'
import ProfileDropdown from './ProfileDropdown'

const Navbar = () => {

  return (

    <header
      className='
      h-[110px]

      px-12

      flex items-center justify-between

      bg-white

      border-b
      border-slate-200

      transition-all
      duration-300
    '
    >

      {/* LEFT */}
      <div>

        <h1
          className='
          text-6xl
          font-black

          bg-gradient-to-r
          from-red-500
          to-orange-400

          bg-clip-text
          text-transparent
        '
        >
          RESCUE HUB
        </h1>

      </div>

      {/* RIGHT */}
      <div className='flex items-center gap-5'>

        <NotificationBell />

        <ChatBox />

        {/* PROFILE */}
        <ProfileDropdown />

      </div>

    </header>
  )
}

export default Navbar