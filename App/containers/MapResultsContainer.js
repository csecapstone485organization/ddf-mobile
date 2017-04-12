import { connect } from 'react-redux'
import { selectResult } from '../actions/actions'
import MapResults from '../components/MapResults'

const mapStateToProps = (state) => {
  return {
    mapData: state.results.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultSelection: (result) => {
      dispatch(selectResult(result))
    }
  }
}

const MapResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapResults)

export default MapResultsContainer
