import DashboardLayout from '../layouts/DashboardLayout'

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet'

const incidents = [

  {
    id: 1,
    title: 'Flood Rescue',
    location: 'Hyderabad',
    coords: [17.3850, 78.4867],
    priority: 'HIGH',
  },

  {
    id: 2,
    title: 'Medical Emergency',
    location: 'Mumbai',
    coords: [19.0760, 72.8777],
    priority: 'MEDIUM',
  },

  {
    id: 3,
    title: 'Earthquake Alert',
    location: 'Delhi',
    coords: [28.7041, 77.1025],
    priority: 'CRITICAL',
  },
]

const MapPage = () => {

  return (

    <DashboardLayout>

      {/* HEADER */}
      <div className='mb-10'>

        <h1
          className='
          text-6xl
          font-black

          text-white
        '
        >
          Live Map
        </h1>

        <p
          className='
          text-slate-400
          text-xl

          mt-3
        '
        >
          Real-time rescue tracking
        </p>

      </div>

      {/* MAP */}
      <div
        className='
        overflow-hidden

        rounded-[40px]

        shadow-2xl
      '
      >

        <MapContainer

          center={[22.9734, 78.6569]}

          zoom={5}

          style={{
            height: '750px',
            width: '100%',
          }}
        >

          {/* MAP TILE */}
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {/* MARKERS */}
          {
            incidents.map((incident) => (

              <Marker

                key={incident.id}

                position={incident.coords}
              >

                <Popup>

                  <div className='p-2'>

                    <h2 className='font-bold text-lg'>
                      {incident.title}
                    </h2>

                    <p>
                      📍 {incident.location}
                    </p>

                    <p>
                      Priority:
                      {' '}
                      {incident.priority}
                    </p>

                  </div>

                </Popup>

              </Marker>
            ))
          }

        </MapContainer>

      </div>

    </DashboardLayout>
  )
}

export default MapPage