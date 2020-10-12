import React, { useEffect, useRef } from 'react'
import * as rb from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as _ from '../actions/userAction'

const AddTodo = ({ state, history, addAction, cleanupAction }) => {
  useEffect(() => {
    onMessage()
  }, [state.message])

  const firstName = useRef(null)
  const lastName = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()

    addAction(_.ADD_REQUEST, {
      firstName: firstName.current.value,
      lastName: lastName.current.value
    })
  }

  const onMessage = () => {
    if (state.message !== '') {
      window.alert(state.message)
      setTimeout(() => cleanupAction(_.CLEANUP_REQUEST), 1000)
      setTimeout(() => history.push('/'), 1000)
    }
  }

  return (
    <>
      <rb.Container className='mt-5'>
        <rb.Row className='flex-fill justify-content-center'>
          <rb.Col lg={6}>
            <rb.Card>
              <rb.Card.Header>
                <rb.Card.Title>Tambah Data</rb.Card.Title>
              </rb.Card.Header>
              <rb.Card.Body>
                <rb.Form onSubmit={onSubmit}>
                  <rb.Form.Group>
                    <rb.FormLabel htmlFor='firstName'>Firstname</rb.FormLabel>
                    <rb.Form.Control type='text' ref={firstName} placeholder='enter firstname' />
                  </rb.Form.Group>
                  <rb.Form.Group>
                    <rb.FormLabel htmlFor='lastName'>Lastname</rb.FormLabel>
                    <rb.Form.Control type='text' ref={lastName} placeholder='enter lastname' />
                  </rb.Form.Group>
                  <rb.Form.Group controlId='button'>
                    <rb.Button type='submit' className='btn btn-primary btn-block'>
                      Tambah Data
                    </rb.Button>
                  </rb.Form.Group>
                </rb.Form>
              </rb.Card.Body>
            </rb.Card>
          </rb.Col>
        </rb.Row>
      </rb.Container>
    </>
  )
}

AddTodo.propTypes = {
  state: PropTypes.object,
  addAction: PropTypes.func,
  cleanupAction: PropTypes.func
}

const mapStateToProps = ({ user }) => ({
  state: user
})

const mapDispatchToProps = {
  addAction: (type, payload) => _.addActionCreator(type, { ...payload }),
  cleanupAction: (type) => _.cleanupActionCreator(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
