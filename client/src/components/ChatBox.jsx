import {
  useState,
} from 'react'

import {
  MessageCircle,
  Send,
  X,
} from 'lucide-react'

const ChatBox = () => {

  const [
    open,

    setOpen,
  ] = useState(false)

  const [
    message,

    setMessage,
  ] = useState('')

  const [
    messages,

    setMessages,
  ] = useState([

    {
      id: 1,
      sender: 'Control Room',
      text: 'Emergency teams ready.',
    },

    {
      id: 2,
      sender: 'Volunteer Unit',
      text: 'Heading to flood area.',
    },
  ])

  const sendMessage = () => {

    if (!message.trim())
      return

    setMessages([

      ...messages,

      {
        id: Date.now(),

        sender: 'You',

        text: message,
      },
    ])

    setMessage('')
  }

  return (

    <div className='relative'>

      {/* BUTTON */}
      <button

        onClick={() =>
          setOpen(!open)
        }

        className='
        w-[64px]
        h-[64px]

        rounded-[22px]

        bg-[#f1f5f9]

        border
        border-slate-200

        flex items-center justify-center

        hover:bg-slate-100

        transition-all
      '
      >

        <MessageCircle
          size={30}
          className='text-slate-800'
        />

      </button>

      {/* CHAT WINDOW */}
      {
        open && (

          <div
            className='
            absolute

            top-[80px]
            right-0

            w-[400px]
            h-[520px]

            bg-white

            border
            border-slate-200

            rounded-[30px]

            shadow-2xl

            overflow-hidden

            flex flex-col

            z-50
          '
          >

            {/* HEADER */}
            <div
              className='
              px-6 py-5

              border-b border-slate-200

              flex items-center justify-between
            '
            >

              <div>

                <h2 className='text-2xl font-bold text-slate-900'>
                  Rescue Chat
                </h2>

                <p className='text-slate-500 mt-1'>
                  Real-time coordination
                </p>

              </div>

              <button

                onClick={() =>
                  setOpen(false)
                }

                className='text-slate-500'
              >

                <X size={24} />

              </button>

            </div>

            {/* MESSAGES */}
            <div
              className='
              flex-1

              p-5

              overflow-y-auto

              space-y-4
            '
            >

              {
                messages.map(
                  (msg) => (

                    <div

                      key={msg.id}

                      className={`
                      
                      max-w-[80%]

                      px-5 py-4

                      rounded-2xl

                      ${
                        msg.sender === 'You'

                          ? `
                          ml-auto

                          bg-gradient-to-r
                          from-red-500
                          to-orange-400

                          text-white
                        `

                          : `
                          bg-[#f1f5f9]

                          text-slate-900
                        `
                      }
                    `}
                    >

                      <p className='font-bold mb-1'>
                        {msg.sender}
                      </p>

                      <p>
                        {msg.text}
                      </p>

                    </div>
                  )
                )
              }

            </div>

            {/* INPUT */}
            <div
              className='
              p-5

              border-t border-slate-200

              flex items-center gap-3
            '
            >

              <input

                type='text'

                value={message}

                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }

                placeholder='Type message...'

                className='
                flex-1

                h-[58px]

                px-5

                rounded-2xl

                bg-[#f8fafc]

                border border-slate-200

                outline-none

                text-slate-900
              '
              />

              <button

                onClick={sendMessage}

                className='
                w-[58px]
                h-[58px]

                rounded-2xl

                bg-gradient-to-r
                from-red-500
                to-orange-400

                flex items-center justify-center

                text-white
              '
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default ChatBox