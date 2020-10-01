import React from 'react'
import styled from 'styled-components'

const PostCardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 24rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid;
    border-radius: 1rem;
`

const PostThumbnail = styled.img`
    max-width: 5rem;
    padding: 1rem;
`

const PostBody = styled.div`
    width: 100%;
`

const PostAuthor = styled.span`
`

const PostTitle = styled.h3`
    text-align: left;
    font-size: 1.2em;
`

const PostDescription = styled.p`
    text-align: center;
    font-size: 1.2em;
`

const PostCard = props => {
    const {post} = props
    return (
        <PostCardContainer>
            <PostThumbnail src={post.thumbnail} />
            <PostBody>
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.selftext.slice(0,200)}</PostDescription>
                <PostAuthor>Author: {post.author}</PostAuthor>
            </PostBody>
        </PostCardContainer>
    )
}

export default PostCard