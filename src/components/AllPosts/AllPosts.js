import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

//------- COMPONENTS
import Categories from '../Categories'

//------- HELPERS
import { getPostsFromServer } from '../../redux/middlewares/thunks/api'

const mapStateToProps = state => {
    const categories = ['all']
    const comments = state.comments
    const posts = {
        all: Object.keys(state.categories).reduce((l, r) => {
            return l.concat(state.categories[r])
        }, [])
    }
    return {
        categories,
        comments,
        posts,
        sortedBy: state.sorting.posts,
        postsLoading: state.render.postsAreLoading,
        single: true
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: category => dispatch(getPostsFromServer())
    }
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Categories)
)
