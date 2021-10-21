import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { 
  Container
  } from 'reactstrap';
import Pages from './components/Pages/Pages';
import Posts from './components/Posts/Posts';

function App() {
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

  return (
    <Container>
      <h1>List Posts</h1>
      <Posts 
        posts={currentUsers} 
        loading={loading}
        sortTable={sortData}
        quantyPosts={quantyPosts}
      />
      <Pages
        postPerPage={postPerPage}
        totalPosts={posts.length}
        pagination={paginate}
      />
    </Container>
  );
}

export default App;