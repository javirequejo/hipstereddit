import React, {Fragment, useState, useEffect} from 'react'
import styled from 'styled-components'
import {getPostList} from '../../services/post-service'
import PostCard from './PostCard'
import redditLogo from '../../images/reddit-logo.png'

const PostListContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
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
    }, [props.subId])

    return (
        <Fragment>
            <PostListTitle>/r/{props.subId}</PostListTitle>
            <PostListContainer>
                {postList.length > 0 && postList.map(elem => {
                    const post = elem.data
                    console.log(post)
                    const putLogo = !post.url.includes('jpg')
                    const imgUrl = !putLogo ? post.url : redditLogo
                    return (<PostCard 
                        key={post.id} 
                        permalink={`https://reddit.com${post.permalink}`}
                        putLogo={putLogo}
                        imgUrl={imgUrl}
                        title={post.title}
                        author={post.author}
                        description={post.selftext}
                        tag={post.link_flair_text}
                         />)
                })}
            </PostListContainer>
        </Fragment>
    )
}

export default PostList