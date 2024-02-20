import React, { useEffect, useState } from 'react';
import AddMedia from '../components/Icons/AddMedia';
import AddGif from '../components/Icons/AddGif';
import AddPoll from '../components/Icons/AddPoll';
import AddEmoji from '../components/Icons/AddEmoji';
import AddSchedule from '../components/Icons/AddSchedule';
import AddLocation from '../components/Icons/AddLocation';
import Earth from './Icons/Earth';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db, storage, auth } from "../firebase/config"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { saveUserDataToLocalStorage } from '../utils/utils';


const Form = () => {
    const [userData, setUserData] = useState({});
    const [textContent, setTextContent] = useState("");
    const [imgContent, setImgContent] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = auth.currentUser;
                if (userData) {
                    setUserData(userData.toJSON());
                    saveUserDataToLocalStorage(userData)
                } else {
                    console.log('No user is currently logged in.');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);


    const tweetCol = collection(db, "tweets");

    const uploadImage = async (file) => {
        if (!file || !file.type.startsWith("image")) return null;
        const fileref = ref(storage, file.name);
        await uploadBytes(fileref, file);
        return await getDownloadURL(fileref);
    }

    uploadImage(imgContent)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imgUrl = await uploadImage(imgContent);

        await addDoc(tweetCol, {
            textContent,
            imgContent: imgUrl,
            createdAt: serverTimestamp(),
            user: {
                id: userData?.uid,
                name: userData?.displayName,
                photo: userData?.photoURL
            },
            likes: [],
            isEdited: false
        })

        setTextContent("");
        setImgContent("");
    }

    return (
        <div className='p-3 border-bottom add-post'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-1'>
                        {userData?.photoURL &&
                            <img className='user' src={userData?.photoURL} srcSet={userData?.photoURL} aria-hidden="true" alt={userData?.displayName} />
                        }
                    </div>
                    <div className='col-11'>
                        <div className='border-bottom ms-3'>
                            <textarea className='form-control' placeholder='What is happening?!' value={textContent} onChange={(e) => setTextContent(e.target.value)} />
                            <div className='mb-2'>
                                <Earth /> <span className='small text-primary'>Everyone can reply</span>
                            </div>
                        </div>
                        <div className='ms-3 d-flex justify-content-between align-items-end mt-2'>
                            <div className='d-flex mb-1'>
                                <label htmlFor="img" className='d-flex'>
                                    <AddMedia className="me-2" />
                                </label>
                                <input accept="image/*" className='d-none' type="file" id='img' onChange={(e) => {
                                    setImgContent(e.target.files[0])
                                    e.target.value = null;
                                }} />
                                <AddGif className="me-2" />
                                <AddPoll className="me-2" />
                                <AddEmoji className="me-2" />
                                <AddSchedule className="me-2" />
                                <AddLocation />
                            </div>
                            <button disabled={textContent !== "" ? false : true} className='btn btn-sm btn-primary rounded-pill'>Post</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;
