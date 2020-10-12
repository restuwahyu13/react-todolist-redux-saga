import React, { useEffect } from 'react'
import * as rb from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as _ from '../actions/userAction'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'

const ResultsTodo = ({ state, resultsAction, cleanUpAction }) => {
  useEffect(() => {
    cleanUpAction(_.CLEANUP_REQUEST)
    resultsAction(_.RESULTS_REQUEST)
  }, [])

  return (
    <>
      {state.loading && <h1>Loading...</h1>}
      <rb.Container className='mt-5'>
        <rb.Row className='flex-fill justify-content-center'>
          <rb.Col>
            {!state.loading && (
              <rb.Table striped bordered hover responsive='sm'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {state.users.length > 0 &&
                    state.users.map((v) => (
                      <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>{v.firstName}</td>
                        <td>{v.lastName}</td>
                        <td>
                          <DeleteTodo id={v.id} />
                          <EditTodo id={v.id} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </rb.Table>
            )}
          </rb.Col>
        </rb.Row>
      </rb.Container>
    </>
  )
}

ResultsTodo.propTypes = {
  state: PropTypes.object,
  resultsAction: PropTypes.func
}

const mapStateToProps = ({ user }) => ({
  state: user
})

const mapDispatchToProps = {
  resultsAction: (type) => _.resultsActionCreator(type),
  cleanUpAction: (type) => _.cleanupActionCreator(type)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsTodo)
