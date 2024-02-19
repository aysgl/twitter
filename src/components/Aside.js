import React from 'react'
import Search from './Search'
import Trends from './Trends'
import WhoToFollow from './WhoToFollow'
import Subscribe from './Subscribe'

const Aside = () => {
    return (
        <div className='mx-4 sticky-top'>
            <Search />
            <Subscribe />
            <Trends />
            <WhoToFollow />
        </div>
    )
}

export default Aside