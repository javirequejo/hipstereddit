import React from 'react'
import styled from 'styled-components'

const PostCardContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex-grow: 1;
    width: 24rem;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid;
    border-radius: 1rem;
`

const PostHeader = styled.div`
    display: flex;
    flex-flow: row-reverse nowrap;
    justify-content: space-between;
    align-items: center;
    height: 10rem;
`

const PostButtonsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`

const PostButton = styled.button`
    cursor: pointer;
    font-size: 1em;
    height: 2rem;
    background-color: #FF5700;
    color: white;
    padding: 0.25em 1em;
    border: 2px solid;
    border-radius: 3px;
`

const PostThumbnail = styled.img`
    max-width: ${props => props.logoholder ? '5rem' : '10rem'};
    max-height: ${props => props.logoholder ? '5rem' : '10rem'};
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
    text-align: left;
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

const PostCard = props => {
    const {permaLink, hasImg, imgUrl, title, author, description, tag} = props
    return (
        <PostCardContainer>
            <PostHeader>
                <PostButtonsContainer>
                    <a href={permaLink} target='_blank' rel="noopener noreferrer">
                        <PostButton>Source</PostButton>
                    </a>
                </PostButtonsContainer>
                <PostThumbnail logoHolder={!hasImg} src={imgUrl} />
            </PostHeader>
            <PostBody>
                <PostTitle>{title}</PostTitle>
                <PostDescription>{description.slice(0,200)}</PostDescription>
            </PostBody>
            <PostFooter>
                <PostAuthor>Author: {author}</PostAuthor>
                {tag && (<PostTag>#{tag}</PostTag>)}
            </PostFooter>
        </PostCardContainer>
    )
}

export default PostCard