import React from 'react'
import Setting from '../components/Icons/Setting'

const Tab = () => {
    return (
        <ul className="nav nav-pills nav-fill border-bottom sticky-top">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">For you</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Following</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <Setting />
                </a>
            </li>
        </ul>
    )
}

export default Tab