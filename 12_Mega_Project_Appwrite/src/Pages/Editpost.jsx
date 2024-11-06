import React from 'react'
import Container from '../Components/Container/Container'
import { useState, useEffect } from 'react'
import Post_form from '../Components/post-form/Post_form'
import appwriteservice from "../Appwrite/Config"
import { useNavigate, useParams } from 'react-router-dom'
export const Editpost = () => {
    const [post, setpost] = useState([])
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteservice.getPost().then((post) => {
                if (post) {
                    setpost(post)
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])


    return post ? (
        <div>
            <Container>
                <Post_form post={post} />
            </Container>
        </div>
    ) : null

}
