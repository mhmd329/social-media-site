import React, { useState, useCallback } from 'react';
import MessagesData from '../FakeApis/MessageData';
import { FaTimes, FaReply,FaEnvelope} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MessagesLayout = () => {
    const [modal, setModal] = useState(false);
    const [replyToMessageId, setReplyToMessageId] = useState(null); 
    const [replyText, setReplyText] = useState(''); 
    const [messages, setMessages] = useState(MessagesData);

    const toggleModal = useCallback(() => {
        setModal((prev) => !prev);
        setReplyToMessageId(null)
    }, []);

    const handleReply = (messageId) => {
        if (replyText.trim() === '') return; 

       
        const updatedMessages = messages.map((message) =>
            message.id === messageId
                ? { ...message, replies: [...(message.replies || []), replyText] }
                : message
        );

        setMessages(updatedMessages); 
        setReplyText(''); 
        setReplyToMessageId(null); 
    };
    const totalReplies = messages.reduce((total, message) => {
        return total + (message.replies ? message.replies.length : 0);
    }, 0);

    return (
        <div className="flex flex-col items-center justify-center">
           <button
                onClick={toggleModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition flex items-center gap-2">
                <FaEnvelope className="text-lg" /> {/* الأيقونة */}
                <span className="bg-white text-blue-500 rounded-full px-2 py-1 text-sm">
                   {messages.length + totalReplies}
                </span>
            </button>

            <AnimatePresence>
                {modal && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 left-0 h-full bg-white shadow-lg z-40"
                        style={{ width: '300px' }}
                    >
                        <div className="p-4">
                            <button
                                onClick={toggleModal}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition mb-4">
                                <FaTimes />
                            </button>

                            <div className="overflow-y-auto max-h-[calc(100vh-100px)]">
                                {messages.map((message) => (
                                    <div key={message.id} className="flex flex-col items-center gap-4 border-b pb-4 last:border-none">
                                        <img
                                            alt="profile img"
                                            src={message.img}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <h2 className="text-lg font-semibold">{message.name}</h2>
                                        <p className="text-gray-700 text-center">{message.mText}</p>

                                        {/* عرض الردود */}
                                        {message.replies && message.replies.length > 0 && (
                                            <div className="w-full pl-4 border-l-2 border-gray-200">
                                                {message.replies.map((reply, index) => (
                                                    <p key={index} className="text-gray-600 text-sm mt-2">
                                                        → {reply}
                                                    </p>
                                                ))}
                                            </div>
                                        )}

                                        {/* زر الرد */}
                                        <button
                                            onClick={() => setReplyToMessageId(message.id)}
                                            className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
                                            <FaReply /> Reply
                                        </button>

                                        {/* حقل الرد */}
                                        {replyToMessageId === message.id && (
                                            <div className="w-full mt-2">
                                                <input
                                                    type="text"
                                                    placeholder="Type your reply..."
                                                    value={replyText}
                                                    onChange={(e) => setReplyText(e.target.value)}
                                                    className="w-full text-gray-400 px-2 py-1 border rounded-md"
                                                />
                                                <button
                                                    onClick={() => handleReply(message.id)}
                                                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                                                    Send
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MessagesLayout;