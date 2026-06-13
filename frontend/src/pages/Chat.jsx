import { Link } from "react-router-dom";
import { useState } from 'react'
import '../styles/Chat.css'

function Chat() {
    const [message, setMessage] = useState('')
    const [chat, setChat] = useState([])

    const handleSend = () => {
        if (message.trim() !== '') {
            setChat([...chat, message])
            setMessage('')
        }
    }

    return (
        <>
            <Link to="/">Index</Link>
            <div className="chat-container">
                <div className="chat-box">
                    <div className="messages">
                        {chat.map((msg, index) => (<div key={index} className="message">{msg}</div>))}
                    </div>
                    
                    <div className="input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Digite uma mensagem..."
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat