import { useEffect } from 'react'

import socket from '../socket/socket'

const LiveLocationTracker = () => {

  useEffect(() => {

    if (!navigator.geolocation) {
      console.log('Geolocation not supported')
      return
    }

    const watchId = navigator.geolocation.watchPosition(

      (position) => {

        const data = {
          id: 1,
          name: 'Rahul',

          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        socket.emit(
          'volunteerLocation',
          data
        )
      },

      (error) => {
        console.log(error)
      },

      {
        enableHighAccuracy: true,
      }
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }

  }, [])

  return null
}

export default LiveLocationTracker