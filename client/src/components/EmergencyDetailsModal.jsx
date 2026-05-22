const EmergencyDetailsModal = ({

  emergency,

  onClose,

}) => {

  if (!emergency)
    return null

  return (

    <div
      className='
      fixed inset-0

      bg-black/70

      backdrop-blur-md

      flex items-center justify-center

      z-[9999]

      p-6
    '
    >

      {/* MODAL */}
      <div
        className='
        w-full
        max-w-[850px]

        max-h-[90vh]

        overflow-y-auto

        bg-[#0f172a]

        border border-white/10

        rounded-[40px]

        shadow-2xl
      '
      >

        {/* HEADER */}
        <div
          className='
          p-8

          border-b border-white/10

          flex items-center justify-between
        '
        >

          {/* LEFT */}
          <div className='flex items-center gap-5'>

            {/* BACK BUTTON */}
            <button

              onClick={onClose}

              className='
              w-14 h-14

              rounded-2xl

              bg-white/10

              border border-white/10

              flex items-center justify-center

              hover:bg-white/20

              transition-all

              text-2xl
              font-bold
            '
            >

              ←

            </button>

            {/* TITLE */}
            <div>

              <h2 className='text-4xl font-black text-white'>
                {emergency.title}
              </h2>

              <p className='text-slate-400 mt-2 text-lg'>
                Emergency Incident Details
              </p>

            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className='p-8 space-y-8'>

          {/* DESCRIPTION */}
          <div>

            <h3 className='text-3xl font-bold text-white mb-4'>
              Description
            </h3>

            <p className='text-slate-300 text-lg leading-relaxed'>
              {emergency.description}
            </p>

          </div>

          {/* GRID */}
          <div className='grid lg:grid-cols-2 gap-8'>

            {/* PRIORITY */}
            <div
              className='
              bg-white/5

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h4 className='text-slate-400 text-lg mb-5'>
                Priority
              </h4>

              <div
                className={`
                
                inline-flex

                px-5 py-3

                rounded-2xl

                font-bold
                text-lg

                ${
                  emergency.priority ===
                  'CRITICAL'

                    ? `
                    bg-red-500/20
                    text-red-400
                  `

                    : emergency.priority ===
                    'HIGH'

                    ? `
                    bg-orange-500/20
                    text-orange-400
                  `

                    : `
                    bg-yellow-500/20
                    text-yellow-300
                  `
                }
              `}
              >
                {emergency.priority}
              </div>

            </div>

            {/* STATUS */}
            <div
              className='
              bg-white/5

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h4 className='text-slate-400 text-lg mb-5'>
                Status
              </h4>

              <p className='text-cyan-400 font-bold text-2xl'>
                {emergency.status}
              </p>

            </div>

            {/* LOCATION */}
            <div
              className='
              bg-white/5

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h4 className='text-slate-400 text-lg mb-5'>
                Location
              </h4>

              <p className='text-white text-2xl'>
                📍 {emergency.location}
              </p>

            </div>

            {/* VOLUNTEER */}
            <div
              className='
              bg-white/5

              border border-white/10

              rounded-3xl

              p-8
            '
            >

              <h4 className='text-slate-400 text-lg mb-5'>
                Assigned Volunteer
              </h4>

              <p className='text-green-400 text-2xl font-bold'>
                {
                  emergency.assignedVolunteer
                    || 'Not Assigned'
                }
              </p>

            </div>

          </div>

          {/* TIMELINE */}
          <div
            className='
            bg-white/5

            border border-white/10

            rounded-3xl

            p-8
          '
          >

            <h3 className='text-3xl font-bold text-white mb-8'>
              Rescue Timeline
            </h3>

            <div className='space-y-8'>

              {/* STEP */}
              <div className='flex gap-5'>

                <div
                  className='
                  w-5 h-5

                  rounded-full

                  bg-red-500

                  mt-2
                '
                ></div>

                <div>

                  <h4 className='font-bold text-2xl text-white'>
                    Emergency Reported
                  </h4>

                  <p className='text-slate-400 text-lg mt-2'>
                    Incident added to system.
                  </p>

                </div>

              </div>

              {/* STEP */}
              <div className='flex gap-5'>

                <div
                  className='
                  w-5 h-5

                  rounded-full

                  bg-orange-400

                  mt-2
                '
                ></div>

                <div>

                  <h4 className='font-bold text-2xl text-white'>
                    Team Dispatched
                  </h4>

                  <p className='text-slate-400 text-lg mt-2'>
                    Volunteer rescue unit assigned.
                  </p>

                </div>

              </div>

              {/* STEP */}
              <div className='flex gap-5'>

                <div
                  className='
                  w-5 h-5

                  rounded-full

                  bg-cyan-400

                  mt-2
                '
                ></div>

                <div>

                  <h4 className='font-bold text-2xl text-white'>
                    Rescue In Progress
                  </h4>

                  <p className='text-slate-400 text-lg mt-2'>
                    Live emergency operations active.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default EmergencyDetailsModal