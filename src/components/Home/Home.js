import React from 'react'

//------- COMPONENTS
import Header from '../Header'
import ControlsContainer from '../Controls/ControlsContainer'
// import AllPosts from '../AllPosts'
import CategoriesContainer from '../Categories/CategoriesContainer'

//------- CONSTANTS
import messages from '../../constants/messages'

//------- STYLING
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <Header msg={messages.header.home} />
            <ControlsContainer level="posts" />
            <CategoriesContainer />
            {/* <AllPosts /> */}
        </div>
    )
}

export default Home
