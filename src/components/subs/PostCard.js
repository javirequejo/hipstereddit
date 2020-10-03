import React from 'react'
import styled from 'styled-components'

const PostCardContainer = styled.div`
    background-color: #eae2b7;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    flex-grow: 1;
    width: 18rem;
    margin: 2rem;
    padding: 1rem;
    border: 1px solid;
    border-radius: 1rem;
    :hover {
        transition: all .1s ease-in-out;
        transform: scale(1.05);
    }
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

const PostButton = styled.a`
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
`

const PostThumbnail = styled.img`
    max-width: ${props => props.isLogo ? '5rem' : '10rem'};
    max-height: ${props => props.isLogo ? '5rem' : '10rem'};
    padding: 1rem;
`

const PostBody = styled.div`
    width: 100%;
`

const PostTitle = styled.h3`
    text-align: left;
`

const PostDescription = styled.p`
    text-align: left;
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
    const {permaLink, putLogo, imgUrl, title, author, description, tag} = props
    return (
        <PostCardContainer>
            <PostHeader>
                <PostButtonsContainer>
                    <PostButton href={permaLink} target='_blank' rel="noopener noreferrer">Reddit web</PostButton>
                </PostButtonsContainer>
                <PostThumbnail isLogo={putLogo} src={imgUrl} />
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