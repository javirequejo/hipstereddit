import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {getPostList} from '../../services/post-service'

const PostList = () => {
    const [postList, setPostList] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const getList = async () => {
            const list = await getPostList('lifeprotips')
            setPostList(list)
        }
        getList()
        return () => [
            setPostList([])
        ]
    }, [])

    console.log(postList)
    return (
        <div>
            {postList.length > 0 && postList.map(elem => {
                const post = elem.data
                const imageSrc = Object.prototype.hasOwnProperty.call(post, 'thumbnail') ? post.thumbnail : ''
                return (
                    <Card key={post.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={imageSrc} />
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Button href={post.url} variant="primary">Link</Button>
                            <Card.Text>{post.selftext.slice(0,200)}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default PostList