import { Link } from 'react-router-dom'
import { Col, FormGroup, Input, Label, Table, Media } from 'reactstrap'
import DeleteModals from './Actions/DeleteModals/DeleteModals'
import EditModals from './Actions/EditModals/EditModals'

const Posts = ({dataPost, editePost, sortTable, quantyPosts, deletePost, viewPost}) => {
    return (
        <div>
            <FormGroup row className="d-flex mb-3">
                <Label for="postSelect" sm={2}>Select number post:</Label>
                <Col sm={1}>
                <Input onChange={(e) => console.log(quantyPosts(e.target.value))} 
                       defaultValue="9" 
                       type="select" 
                       name="select" 
                       id="postSelect">
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Input>
                </Col>
            </FormGroup>

           <Table dark>
                <thead>
                    <tr>
                        <th onClick={() => {sortTable('id')}}>#</th>
                        <th onClick={() => {sortTable('title')}}>Title</th>
                        <th onClick={() => {sortTable('body')}}>Words</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataPost.map(post => (
                            <tr key={post.id}>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.body.split(' ').length}</td>
                                <td className='d-flex'>
                                    <Col>
                                        <Link to={{
                                            pathname: `/post/${post.id}`,
                                            state: {
                                                title: post.title,
                                                text: post.body
                                            }
                                        }}>
                                            <Media
                                                object
                                                src='/img/view-icon.png'
                                            />
                                        </Link>
                                    </Col>
                                    <EditModals title='Edite Modal' editePost={editePost} postId={post.id}/>
                                    <DeleteModals title='Delete Modal' deletePost={deletePost} postId={post.id}/>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table> 

            
        </div>
    )
}

export default Posts
