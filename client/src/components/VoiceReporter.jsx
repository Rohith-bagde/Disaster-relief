import {
  useEffect,
  useState,
} from 'react'

const VoiceReporter = ({
  setTitle,
  setDescription,
}) => {

  const [listening, setListening] =
    useState(false)

  let recognition

  useEffect(() => {

    if (
      'webkitSpeechRecognition'
      in window
    ) {

      recognition =
        new window.webkitSpeechRecognition()

      recognition.continuous = false

      recognition.interimResults = false

      recognition.lang = 'en-US'

      recognition.onstart = () => {
        setListening(true)
      }

      recognition.onend = () => {
        setListening(false)
      }

      recognition.onresult = (event) => {

        const transcript =
          event.results[0][0]
            .transcript

        setDescription(transcript)

        setTitle(
          transcript.split(' ')
            .slice(0, 4)
            .join(' ')
        )
      }
    }

  }, [])

  const startListening = () => {

    if (recognition) {
      recognition.start()
    }
  }

  return (
    <button
      type='button'

      onClick={startListening}

      className={`w-full py-4 rounded-xl font-bold transition-all
        
        ${
          listening
            ? 'bg-green-500'
            : 'bg-purple-500 hover:bg-purple-600'
        }
      `}
    >
      {
        listening
          ? 'Listening... 🎤'
          : 'Start Voice Reporting 🎙️'
      }
    </button>
  )
}

export default VoiceReporter