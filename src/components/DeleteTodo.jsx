import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as rb from 'react-bootstrap'
import * as _ from '../actions/userAction'

const DeleteTodo = ({ id, history, state, deleteAction, cleanupAction }) => {
  useEffect(() => {
    onMessage()
  }, [state.message])

  const onDelete = () => deleteAction(_.DELETE_REQUEST, { id })

  const onMessage = () => {
    if (state.message) {
      window.alert(state.message)
      setTimeout(() => window.location.reload(), 1000)
    }
  }

  return (
    <>
      <rb.Button type='button' className='btn btn-danger mx-1' onClick={onDelete}>
        Delete
      </rb.Button>
    </>
  )
}

DeleteTodo.propTypes = {
  id: PropTypes.string,
  history: PropTypes.object,
  state: PropTypes.object,
  deleteAction: PropTypes.func,
  cleanupAction: PropTypes.func
}

const mapStateToProps = ({ user }) => ({
  state: user
})

const mapDispatchToProps = {
  deleteAction: (type, payload) => _.deleteActionCreator(type, { ...payload }),
  cleanupAction: (type) => _.cleanupActionCreator(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DeleteTodo))
