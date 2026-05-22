import {
  NavLink,
} from 'react-router-dom'

const Sidebar = () => {

  const links = [

    {
      name: 'Dashboard',
      path: '/dashboard',
    },

    {
      name: 'Emergencies',
      path: '/emergencies',
    },

    {
      name: 'Volunteers',
      path: '/volunteers',
    },

    {
      name: 'Live Map',
      path: '/map',
    },
  ]

  return (

    <aside
      className='
      w-[320px]

      min-h-screen

      bg-[#0f172a]

      border-r
      border-slate-800

      flex
      flex-col
    '
    >

      {/* LOGO */}
      <div
        className='
        h-[110px]

        px-8

        flex items-center

        border-b
        border-slate-800
      '
      >

        <h1
          className='
          text-6xl
          font-black

          bg-gradient-to-r
          from-red-400
          to-orange-400

          bg-clip-text
          text-transparent
        '
        >
          RESQ
        </h1>

      </div>

      {/* NAVIGATION */}
      <div className='p-6 space-y-6'>

        {
          links.map((link) => (

            <NavLink

              key={link.name}

              to={link.path}

              className={({ isActive }) => `

                flex items-center

                h-[90px]

                px-8

                rounded-[30px]

                text-2xl
                font-semibold

                transition-all
                duration-300

                ${
                  isActive

                    ? `
                    bg-gradient-to-r
                    from-red-500
                    to-orange-400

                    text-white

                    shadow-lg
                  `

                    : `
                    bg-[#1e293b]

                    text-white

                    hover:bg-[#334155]
                  `
                }
              `}
            >

              {link.name}

            </NavLink>
          ))
        }

      </div>

    </aside>
  )
}

export default Sidebar