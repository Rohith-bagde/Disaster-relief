import {
  Moon,
  Sun,
} from 'lucide-react'

import {
  useContext,
} from 'react'

import {
  ThemeContext,
} from '../context/ThemeContext'

const ThemeToggle = () => {

  const {
    darkMode,
    toggleTheme,
  } = useContext(
    ThemeContext
  )

  return (

    <button

      onClick={toggleTheme}

      className='
      w-14 h-14

      rounded-2xl

      bg-white/10

      border border-white/10

      flex items-center justify-center

      hover:bg-white/20

      transition-all
    '
    >

      {
        darkMode

          ? (
            <Sun
              size={24}
              className='text-yellow-300'
            />
          )

          : (
            <Moon
              size={24}
              className='text-white'
            />
          )
      }

    </button>
  )
}

export default ThemeToggle