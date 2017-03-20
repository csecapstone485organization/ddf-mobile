import { connect } from 'react-redux'
import { selectQuery } from '../actions/actions'
import QuerySelectionList from '../components/QuerySelectionList'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onQuerySelection: (query) => {
      dispatch(selectQuery(query))
    }
  }
}

const QuerySelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuerySelectionList)

export default QuerySelectionContainer
