import React from 'react'
import Navbar from '../../components/Navbar/index'
import Header from './Header/index'
import Body from './Body/index'
import Footer from '../../components/Footer/index'

const index = () => {
    return (
        <div>
            <Navbar />
            <Header/>
            <Body />
            <Footer />
        </div>
    )
}

export default index
