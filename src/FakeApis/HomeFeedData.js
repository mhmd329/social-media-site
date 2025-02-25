
import feedProfile1 from '../assets/img/FeedProfile1.jpg';//Lana White
import feedProfile2 from '../assets/img/FeedProfile2.jpg';//Kane Mane
import feedProfile3 from '../assets/img/FeedProfile3.jpg';//Dodo Vincey
import feedProfile4 from '../assets/img/FeedProfile4.webp';//Emaly Shea
import feedProfile5 from '../assets/img/FeedProfile5.jpg';//Fatema Anny
import feedProfile6 from '../assets/img/FeedProfile6.webp';//Evrahim Alli
import feedProfile7 from '../assets/img/FeedProfile7.jpg';//Mohammed Nabi
import feedProfile8 from '../assets/img/FeedProfile8.jpeg';//Ema Cliopetra
import feedProfile9 from '../assets/img/FeedProfile9.jpg';//Anna Silvia
import feedProfile10 from '../assets/img/FeedProfile10.jpg';//jessy
import feedProfile11 from '../assets/img/FeedProfile11.jpg';//morreta
import feedProfile12 from '../assets/img/FeedProfile12.jpg';//ph: youssef
import feedProfile13 from '../assets/img/FeedProfile13.jpg';//jordella


import FeedImage1 from '../assets/img/feed1.jpg'
import FeedImage2 from '../assets/img/feed2.jpg'
import FeedImage3 from '../assets/img/feed3.jpg'
import FeedImage4 from '../assets/img/feed4.jpg'
import FeedImage5 from '../assets/img/feed5.jpg'
import FeedImage6 from '../assets/img/feed6.jpg'
import FeedImage7 from '../assets/img/feed7.jpg'
import FeedImage8 from '../assets/img/feed8.jpg'
import FeedImage9 from '../assets/img/feed9.png'
import FeedImage10 from '../assets/img/feed10.jpg'
import FeedImage11 from '../assets/img/feed11.jpg'
import FeedImage12 from '../assets/img/feed12.jpg'
import FeedImage13 from '../assets/img/feed13.jpg'

