import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../components/subs/PostList'

const Sub = () => {
    return (
        <div>
            <PostList subId={useParams().subId} />
        </div>
    )
}

export default Sub