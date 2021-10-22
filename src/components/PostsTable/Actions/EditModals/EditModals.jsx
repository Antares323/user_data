import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Media, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const EditModals = ({title, editePost, postId}) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [textAdd, setTextAdd] = useState('')
    const [textError, setTextError] = useState('Enter text please!')
    const [textDirty, setTextDirty] = useState(false)
    const [formValid, setFormValid] = useState(true)

    useEffect(()=> {
        if (textError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    },[textError])


    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'title':
                setTextDirty(true)
                break
        }
    }

    const textHandler = (e) => {
        setTextAdd(e.target.value)

        if (e.target.value.length < 3) {
            setTextError('Text may not less then 3 letter')
            if(!e.target.value) {
                setTextError('Enter text please!')
            }
        } else {
            setTextError('')
        }
    }

    return (
        <Col>
            <Media 
                onClick={toggle}
                object
                src="/img/edit-icon.png" 
                alt=""
            />
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            {(textDirty && textError) && <div style={{color:'red'}}>{textError}</div>}
                            <Label for="title">Add Title</Label>{' '}
                            <Input 
                                value={textAdd}
                                type='text'
                                name='title' 
                                placeholder='Type title...' 
                                rows={1}
                                id='title'
                                onChange={(e) => textHandler(e)}
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
                        editePost(postId, textAdd); toggle()
                    }}>Add Title</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    )
}

export default EditModals
