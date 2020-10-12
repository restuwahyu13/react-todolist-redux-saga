import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as rb from 'react-bootstrap'
import * as _ from '../actions/userAction'

const EditTodo = ({ id, editAction, history }) => {
  const onEdit = () => {
    editAction(_.EDIT_REQUEST, { id })
    history.push(`/update/${id}`)
  }

  return (
    <>
      <rb.Button type='button' className='btn btn-success mx-1' onClick={onEdit}>
        Edit
      </rb.Button>
    </>
  )
}

EditTodo.propTypes = {
  id: PropTypes.string,
  editAction: PropTypes.func,
  history: PropTypes.object
}

const mapDispatchToProps = {
  editAction: (type, payload) => _.editActionCreator(type, { ...payload })
}

export default connect(null, mapDispatchToProps)(withRouter(EditTodo))
