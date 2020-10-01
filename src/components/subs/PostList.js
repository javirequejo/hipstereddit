import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPostList} from '../../services/post-service'
import PostCard from './PostCard'

const PostListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const PostListTitle = styled.h1`
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
`

const PostList = props => {
    const [postList, setPostList] = useState([])
    
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
        <Fragment>
            <PostListTitle>/r/{props.subId}</PostListTitle>
            <PostListContainer>
                {postList.length > 0 && postList.map(elem => {
                    const post = elem.data
                    console.log(post)
                    return (<PostCard key={post.id} post={post} />)
                })}
            </PostListContainer>
        </Fragment>
    )
}

export default PostList