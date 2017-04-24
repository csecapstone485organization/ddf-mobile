import { connect } from 'react-redux'
import { selectResult } from '../actions/actions'
import MapResults from '../components/MapResults'
import { cql_TEST_RESULTS } from '../constants/MockData.js'

const getResultForId = (id) => {
  let selection = {}
  for(result of cql_TEST_RESULTS.results) {
    console.log(result)
    if (result.metacard.properties.title === id) {
      selection = result
    }
  }
  console.log(selection)
  return selection
}

const mapStateToProps = (state) => {
  return {
    mapData: state.results.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultSelection: (resultId) => {
      console.log(resultId)
      let result = getResultForId(resultId)
      dispatch(selectResult(result))
    }
  }
}

const MapResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapResults)

export default MapResultsContainer
