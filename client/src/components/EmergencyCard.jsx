const EmergencyCard = ({

  emergency,

  onDispatch,

  onViewDetails,

}) => {

  return (

    <div
      className='
      bg-white

      border
      border-slate-200

      rounded-[36px]

      p-10

      shadow-xl

      transition-all
      duration-300
    '
    >

      {/* TOP */}
      <div className='flex items-start justify-between gap-6'>

        <div>

          <h2
            className='
            text-5xl
            font-black

            text-slate-900
          '
          >
            {emergency.title}
          </h2>

          <p
            className='
            mt-6

            text-2xl

            leading-relaxed

            text-slate-500
          '
          >
            {emergency.description}
          </p>

        </div>

        {/* PRIORITY */}
        <div
          className={`
          
          px-6 py-3

          rounded-2xl

          text-xl
          font-bold

          ${
            emergency.priority === 'HIGH'

              ? `
              bg-red-100
              text-red-500
            `

              : `
              bg-orange-100
              text-orange-500
            `
          }
        `}
        >
          {emergency.priority}
        </div>

      </div>

      {/* BOTTOM */}
      <div className='flex items-center gap-5 mt-10'>

        {/* DISPATCH */}
        <button

          onClick={() =>
            onDispatch(
              emergency.id
            )
          }

          className='
          px-8 py-4

          rounded-2xl

          bg-gradient-to-r
          from-red-500
          to-orange-400

          text-white
          text-xl
          font-bold

          shadow-lg
        '
        >
          Dispatch Team
        </button>

        {/* DETAILS */}
        <button

          onClick={() =>
            onViewDetails(
              emergency
            )
          }

          className='
          px-8 py-4

          rounded-2xl

          bg-[#f1f5f9]

          text-slate-900

          text-xl
          font-bold

          hover:bg-slate-200

          transition-all
        '
        >
          View Details
        </button>

      </div>

    </div>
  )
}

export default EmergencyCard