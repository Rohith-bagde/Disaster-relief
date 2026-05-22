import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({
  children,
}) => {

  return (

    <div
      className='
      min-h-screen

      bg-[#f8fafc]

      text-slate-900

      transition-all
      duration-300
    '
    >

      <div className='flex'>

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN */}
        <div className='flex-1 flex flex-col'>

          {/* NAVBAR */}
          <Navbar />

          {/* CONTENT */}
          <main className='p-10'>

            {children}

          </main>

        </div>

      </div>

    </div>
  )
}

export default DashboardLayout