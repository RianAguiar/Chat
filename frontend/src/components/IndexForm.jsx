import { useState } from "react";

function IndexForm() {
    function IrParaSala(e){
        e.preventDefault()
        console.log('user',{Name},'sended to',{RoomName})

    }

    const [Name, setName] = useState()
    const [RoomName, setRoomName] = useState()

    return(
        <div>
            <form onSubmit={IrParaSala}>
                <input type="text" id='name' name='name' placeholder="Your Name" className="indexinput"
                onChange={(e) => setName(e.target.value)}/>
                
                <input type="text" id='roomname' name='roomname' placeholder="Room Name" className="indexinput" 
                onChange={(e) => setRoomName(e.target.value)}/>

                <button className="indexenterbutton" type="submit">Get In</button>
                
            </form>
        </div>
    )
}

export default IndexForm