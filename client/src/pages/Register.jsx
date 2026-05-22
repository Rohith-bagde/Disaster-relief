import { useState } from 'react'

const Register = () => {

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [role, setRole] =
    useState('victim')

  const handleRegister = (e) => {

    e.preventDefault()

    const users =
      JSON.parse(
        localStorage.getItem('users')
      ) || []

    // CHECK EXISTING
    const exists =
      users.find(
        (u) => u.email === email
      )

    if (exists) {

      alert('User already exists')

      return
    }

    const newUser = {

      id: Date.now(),

      name,
      email,
      password,
      role,
    }

    users.push(newUser)

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    )

    alert('Registration successful')

    window.location.href = '/'
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
          text-6xl
          font-black

          bg-gradient-to-r
          from-red-400
          to-orange-400

          bg-clip-text
          text-transparent
        '
        >
          Register
        </h1>

        <p
          className='
          mt-4

          text-slate-400
          text-xl
        '
        >
          Create your RESQ account
        </p>

        {/* FORM */}
        <form
          onSubmit={handleRegister}
          className='mt-10 space-y-6'
        >

          {/* NAME */}
          <input

            type='text'

            placeholder='Full Name'

            value={name}

            onChange={(e) =>
              setName(e.target.value)
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

          {/* EMAIL */}
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

          {/* PASSWORD */}
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

          {/* ROLE */}
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

          {/* BUTTON */}
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
            Register
          </button>

        </form>

      </div>

    </div>
  )
}

export default Register