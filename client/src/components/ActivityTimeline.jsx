const activities = [

  {
    id: 1,
    text: 'Flood emergency resolved',
    time: '2 mins ago',
  },

  {
    id: 2,
    text: 'Volunteer Rahul went online',
    time: '10 mins ago',
  },

  {
    id: 3,
    text: 'New fire emergency reported',
    time: '25 mins ago',
  },

  {
    id: 4,
    text: 'Medical team dispatched',
    time: '40 mins ago',
  },
]

const ActivityTimeline = () => {

  return (
    <div className='mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'>

      <h2 className='text-4xl font-bold mb-10'>
        Activity Timeline
      </h2>

      <div className='space-y-8'>

        {activities.map((item) => (

          <div
            key={item.id}
            className='flex gap-5'
          >

            {/* Dot */}
            <div className='w-4 h-4 rounded-full bg-red-500 mt-2 shadow-[0_0_20px_rgba(239,68,68,0.7)]'></div>

            {/* Content */}
            <div>

              <p className='text-lg text-white'>
                {item.text}
              </p>

              <span className='text-slate-400 text-sm'>
                {item.time}
              </span>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityTimeline