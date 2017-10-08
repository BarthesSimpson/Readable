import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import App from './'

//-------ACTIONS
import { getCategoriesFromServer } from '../../redux/middlewares/thunks/api'
import { setCategory } from '../../redux/actions/navigation'

const mapStateToProps = state => {
  return {
    visibleCategories: state.visibleCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategoriesFromServer()),
    resetView: () => dispatch(setCategory('all'))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
