import React from 'react'

const WhoToFollow = () => {
    return (
        <div className='whotofollow mt-3'>
            <ul className="list-group">
                <li className='list-group-item'>
                    <p className='fs-5 fw-bold mb-0'>WhoToFollow</p>
                </li>
                <li className="list-group-item">
                    <p className='small mb-0 text-secondary'>Trending in Turkey</p>
                    <p className='mb-0 fw-bold'>Dilber</p>
                    <p className='small mb-0 text-secondary'>189 posts</p>
                </li>
                <li className="list-group-item">
                    <p className='small mb-0 text-secondary'>Trending in Turkey</p>
                    <p className='mb-0 fw-bold'>Acun</p>
                    <p className='small mb-0 text-secondary'>189 posts</p>
                </li>
                <li className="list-group-item">
                    <p className='small mb-0 text-secondary'>Trending in Turkey</p>
                    <p className='mb-0 fw-bold'>Gazze'ye Özgürlük</p>
                    <p className='small mb-0 text-secondary'>189 posts</p>
                </li>
            </ul>
        </div>
    )
}

export default WhoToFollow