import React from 'react'
import Logo from '../components/Icons/Logo'
import Home from '../components/Icons/Home'
import Search from '../components/Icons/Search'
import Notification from '../components/Icons/Notification'
import Mail from '../components/Icons/Mail'
import List from '../components/Icons/List'
import User from '../components/Icons/User'
import More from '../components/Icons/More'
import AddPost from '../components/Icons/AddPost'
import Communitie from './Icons/Communitie'
import Bookmark from './Icons/Bookmark'
import { Link, useNavigate } from 'react-router-dom'
import { clearUserDataFromLocalStorage } from '../utils/utils'
import { getAuth, signOut } from 'firebase/auth'

const Menu = () => {
    const userDataJSON = localStorage.getItem('userData');
    const userData = JSON.parse(userDataJSON);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem('userData');
            clearUserDataFromLocalStorage(userData)
            navigate('/login');
        }).catch((error) => {
            console.log("çıkış hatalı")
        });
    };
    return (
        <div className='menu mx-xl-5'>
            <ul className="list-group mx-4">
                <Link to="/home" className="list-group-item d-flex">
                    <Logo />
                </Link>
                <Link to="home" className="list-group-item d-flex">
                    <Home /><span className='d-none d-xl-block'>Home</span>
                </Link>
                <Link to="explore" className="list-group-item d-flex">
                    <Search /><span className='d-none d-xl-block'>Explore</span>
                </Link>
                <Link to="notifications" className="list-group-item d-flex">
                    <Notification /><span className='d-none d-xl-block'>Notifications</span>
                </Link>
                <Link to="messages" className="list-group-item d-flex">
                    <Mail /><span className='d-none d-xl-block'>Messages</span>
                </Link>
                <Link to="lists" className="list-group-item d-flex">
                    <List /><span className='d-none d-xl-block'>Lists</span>
                </Link>
                <Link to="bookmarks" className="list-group-item d-flex">
                    <Bookmark /><span className='d-none d-xl-block'>Bookmarks</span>
                </Link>
                <Link to="communities" className="list-group-item d-flex">
                    <Communitie /><span className='d-none d-xl-block'>Communities</span>
                </Link>
                <Link to="premium" className="list-group-item d-flex">
                    <Logo /><span className='d-none d-xl-block'>Premium</span>
                </Link>
                <Link to="profile" className="list-group-item d-flex">
                    <User /><span className='d-none d-xl-block'>Profile</span>
                </Link>
                <Link to="more" className="list-group-item d-flex">
                    <More /><span className='d-none d-xl-block'>More</span>
                </Link>
                <Link to="posts" className="list-group-item d-flex">
                    <AddPost /> <span className='d-none d-xl-block'>Post</span>
                </Link>
            </ul>
            <ul className='list-group mx-4 h-100 d-flex justify-content-end mb-3' onClick={handleLogout}>
                <li className='list-group-item bg-transparent'>
                    <img className='user me-0' src={userData?.photoURL} srcSet={userData?.photoURL} aria-hidden="true" alt={userData?.displayName} />
                </li>
            </ul>
        </div>
    )
}

export default Menu