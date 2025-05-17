import React, { useState, useCallback } from 'react';
import MessagesData from '../FakeApis/MessageData';
import { FaTimes, FaReply, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MessagesLayout = () => {
  const [modal, setModal] = useState(false);
  const [replyToMessageId, setReplyToMessageId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [messages, setMessages] = useState(MessagesData);

  const toggleModal = useCallback(() => {
    setModal((prev) => !prev);
    setReplyToMessageId(null);
    setReplyText('');
  }, []);

  const handleReply = (messageId) => {
    if (!replyText.trim()) return;

    const updated = messages.map((msg) =>
      msg.id === messageId
        ? { ...msg, replies: [...(msg.replies || []), replyText] }
        : msg
    );

    setMessages(updated);
    setReplyText('');
    setReplyToMessageId(null);
  };

  const totalReplies = messages.reduce(
    (sum, msg) => sum + (msg.replies?.length || 0),
    0
  );

  return (
    <div className="flex justify-center">
      <button
        onClick={toggleModal}
        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all"
      >
        <FaEnvelope />
        <span className="bg-white text-blue-600 text-xs font-bold rounded-full px-2 py-1">
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
            className="fixed top-0 left-0 h-full w-[350px] bg-white shadow-lg z-50 p-4 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Messages</h2>
              <button
                onClick={toggleModal}
                className="text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full"
              >
                <FaTimes />
              </button>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className="border-b pb-4 mb-4 flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={message.img}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h3 className="font-semibold text-gray-800">{message.name}</h3>
                </div>

                <p className="text-gray-700 ml-1">{message.mText}</p>

                {/* الردود */}
                {message.replies?.length > 0 && (
                  <div className="bg-gray-100 p-2 rounded-md mt-1">
                    {message.replies.map((reply, i) => (
                      <p key={i} className="text-sm text-gray-600">→ {reply}</p>
                    ))}
                  </div>
                )}

                {/* زر الرد */}
                <button
                  onClick={() =>
                    setReplyToMessageId(
                      replyToMessageId === message.id ? null : message.id
                    )
                  }
                  className="flex items-center text-sm text-blue-600 hover:text-blue-700 mt-2"
                >
                  <FaReply className="mr-1" /> Reply
                </button>

                {/* حقل الرد */}
                {replyToMessageId === message.id && (
                  <div className="mt-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your reply..."
                      className="w-full px-3 py-1 border text-black rounded-md text-sm"
                    />
                    <button
                      onClick={() => handleReply(message.id)}
                      className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MessagesLayout;
