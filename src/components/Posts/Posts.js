import React from 'react'
import { Col, FormGroup, Input, Label, Table } from 'reactstrap'

const Posts = ({posts, loading, sortTable, quantyPosts}) => {
    return (
        <div>
            <FormGroup row className="d-flex mb-3">
                <Label for="postSelect" sm={2}>Select number post:</Label>
                <Col sm={1}>
                <Input onChange={(e) => console.log(quantyPosts(e.target.value))} type="select" name="select" id="postSelect">
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                </Input>
                </Col>
            </FormGroup>

           <Table dark>
                <thead>
                    <tr>
                        <th onClick={() => {sortTable('id')}}>#</th>
                        <th onClick={() => {sortTable('title')}}>Title</th>
                        <th onClick={() => {sortTable('body')}}>Words</th>
                    </tr>
                </thead>
                {
                    posts.map(post => (
                        <tbody>
                            <tr>
                                <th scope="row">{post.id}</th>
                                <td>{post.title}</td>
                                <td>{post.body.split(' ').length}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </Table> 

            
        </div>
    )
}

export default Posts
