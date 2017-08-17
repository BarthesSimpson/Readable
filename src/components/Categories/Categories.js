import React from 'react'
import PropTypes from 'react-proptypes'

//-------COMPONENTS
import Category from './Category'

//-------STYLING
import './Categories.css'

class Categories extends React.Component {
    generateCategory(c) {
        const catProps = {
            key: c.name,
            category: c,
            posts: this.props.posts[c.name],
            getPosts: this.props.getPosts,
            isLoading: this.props.postsLoading[c.name],
            single: this.props.single
        }
        return <Category {...catProps} />
    }
    render() {
        const cats = this.props.categories
        return (
            <div className="Categories">
                {cats.length && cats.map(c => this.generateCategory(c))}
            </div>
        )
    }
}

Categories.PropTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.array.isRequired,
    postsLoading: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

export default Categories
