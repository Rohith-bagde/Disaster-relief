import {
  createContext,
  useState,
} from 'react'

export const AppContext =
  createContext()

const initialEmergencies = [

  {
    id: 1,

    title: 'Flood Rescue',

    description:
      'People trapped near bridge due to rising flood waters.',

    location: 'Hyderabad',

    priority: 'HIGH',

    coords: [17.3850, 78.4867],
  },

  {
    id: 2,

    title: 'Medical Emergency',

    description:
      'Highway accident victims require urgent treatment.',

    location: 'Mumbai',

    priority: 'MEDIUM',

    coords: [19.0760, 72.8777],
  },
]

export const AppProvider = ({
  children,
}) => {

  const [
    emergencies,

    setEmergencies,
  ] = useState(
    initialEmergencies
  )

  // ADD EMERGENCY
  const addEmergency = (
    emergency
  ) => {

    setEmergencies(
      (prev) => [

        {
          id: Date.now(),

          ...emergency,
        },

        ...prev,
      ]
    )
  }

  return (

    <AppContext.Provider
      value={{

        emergencies,

        addEmergency,
      }}
    >

      {children}

    </AppContext.Provider>
  )
}