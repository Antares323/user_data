import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Paginate from '../Paginate/Paginate';
import PostTable from '../PostsTable/PostTable';
import { useHistory } from 'react-router';

const MainPage = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPerPage] = useState(9)

    useEffect(() => {
        const getPost = async () => {
        setLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
        setLoading(false)
        }

        getPost()
    }, [])

    const lastPost = currentPage * postPerPage
    const firtsPost = lastPost - postPerPage
    const currentUsers = posts.slice(firtsPost, lastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const quantyPosts = (number) => setPerPage(number)

    const sortData = (field) => {
        const tempData = posts.concat()
        const sortiration = tempData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1
        })
        setPosts(sortiration)
    }

    const history = useHistory()

    const viewPost = (dataPostId) => {
        history.push('/post/' + dataPostId)
    }

    const editePost = (dataPostId, title) => {
        setPosts(posts.map((e) => e.id === dataPostId ? {...e, title: e.title + ' ' + title} : e))
    }

    const deletePost = (dataPostId, person, comment) => {
        setPosts(posts.map((e) => e.id === dataPostId ? {...e, title: e.title + ` Was deleted ${person} ` + comment} : e))
    }
    return (
        <div>
            <h1>List Posts</h1>
            <PostTable 
                dataPost={currentUsers} 
                loading={loading}
                sortTable={sortData}
                quantyPosts={quantyPosts}
                viewPost={viewPost}
                editePost={editePost}
                deletePost={deletePost}
            />
            <Paginate
                postPerPage={postPerPage}
                totalPosts={posts.length}
                pagination={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}

export default MainPage
