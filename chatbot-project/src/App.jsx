import { useState } from 'react'
import ChatMessages from './components/ChatMessages';
import { ChatInput} from './components/ChatInput';
import './App.css'
import { Chatbot } from 'supersimpledev';

function App(){
  
  const [chatMessages, setChatMessages] = useState(
    [{
    message: 'Hello Chatbot',
    sender: 'user',
    id: 'id1'
    },{
    message: 'How can I help you?',
    sender: 'robot',
    id: 'id2'
    },{
    message: 'Can you get todays date?',
    sender: 'user',
    id: 'id3'
    },{
    message: 'Today is Sept 20',
    sender: 'robot',
    id: 'id4'
    }]
  );

  return (
    <div className='app-container'> 
      <ChatMessages
        chatMessages = {chatMessages}
      />
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  )
}

export default App
