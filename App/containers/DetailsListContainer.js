import { connect } from 'react-redux'
import DetailsList from '../components/DetailsList'
import store from '../store/store'

const getResultFromId = (resultId, results) => {
  for (var i = 0; i < results.length; i++) {
    if (results[i].id === resultId) {
      return results[i];
    }
  }
  return "RESULT NOT FOUND"
}

const mapStateToProps = (state) => {
  return {
    selectedResultId: state.selectedResult,
    selectedResult: getResultFromId(state.selectedResult, state.results.results)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const DetailsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsList)

export default DetailsListContainer
