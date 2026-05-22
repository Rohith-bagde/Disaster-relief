import {
  useState,
} from 'react'

import {
  Bell,
  X,
} from 'lucide-react'

const NotificationBell = () => {

  const [
    open,

    setOpen,
  ] = useState(false)

  const notifications = [

    {
      id: 1,
      title: 'Flood Rescue Alert',
      time: '2 mins ago',
    },

    {
      id: 2,
      title: 'Medical Emergency',
      time: '10 mins ago',
    },

    {
      id: 3,
      title: 'Volunteer Assigned',
      time: '18 mins ago',
    },
  ]

  return (

    <div className='relative'>

      {/* BUTTON */}
      <button

        onClick={() =>
          setOpen(!open)
        }

        className='
        relative

        w-[64px]
        h-[64px]

        rounded-[22px]

        bg-[#f1f5f9]

        border
        border-slate-200

        flex items-center justify-center

        hover:bg-slate-100

        transition-all
      '
      >

        {/* ICON */}
        <Bell
          size={30}
          className='text-slate-800'
        />

        {/* BADGE */}
        <div
          className='
          absolute

          -top-2
          -right-2

          w-8 h-8

          rounded-full

          bg-red-500

          flex items-center justify-center

          text-sm
          font-bold

          text-white
        '
        >
          {notifications.length}
        </div>

      </button>

      {/* DROPDOWN */}
      {
        open && (

          <div
            className='
            absolute

            top-[80px]
            right-0

            w-[360px]

            bg-white

            border
            border-slate-200

            rounded-[28px]

            shadow-2xl

            overflow-hidden

            z-50
          '
          >

            {/* HEADER */}
            <div
              className='
              flex items-center justify-between

              px-6 py-5

              border-b border-slate-200
            '
            >

              <h2 className='text-2xl font-bold text-slate-900'>
                Notifications
              </h2>

              <button

                onClick={() =>
                  setOpen(false)
                }

                className='text-slate-500'
              >

                <X size={24} />

              </button>

            </div>

            {/* ITEMS */}
            <div className='p-4 space-y-4'>

              {
                notifications.map(
                  (item) => (

                    <div

                      key={item.id}

                      className='
                      p-5

                      rounded-2xl

                      bg-[#f8fafc]

                      hover:bg-slate-100

                      transition-all
                    '
                    >

                      <h3 className='text-lg font-bold text-slate-900'>
                        {item.title}
                      </h3>

                      <p className='text-slate-500 mt-2'>
                        {item.time}
                      </p>

                    </div>
                  )
                )
              }

            </div>

          </div>
        )
      }

    </div>
  )
}

export default NotificationBell