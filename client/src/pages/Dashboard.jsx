import DashboardLayout from '../layouts/DashboardLayout'
import MapPage from './MapPage'
import EmergencyPage from './EmergencyPage'
import VolunteersPage from './VolunteersPage'

const Dashboard = () => {

  return (

    <DashboardLayout>

      {/* STATS */}
      <div className='grid grid-cols-3 gap-8 mb-12'>

        <div
          className='
          bg-white
          rounded-[30px]
          p-8
          shadow-lg
        '
        >

          <p className='text-slate-500 text-xl'>
            Active Emergencies
          </p>

          <h1
            className='
            text-6xl
            font-black

            text-red-400

            mt-5
          '
          >
            2
          </h1>

        </div>

        <div
          className='
          bg-white

          rounded-[30px]

          p-8

          shadow-lg
        '
        >

          <p className='text-slate-500 text-xl'>
            Volunteers Online
          </p>

          <h1
            className='
            text-6xl
            font-black

            text-green-400

            mt-5
          '
          >
            76
          </h1>

        </div>

        <div
          className='
          bg-white

          rounded-[30px]

          p-8

          shadow-lg
        '
        >

          <p className='text-slate-500 text-xl'>
            Resolved Cases
          </p>

          <h1
            className='
            text-6xl
            font-black

            text-blue-400

            mt-5
          '
          >
            349
          </h1>

        </div>

      </div>

      {/* TITLE */}
      <div className='mb-10'>

        <h1
          className='
          text-6xl
          font-black

          text-white
        '
        >
          Live Emergency Feed
        </h1>

        <p
          className='
          text-slate-400
          text-xl

          mt-3
        '
        >
          Incoming emergency incidents
        </p>

      </div>

      {/* CARDS */}
      <div className='grid grid-cols-2 gap-8'>

        {/* CARD */}
        <div
          className='
          bg-white

          rounded-[36px]

          p-10

          shadow-xl
        '
        >

          <div className='flex justify-between items-start'>

            <h2
              className='
              text-5xl
              font-black

              text-slate-900
            '
            >
              Flood Rescue
            </h2>

            <div
              className='
              px-5 py-2

              rounded-2xl

              bg-red-100

              text-red-500

              font-bold
            '
            >
              HIGH
            </div>

          </div>

          <p
            className='
            mt-6

            text-slate-500

            text-2xl

            leading-relaxed
          '
          >
            People trapped near bridge due to rising flood waters.
          </p>

          <div className='flex gap-4 mt-10'>

            <button
              className='
              px-8 py-4

              rounded-2xl

              bg-gradient-to-r
              from-red-500
              to-orange-400

              text-white

              text-xl
              font-bold
            '
            >
              Dispatch Team
            </button>

            <button
              className='
              px-8 py-4

              rounded-2xl

              bg-slate-100

              text-slate-900

              text-xl
              font-bold
            '
            >
              View Details
            </button>

          </div>

        </div>

        {/* CARD */}
        <div
          className='
          bg-white

          rounded-[36px]

          p-10

          shadow-xl
        '
        >

          <div className='flex justify-between items-start'>

            <h2
              className='
              text-5xl
              font-black

              text-slate-900
            '
            >
              Medical Emergency
            </h2>

            <div
              className='
              px-5 py-2

              rounded-2xl

              bg-orange-100

              text-orange-500

              font-bold
            '
            >
              MEDIUM
            </div>

          </div>

          <p
            className='
            mt-6

            text-slate-500

            text-2xl

            leading-relaxed
          '
          >
            Injured civilians require immediate medical support.
          </p>

          <div className='flex gap-4 mt-10'>

            <button
              className='
              px-8 py-4

              rounded-2xl

              bg-gradient-to-r
              from-red-500
              to-orange-400

              text-white

              text-xl
              font-bold
            '
            >
              Dispatch Team
            </button>

            <button
              className='
              px-8 py-4

              rounded-2xl

              bg-slate-100

              text-slate-900

              text-xl
              font-bold
            '
            >
              View Details
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
    
  )
}

export default Dashboard