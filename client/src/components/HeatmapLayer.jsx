import { useEffect } from 'react'

import { useMap } from 'react-leaflet'

import L from 'leaflet'

import 'leaflet.heat'

const HeatmapLayer = () => {

  const map = useMap()

  useEffect(() => {

    const heatData = [

      [17.385, 78.4867, 1],

      [17.395, 78.4967, 0.8],

      [17.375, 78.4767, 0.6],

      [17.365, 78.4667, 1],

    ]

    const heatLayer = L.heatLayer(
      heatData,
      {
        radius: 25,
        blur: 15,
        maxZoom: 17,
      }
    ).addTo(map)

    return () => {
      map.removeLayer(heatLayer)
    }

  }, [map])

  return null
}

export default HeatmapLayer