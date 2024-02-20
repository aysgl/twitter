import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import Comment from "./Icons/Comment"
import Retweet from "./Icons/Retweet"
import Bookmark from "./Icons/Bookmark"
import Static from "./Icons/Static"
import moment from 'moment';
import { formatUsername, renderContent } from '../utils/utils';

const Post = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const tweetsCol = collection(db, "tweets");
        const q = query(tweetsCol, orderBy("createdAt", "desc"))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tweetsData = snapshot.docs.map(doc => {
                const data = doc.data();
                const formattedCreatedAt = moment(data?.createdAt?.toDate()).format('MMMM Do YYYY, h:mm:ss a');
                const username = formatUsername(data?.user?.name)
                return { id: doc.id, ...data, createdAt: formattedCreatedAt, name: username };
            });
            setTweets(tweetsData);
        });

        return () => unsubscribe();
    }, []);



    return (
        <div className='post'>
            {tweets.map(tweet => (
                <div key={tweet?.id} className='border-bottom p-4 d-flex'>
                    {tweet?.user?.photo ? (
                        <div>
                            <img className='user' src={tweet?.user?.photo} srcSet={tweet?.user?.photo} alt={tweet?.user?.name} aria-hidden="true" />
                        </div>
                    ) : (
                        <div className="user">{tweet?.user?.name.charAt(0).toUpperCase()}</div>
                    )}
                    <div className='w-100'>
                        <div>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    {tweet?.user?.name}
                                    <span className='text-secondary'> @{tweet.name} · {moment(tweet.createdAt, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</span>
                                </div>
                                <button className='btn btn-link  justify-content-end'>...</button>
                            </div>

                            {tweet?.textContent &&
                                <p className='mb-4'>{renderContent(tweet?.textContent)}</p>
                            }

                            {tweet?.imgContent && (
                                <img className='img-twitter w-100 mb-3 rounded' src={tweet?.imgContent} alt="" />
                            )}
                        </div>
                        <div className='action-button align-items-center justify-content-between'>
                            <span><Comment /> </span>
                            <span><Retweet /></span>
                            <span><Bookmark /></span>
                            <span><Static /></span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Post;
