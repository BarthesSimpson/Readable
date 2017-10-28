import React from 'react'
import PropTypes from 'prop-types'

//------- COMPONENTS
import Home from '../Home'
import NewPostContainer from '../NewPost/NewPostContainer'
import SingleCategory from '../SingleCategory'
import SinglePostContainer from '../SinglePost/SinglePostContainer'
import { Switch, Route } from 'react-router-dom'

//------- STYLING
import './App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.getCategories()
    if (this.props.location.pathname === '/') this.props.resetView()
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/new" component={NewPostContainer} />
          <Route exact path="/" component={Home} />
          <Route path="/:category/:post" component={SinglePostContainer} />
          <Route path="/:category" component={SingleCategory} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  getCategories: PropTypes.func.isRequired
}

export default App