const Feeds = [
    {
        id: 1,
        userid: 1,
        comment: 3,
        date: "10 mins ago",
        like: 32,
        name: 'Lana White',
        feedImage: FeedImage1,
        feedProfile: feedProfile1,
        desc: 'Beautiful day',
        comments: [
            { id: 1, name: 'Dodo Vincey', commentProfile: feedProfile3, CommeText: 'Wow! 😍' },
            { id: 2, name: 'ph: youssef', commentProfile: feedProfile12, CommeText: 'Nice shot! 📸' },
            { id: 3, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: 'Amazing view! 🌅' }
        ]
    },
    {
        id: 2,
        userid: 2,
        comment: 2,
        date: "13 mins ago",
        like: 22,
        name: 'Kane Mane',
        feedImage: FeedImage2,
        feedProfile: feedProfile2,
        desc: '☀️',
        comments: [
            { id: 1, name: 'Mohammed Nabi', commentProfile: feedProfile7, CommeText: 'That looks great! 🌴' },
            { id: 2, name: 'Emaly Shea', commentProfile: feedProfile4, CommeText: 'Lovely vibes! 😍' }
        ]
    },
    {
        id: 3,
        userid: 3,
        comment: 5,
        date: "30 mins ago",
        like: 60,
        name: 'Dodo Vincey',
        feedImage: FeedImage3,
        feedProfile: feedProfile3,
        desc: 'Exploring the city! 🏙️',
        comments: [
            { id: 1, name: 'jesssy', commentProfile: feedProfile10, CommeText: 'Where is this place? 🤔' },
            { id: 2, name: 'Ema Cliopetra', commentProfile: feedProfile8, CommeText: 'Looks fantastic! 😍' },
            { id: 3, name: 'Lana White', commentProfile: feedProfile1, CommeText: 'Been there before! ✨' },
            { id: 4, name: 'ph: youssef', commentProfile: feedProfile12, CommeText: 'Love it! 😍' },
            { id: 5, name: 'Kane Mane', commentProfile: feedProfile2, CommeText: 'So cool! 🔥' }
        ]
    },
    {
        id: 4,
        userid: 4,
        comment: 4,
        date: "50 mins ago",
        like: 20,
        name: 'Emaly Shea',
        feedImage: FeedImage4,
        feedProfile: feedProfile4,
        desc: 'ouf of city ☕',
        comments: [
            { id: 1, name: 'Lana White', commentProfile: feedProfile1, CommeText: 'That looks delicious! 😋' },
            { id: 2, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: 'Enjoy your coffee! ☕' },
            { id: 3, name: 'ph: youssef', commentProfile: feedProfile12, CommeText: 'Where did you get this? 🤩' },
            { id: 4, name: 'Mohammed Nabi', commentProfile: feedProfile7, CommeText: 'I need one too! 😅' }
        ]
    },
    {
        id: 5,
        userid: 5,
        comment: 3,
        date: "+ 1 hour",
        like: 54,
        name: 'Fatema Anny',
        feedImage: FeedImage5,
        feedProfile: feedProfile5,
        desc: 'Morning shotout! 💪',
        comments: [
            { id: 1, name: 'Kane Mane', commentProfile: feedProfile2, CommeText: 'Great job! 🔥' },
            { id: 2, name: 'Dodo Vincey', commentProfile: feedProfile3, CommeText: 'Keep going! 💪' },
            { id: 3, name: 'Ema Cliopetra', commentProfile: feedProfile8, CommeText: 'Fitness goals! 💯' }
        ]
    },
    {
        id: 6,
        userid: 6,
        comment: 2,
        date: "+ 1 hour",
        like: 20,
        name: 'Evrahim Alli',
        feedImage: FeedImage6,
        feedProfile: feedProfile6,
        desc: 'i try to work from anywhere 📖',
        comments: [
            { id: 1, name: 'ph: youssef', commentProfile: feedProfile12, CommeText: 'Which book? 🤔' },
            { id: 2, name: 'jessy', commentProfile: feedProfile10, CommeText: 'I need book recommendations! 📚' }
        ]
    },
    {
        id: 7,
        userid: 7,
        comment: 5,
        date: "+ 1 hour",
        like: 14,
        name: 'Mohammed Nabi',
        feedImage: FeedImage7,
        feedProfile: feedProfile7,
        desc: 'Road trip adventure! 🚗',
        comments: [
            { id: 1, name: 'Ema Cliopetra', commentProfile: feedProfile8, CommeText: 'Drive safe! 🚗' },
            { id: 2, name: 'Lana White', commentProfile: feedProfile1, CommeText: 'Looks like fun! 😍' },
            { id: 3, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: 'Where are you headed? 🗺️' },
            { id: 4, name: 'Kane Mane', commentProfile: feedProfile2, CommeText: 'Awesome adventure! 🔥' },
            { id: 5, name: 'Dodo Vincey', commentProfile: feedProfile3, CommeText: 'Enjoy the trip! 🚗' }
        ]
    },
    {
        id: 8,
        userid: 8,
        comment: 3,
        date: "+ 1 hour",
        like: 4,
        name: 'Ema Cliopetra',
        feedImage: FeedImage8,
        feedProfile: feedProfile8,
        desc: 'Best girl in town! ',
        comments: [
            { id: 1, name: 'Mohammed Nabi', commentProfile: feedProfile7, CommeText: 'I need this right now! 🤤' },
            { id: 2, name: 'Emaly Shea', commentProfile: feedProfile4, CommeText: 'Where is this place? 🍕' },
            { id: 3, name: 'jessy', commentProfile: feedProfile10, CommeText: 'Looks so tasty! 🤩' }
        ]
    },
    {
        id: 9,
        userid: 9,
        comment: 4,
        date: "+ 1 hour",
        like: 7,
        name: 'Anna Silvia',
        feedImage: FeedImage9,
        feedProfile: feedProfile9,
        desc: 'nice day 🌅',
        comments: [
            { id: 1, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: 'Breathtaking view! 🌅' },
            { id: 2, name: 'Ema Cliopetra', commentProfile: feedProfile8, CommeText: 'So peaceful! 🌊' },
            { id: 3, name: 'Mohammed Nabi', commentProfile: feedProfile7, CommeText: 'Golden hour! ✨' },
            { id: 4, name: 'ph: youssef', commentProfile: feedProfile12, CommeText: 'I need to visit! 😍' }
        ]
    },
    {
        id: 10,
        userid: 10,
        comment: 2,
        date: "+ 1 hour",
        like: 14,
        name: 'jessy',
        feedImage: FeedImage10,
        feedProfile: feedProfile10,
        desc: 'family',
        comments: [
            { id: 1, name: 'Evrahim Alli', commentProfile: feedProfile6, CommeText: 'Breathtaking view! 🌅' },
            { id: 2, name: 'Kane Mane', commentProfile: feedProfile2, CommeText: 'i miss that , wooww! 🌊' },
           
        ]
    },
    {
        id: 11,
        userid: 11,
        comment: 1,
        date: "+ 1 hour",
        like: 11,
        name: 'morreta',
        feedImage: FeedImage11,
        feedProfile: feedProfile11,
        desc: 'i love this horse, it`s kindly ',
        comments: [
            { id: 1, name: 'Mohammed Nabi', commentProfile: feedProfile7, CommeText: 'nice picc! 🌅' },
            
        ]
    },
    {
        id: 12,
        userid: 12,
        comment: 1,
        date: "+ 1 hour",
        like: 28,
        name: 'ph: youssef',
        feedImage: FeedImage12,
        feedProfile: feedProfile12,
        desc: '',
        comments: [
            { id: 1, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: 'Breathtaking view! 🌅' },
          
           
        ]
    },
    {
        id: 13,
        userid: 13,
        comment: 1,
        date: "+ 1 hour",
        like: 17,
        name: 'jordella',
        feedImage: FeedImage13,
        feedProfile: feedProfile13,
        desc: 'new collection <>',
        comments: [
            { id: 1, name: 'Fatema Anny', commentProfile: feedProfile5, CommeText: ' nice work' },
          
           
        ]
    },
];

export default Feeds;
