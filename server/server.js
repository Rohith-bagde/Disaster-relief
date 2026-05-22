const express =
  require('express')

const cors =
  require('cors')

const http =
  require('http')

const {
  Server,
} = require('socket.io')

// =========================
// APP
// =========================
const app = express()

const server =
  http.createServer(app)

// =========================
// SOCKET IO
// =========================
const io =
  new Server(server, {

    cors: {

      origin:
        'http://localhost:5173',

      methods: [
        'GET',
        'POST',
      ],
    },
  })

// =========================
// MIDDLEWARE
// =========================
app.use(cors())

app.use(express.json())

// =========================
// TEST ROUTE
// =========================
app.get(
  '/',

  (req, res) => {

    res.send(
      'RESQ LINK SERVER RUNNING'
    )
  }
)

// =========================
// SOCKET CONNECTION
// =========================
io.on(
  'connection',

  (socket) => {

    console.log(
      '✅ User Connected:',
      socket.id
    )

    // =========================
    // NEW EMERGENCY
    // =========================
    socket.on(

      'new_emergency',

      (data) => {

        io.emit(
          'receive_emergency',

          data
        )
      }
    )

    // =========================
    // NEW NOTIFICATION
    // =========================
    socket.on(

      'new_notification',

      (data) => {

        io.emit(
          'receive_notification',

          data
        )
      }
    )

    // =========================
    // CHAT MESSAGE
    // =========================
    socket.on(

      'send_message',

      (data) => {

        io.emit(
          'receive_message',

          data
        )
      }
    )

    // =========================
    // DISCONNECT
    // =========================
    socket.on(

      'disconnect',

      () => {

        console.log(
          '❌ User Disconnected:',
          socket.id
        )
      }
    )
  }
)

// =========================
// START SERVER
// =========================
const PORT = 5000

server.listen(

  PORT,

  () => {

    console.log(
      `🚀 Server running on port ${PORT}`
    )
  }
)