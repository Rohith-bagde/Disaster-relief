import DashboardLayout from '../layouts/DashboardLayout'

const volunteers = [

  {
    id: 1,
    name: 'Rahul Sharma',
    team: 'Flood Rescue Unit',
    status: 'ONLINE',
    location: 'Hyderabad',
  },

  {
    id: 2,
    name: 'Aisha Khan',
    team: 'Medical Rescue',
    status: 'ON_MISSION',
    location: 'Mumbai',
  },

  {
    id: 3,
    name: 'Vikram Rao',
    team: 'Mountain Rescue',
    status: 'OFFLINE',
    location: 'Delhi',
  },

  {
    id: 4,
    name: 'Sneha Patel',
    team: 'Emergency Support',
    status: 'ONLINE',
    location: 'Bangalore',
  },
]

const VolunteersPage = () => {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <div className='mb-10'>

        <h1
          className='
          text-6xl
          font-black

          text-white
        '
        >
          Volunteers
        </h1>

        <p
          className='
          text-slate-400
          text-xl

          mt-3
        '
        >
          Rescue teams currently active
        </p>

      </div>

      {/* TABLE */}
      <div
        className='
        bg-white

        rounded-[40px]

        overflow-hidden

        shadow-2xl
      '
      >

        {/* HEADER */}
        <div
          className='
          grid grid-cols-4

          bg-[#0f172a]

          text-white

          px-10
          py-6

          text-xl
          font-bold
        '
        >

          <div>Volunteer</div>

          <div>Team</div>

          <div>Status</div>

          <div>Location</div>

        </div>

        {/* ROWS */}
        {
          volunteers.map((volunteer) => (

            <div

              key={volunteer.id}

              className='
              grid grid-cols-4

              px-10
              py-8

              border-b border-slate-200

              items-center
            '
            >

              {/* NAME */}
              <div className='flex items-center gap-5'>

                <div
                  className='
                  w-[60px]
                  h-[60px]

                  rounded-full

                  bg-gradient-to-r
                  from-red-500
                  to-orange-400

                  flex items-center justify-center

                  text-white
                  text-2xl
                  font-black
                '
                >
                  {
                    volunteer.name[0]
                  }
                </div>

                <div>

                  <h2
                    className='
                    text-2xl
                    font-bold

                    text-slate-900
                  '
                  >
                    {volunteer.name}
                  </h2>

                  <p className='text-slate-500'>
                    ID #{volunteer.id}
                  </p>

                </div>

              </div>

              {/* TEAM */}
              <div
                className='
                text-slate-700
                text-xl
                font-semibold
              '
              >
                {volunteer.team}
              </div>

              {/* STATUS */}
              <div>

                <div
                  className={`
                    inline-flex

                    px-5 py-2

                    rounded-2xl

                    text-sm
                    font-bold

                    ${
                      volunteer.status === 'ONLINE'
                        ? `
                        bg-green-100
                        text-green-600
                      `
                        : volunteer.status === 'ON_MISSION'
                        ? `
                        bg-orange-100
                        text-orange-600
                      `
                        : `
                        bg-slate-100
                        text-slate-500
                      `
                    }
                  `}
                >
                  {volunteer.status}
                </div>

              </div>

              {/* LOCATION */}
              <div
                className='
                text-slate-700
                text-xl
                font-semibold
              '
              >
                📍 {volunteer.location}
              </div>

            </div>
          ))
        }

      </div>

    </DashboardLayout>
  )
}

export default VolunteersPage