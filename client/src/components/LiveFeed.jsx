import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import EmergencyCard from './EmergencyCard'

const LiveFeed = () => {
  const { emergencies } = useContext(AppContext)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10'>
      {emergencies.map((item) => (
        <EmergencyCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default LiveFeed