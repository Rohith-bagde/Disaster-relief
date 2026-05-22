import { useEffect } from 'react'

import { useMap } from 'react-leaflet'

import L from 'leaflet'

import 'leaflet-routing-machine'

const RouteMachine = () => {

  const map = useMap()

  useEffect(() => {

    const routingControl =
      L.Routing.control({

        waypoints: [

          // Volunteer
          L.latLng(
            17.385,
            78.4867
          ),

          // Emergency
          L.latLng(
            17.395,
            78.4967
          ),
        ],

        lineOptions: {
          styles: [
            {
              color: 'red',
              weight: 5,
            },
          ],
        },

        addWaypoints: false,

        draggableWaypoints: false,

        fitSelectedRoutes: true,

        show: false,
      }).addTo(map)

    return () =>
      map.removeControl(
        routingControl
      )

  }, [map])

  return null
}

export default RouteMachine