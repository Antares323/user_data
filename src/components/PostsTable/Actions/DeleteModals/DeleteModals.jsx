import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Media, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const DeleteModals = ({title, deletePost, postId}) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [nameDirty, setNameDirty] = useState(false)
    const [commentDirty, setCommentDirty] = useState(false)
    const [nameError, setNameError] = useState('Enter text please!')
    const [commentError, setCommentError] = useState('Enter text please!')
    const [formValid, setFormValid] = useState(true)

    useEffect(()=> {
        if (nameError || commentError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    },[nameError, commentError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'comment':
                setCommentDirty(true)
        }
    }

    const nameHandler = (e) => {
        setName(e.target.value)

        if (e.target.value.length < 3) {
            setNameError('Text may not less then 3 letter')
            if(!e.target.value) {
                setNameError('Enter text please!')
            }
        } else {
            setNameError('')
        }
    }

    const commentHandler = (e) => {
        setComment(e.target.value)

        if (e.target.value.length < 3) {
            setCommentError('Text may not less then 3 letter')
            if(!e.target.value) {
                setCommentError('Enter text please!')
            }
        } else {
            setCommentError('')
        }
    }

    return (
        <Col>
            <Media 
                onClick={toggle}
                object 
                src="/img/delete-icon.png" 
                alt=""
            />
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                            <Label for="name">Name</Label>{' '}
                            <Input 
                                name='name'
                                type='text' 
                                placeholder='Type name...' 
                                rows={1}
                                id='name'
                                onChange={(e) => nameHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            {(commentDirty && commentError) && <div style={{color:'red'}}>{commentError}</div>}
                            <Label for="comment">Comment</Label>{' '}
                            <Input 
                                name='comment'
                                type='textarea' 
                                placeholder='Type comment...' 
                                rows={3}
                                id='comment'
                                onChange={(e) => commentHandler(e)}
                                onBlur={(e) => blurHandler(e)}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button 
                    disabled={!formValid} 
                    color="primary" 
                    onClick={() => {
                        <div color="red">
                            {deletePost(postId, name, comment)}; 
                        </div> 
                        toggle()
                    }}>Add Title</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    )
}

export default DeleteModals
