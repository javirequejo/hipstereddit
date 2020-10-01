import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPostList} from '../../services/post-service'
import PostCard from './PostCard'

const PostListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const PostList = props => {
    const [postList, setPostList] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getList = async () => {
            const list = await getPostList(props.subId)
            setPostList(list)
        }
        getList()
        return () => [
            setPostList([])
        ]
    }, [])

    return (
        <PostListContainer>
            {postList.length > 0 && postList.map(elem => {
                const post = elem.data
                return (<PostCard key={post.id} post={post} />)
            })}
        </PostListContainer>
    )
}

export default PostList