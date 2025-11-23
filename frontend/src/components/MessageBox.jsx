import {useState} from 'react'

function MessageBox({message}){
const [showMessage, setShow] = useState(true)
// message.type = error, warning
// message.content = Invalid Password, Successfully signed out
function closeMessageBox(e){
setShow(!showMessage)
}
return(
<>
{showMessage ? <div className = "message-box">
    <div className = "message"><span>{message?.type || "!"}</span><h3>{message?.content || "Something went wrong."}</h3> </div>
    <h4 onClick = {closeMessageBox}>x</h4>
</div>: ''}

</>)
}
export default MessageBox