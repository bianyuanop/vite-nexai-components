import React, { useEffect, useRef, useState } from 'react'
import { BsChatSquareText } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { BeatLoader } from 'react-spinners'
let userInput: String = ''

export interface assistantProp {
  color: string
  companyId: number
  companyName: string
  // actor: ActorSubclass<_SERVICE> | undefined;
}

type ChatType = {
  sender: 'you' | 'nexai'
  text: string
}

export const Assistant = (prop: assistantProp) => {
  const [isChatVisible, setIsChatVisible] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [chat, setChat] = useState<ChatType[]>([])
  const [loading, setLoading] = useState(false)
  const scrollableRef = useRef<HTMLDivElement | null>(null)

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible)
  }

  // Handle changes to the input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value)
  }

  // Handle sending a message
  const handleSendMessageFromUser = async () => {
    inputMessage.trim()
    // assign userInput here
    userInput = inputMessage
    console.log(userInput)

    const newMessage: ChatType = {
      sender: 'you',
      text: inputMessage,
    }
    setChat([...chat, newMessage])
    setLoading(true)
    setInputMessage('')
  }

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight
    }
  }, [chat])

  const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      userInput = inputMessage
      console.log(userInput)
      handleSendMessageFromUser()
    }
  }

  const chats = chat.map((c, index) => <div>{c.text}</div>)

  return (
    <div className="flex flex-row">
      <div className="flex flex-col">{chats}</div>
      <div className="flex flex-row bg-gray-500">
        <input
          className="bg-slate-200"
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessageFromUser}>Send</button>
      </div>
    </div>
  )
}

export { userInput }
