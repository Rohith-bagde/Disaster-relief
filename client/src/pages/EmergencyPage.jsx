import DashboardLayout from '../layouts/DashboardLayout'

const EmergencyPage = () => {

  return (

    <DashboardLayout>

      <div className='mb-10'>

        <h1
          className='
          text-6xl
          font-black

          text-white
        '
        >
          Emergencies
        </h1>

        <p
          className='
          text-slate-400
          text-xl

          mt-3
        '
        >
          Active disaster incidents
        </p>

      </div>

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

          <div className='flex justify-between'>

            <h2
              className='
              text-4xl
              font-black

              text-slate-900
            '
            >
              Flood Rescue Needed
            </h2>

            <div
              className='
              px-4 py-2

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
            text-xl
          '
          >
            Multiple civilians trapped near river bridge.
          </p>

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

          <div className='flex justify-between'>

            <h2
              className='
              text-4xl
              font-black

              text-slate-900
            '
            >
              Medical Emergency
            </h2>

            <div
              className='
              px-4 py-2

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
            text-xl
          '
          >
            Highway accident victims require urgent treatment.
          </p>

        </div>

      </div>

    </DashboardLayout>
  )
}

export default EmergencyPage