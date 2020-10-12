import React, { useEffect, useRef } from 'react'
import * as rb from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as _ from '../actions/userAction'

const UpdateTodo = ({ match, history, state, updateAction, cleanupAction }) => {
  useEffect(() => {
    onMessage()
  }, [state.message])

  const firstName = useRef(null)
  const lastName = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()

    updateAction(_.UPDATE_REQUEST, {
      id: match.params.id,
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
                <rb.Card.Title>Perbarui Data</rb.Card.Title>
              </rb.Card.Header>
              <rb.Card.Body>
                <rb.Form onSubmit={onSubmit}>
                  <rb.Form.Group>
                    <rb.FormLabel htmlFor='firstName'>Firstname</rb.FormLabel>
                    <rb.Form.Control
                      type='text'
                      ref={firstName}
                      defaultValue={state.firstName}
                      placeholder='enter firstname'
                    />
                  </rb.Form.Group>
                  <rb.Form.Group>
                    <rb.FormLabel htmlFor='lastName'>Lastname</rb.FormLabel>
                    <rb.Form.Control
                      type='text'
                      ref={lastName}
                      defaultValue={state.lastName}
                      placeholder='enter lastname'
                    />
                  </rb.Form.Group>
                  <rb.Form.Group>
                    <rb.Button type='submit' className='btn btn-success btn-block'>
                      Perbarui Data
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

UpdateTodo.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  state: PropTypes.object,
  updateAction: PropTypes.func,
  cleanupAction: PropTypes.func
}

const mapStateToProps = ({ user }) => ({
  state: user
})

const mapDispatchToProps = {
  updateAction: (type, payload) => _.updateActionCreator(type, { ...payload }),
  cleanupAction: (type) => _.cleanupActionCreator(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)
