import React from 'react'
import Storyies from '../components/storyies'
import NewPost from '../components/newPost'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div>
        <Storyies/>
        <NewPost/>
        <Posts/>
    </div>
  )
}

export default Home