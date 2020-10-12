import React from 'react'
import * as rb from 'react-bootstrap'
import { Route, Switch, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const AddTodo = loadable(() => import('./components/AddTodo'))
const ResultsTodo = loadable(() => import('./components/ResultsTodo'))
const UpdateTodo = loadable(() => import('./components/UpdateTodo'))

const Navbar = () => (
  <rb.Navbar expand='lg' bg='dark'>
    <rb.Navbar.Brand href='/'>
      <h4 className='text-light'> Redux Saga </h4>
    </rb.Navbar.Brand>
    <rb.Nav>
      <rb.Nav.Item>
        <Link to='/add' className='nav-link text-light'>
          Tambah Data
        </Link>
      </rb.Nav.Item>
    </rb.Nav>
  </rb.Navbar>
)

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={ResultsTodo} />
      <Route path='/add' component={AddTodo} />
      <Route path='/update/:id' component={UpdateTodo} />
      <Route path='*' render={() => <h1>404 not found</h1>} />
    </Switch>
  </>
)

export default App
