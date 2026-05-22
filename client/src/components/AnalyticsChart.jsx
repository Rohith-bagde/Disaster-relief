import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from 'recharts'

const data = [

  {
    day: 'Mon',
    emergencies: 12,
  },

  {
    day: 'Tue',
    emergencies: 18,
  },

  {
    day: 'Wed',
    emergencies: 9,
  },

  {
    day: 'Thu',
    emergencies: 24,
  },

  {
    day: 'Fri',
    emergencies: 14,
  },

  {
    day: 'Sat',
    emergencies: 28,
  },

  {
    day: 'Sun',
    emergencies: 17,
  },
]

const AnalyticsChart = () => {

  return (
    <div className='mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl'>

      {/* Heading */}
      <div className='flex items-center justify-between mb-10'>

        <div>

          <h2 className='text-4xl font-bold'>
            Emergency Analytics
          </h2>

          <p className='text-slate-300 mt-2'>
            Weekly emergency activity overview
          </p>

        </div>

        <div className='bg-red-500/20 text-red-400 px-4 py-2 rounded-2xl font-semibold'>
          Live Data
        </div>

      </div>

      {/* Chart */}
      <div className='h-[350px]'>

        <ResponsiveContainer
          width='100%'
          height='100%'
        >

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id='colorEmergency'
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >

                <stop
                  offset='5%'
                  stopColor='#ef4444'
                  stopOpacity={0.8}
                />

                <stop
                  offset='95%'
                  stopColor='#ef4444'
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <XAxis
              dataKey='day'
              stroke='#94a3b8'
            />

            <Tooltip />

            <Area
              type='monotone'
              dataKey='emergencies'
              stroke='#ef4444'
              fillOpacity={1}
              fill='url(#colorEmergency)'
              strokeWidth={4}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default AnalyticsChart