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
    }
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/new" component={NewPostContainer} />
                    <Route
                        path="/:category/:post"
                        component={SinglePostContainer}
                    />
                    <Route path="/:category" component={SingleCategory} />
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}

App.propTypes = {
    getCategories: PropTypes.func.isRequired
}

export default App
