import { useState } from 'react'

import {
  useNavigate,
} from 'react-router-dom'

const Login = () => {

  const navigate =
    useNavigate()

  const [role, setRole] =
    useState('admin')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  const handleLogin = (e) => {

    e.preventDefault()

    // GET USERS
    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || []

    // FIND USER
    const user =
      users.find(

        (u) =>

          u.email === email
          &&
          u.password === password
          &&
          u.role === role
      )

    if (user) {

      // SAVE AUTH
      localStorage.setItem(
        'token',
        'logged_in'
      )

      localStorage.setItem(
        'role',
        user.role
      )

      localStorage.setItem(
        'currentUser',
        JSON.stringify(user)
      )

      // REDIRECT
      window.location.replace(
        '/dashboard'
      )

    } else {

      setError(
        'Invalid credentials'
      )
    }
  }

  return (

    <div
      className='
      min-h-screen

      bg-[#020617]

      flex
      items-center
      justify-center

      px-6
    '
    >

      {/* CARD */}
      <div
        className='
        w-full
        max-w-[580px]

        bg-[#0f172a]

        rounded-[42px]

        border border-slate-800

        p-14

        shadow-2xl
      '
      >

        {/* TITLE */}
        <h1
          className='
          text-7xl
          font-black

          bg-gradient-to-r
          from-red-400
          to-orange-400

          bg-clip-text
          text-transparent
        '
        >
          RESQ LINK
        </h1>

        <p
          className='
          mt-4

          text-slate-400

          text-xl
        '
        >
          Login to continue
        </p>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className='mt-10'
        >

          {/* ROLE */}
          <div className='mb-6'>

            <label
              className='
              block

              text-slate-300
              text-lg

              mb-3
            '
            >
              Login As
            </label>

            <select

              value={role}

              onChange={(e) =>
                setRole(e.target.value)
              }

              className='
              w-full
              h-[70px]

              px-6

              rounded-2xl

              bg-[#1e293b]

              border border-slate-700

              text-white
              text-xl
            '
            >

              <option value='admin'>
                Admin
              </option>

              <option value='volunteer'>
                Volunteer
              </option>

              <option value='victim'>
                Victim
              </option>

            </select>

          </div>

          {/* EMAIL */}
          <div className='mb-6'>

            <input

              type='email'

              placeholder='Email'

              value={email}

              onChange={(e) =>
                setEmail(e.target.value)
              }

              className='
              w-full
              h-[70px]

              px-6

              rounded-2xl

              bg-[#1e293b]

              border border-slate-700

              text-white
              text-xl
            '
            />

          </div>

          {/* PASSWORD */}
          <div className='mb-8'>

            <input

              type='password'

              placeholder='Password'

              value={password}

              onChange={(e) =>
                setPassword(e.target.value)
              }

              className='
              w-full
              h-[70px]

              px-6

              rounded-2xl

              bg-[#1e293b]

              border border-slate-700

              text-white
              text-xl
            '
            />

          </div>

          {/* ERROR */}
          {
            error && (

              <div
                className='
                mb-6

                bg-red-500/10

                border border-red-500

                text-red-400

                px-5 py-4

                rounded-2xl
              '
              >
                {error}
              </div>
            )
          }

          {/* LOGIN BUTTON */}
          <button

            type='submit'

            className='
            w-full
            h-[76px]

            rounded-[24px]

            bg-gradient-to-r
            from-red-500
            to-orange-400

            text-white
            text-2xl
            font-bold
          '
          >
            Login
          </button>

        </form>

        {/* REGISTER */}
        <button

          onClick={() =>
            navigate('/register')
          }

          className='
          mt-6

          w-full
          h-[70px]

          rounded-[22px]

          bg-[#1e293b]

          border border-slate-700

          text-white
          text-xl
          font-semibold
        '
        >
          Create New Account
        </button>

      </div>

    </div>
  )
}

export default Login