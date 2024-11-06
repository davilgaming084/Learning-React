import React from 'react'
import Container from '../Components/Container/Container'
import PostCard from "../Components/PostCard"
import appwriteservice from "../Appwrite/Config"
import { useState, useEffect } from 'react'
const Allpost = () => {
    const [post, setpost] = useState([])
    useEffect(() => {
        appwriteservice.getposts([]).then((posts) => {
            if (posts) {
                setpost(posts.documents)
            }
        })
    })
    return (
        <div>

            <Container>
                <div>
                    {post.map((post) => (
                        <div key={post.$id}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Allpost