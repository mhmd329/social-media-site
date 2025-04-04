
import MeessageImage1 from '../assets/img/MessageProfile1.png'
import MeessageImage2 from '../assets/img/MessageProfile2.jpg'
import MeessageImage3 from '../assets/img/MessageProfile4.jpg'
import MeessageImage4 from '../assets/img/MessageProfile5.jpg'
import MeessageImage5 from '../assets/img/MessageProfile6.jpg'

const MessagesData = [
    {
        id: 1,
        name: 'Ahammed Alli',
        img: MeessageImage1,
        mText: 'Hey, how are you doing today?'
    },
    {
        id: 2,
        name: 'Mark William',
        img: MeessageImage2,
        mText: 'Did you check the new project updates?'
    },
    {
        id: 3,
        name: 'Ranvir Sing',
        img: MeessageImage3,
        mText: 'Let’s meet at 5 PM for coffee.'
    },
    {
        id: 4,
        name: 'Happy Rose',
        img: MeessageImage4,
        mText: 'I just finished reading an amazing book!'
    },
    {
        id: 5,
        name: 'Angela Flower',
        img: MeessageImage5,
        mText: 'Can you send me the presentation slides?'
    },
];



export default MessagesData;

// import { useState } from "react";
// import axios from "axios";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const sendMessage = async () => {
//     if (!input) return;
//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);

//     const { data } = await axios.post("/api/chat", { message: input });
//     setMessages([...newMessages, { role: "assistant", content: data.reply }]);
//     setInput("");
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-xl font-bold">AI Chatbot</h1>
//       <div className="bg-gray-100 p-4 rounded h-96 overflow-auto">
//         {messages.map((msg, idx) => (
//           <p key={idx} className={msg.role === "user" ? "text-right" : "text-left"}>
//             <strong>{msg.role === "user" ? "You:" : "AI:"}</strong> {msg.content}
//           </p>
//         ))}
//       </div>
//       <input
//         type="text"
//         className="w-full p-2 border rounded mt-2"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//       />
//       <button className="bg-blue-500 text-white p-2 rounded mt-2" onClick={sendMessage}>
//         Send
//       </button>
//     </div>
//   );
// }
