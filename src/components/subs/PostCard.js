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

const PostHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

const PostButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

const PostButton = styled.button`
    cursor: pointer;
    font-size: 1em;
    margin: 1em;
    height: 2rem;
    background-color: #FF5700;
    color: white;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 3px;
`

const PostThumbnail = styled.img`
    max-width: 5rem;
    padding: 1rem;
`

const PostBody = styled.div`
    width: 100%;
`

const PostTitle = styled.h3`
    text-align: left;
    font-size: 1.2em;
`

const PostDescription = styled.p`
    text-align: center;
    font-size: 1.2em;
`

const PostFooter = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`

const PostAuthor = styled.span`
`

const PostTag = styled.span`
`

const openLinkButton = (event, url) => {
    event.preventDefault()
    window.open(url, "_blank")
}

const PostCard = props => {
    const {post} = props
    return (
        <PostCardContainer>
            <PostHeader>
                {post.url.includes('jpg') && (<PostThumbnail src={post.url} />)}
                <PostButtonsContainer>
                    <PostButton onClick={(e) => openLinkButton(e, post.url)}>Source</PostButton>
                </PostButtonsContainer>
            </PostHeader>
            <PostBody>
                <PostTitle>{post.title}</PostTitle>
                <PostDescription>{post.selftext.slice(0,200)}</PostDescription>
            </PostBody>
            <PostFooter>
                <PostAuthor>Author: {post.author}</PostAuthor>
                {post.link_flair_text && (<PostTag>#{post.link_flair_text}</PostTag>)}
            </PostFooter>
        </PostCardContainer>
    )
}

export default PostCard