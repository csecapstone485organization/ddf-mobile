import { connect } from 'react-redux'
import { selectResult, changeRegion } from '../actions/actions'
import MapResults from '../components/MapResults'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultSelection: (result) => {
      dispatch(selectResult(result))
    },
    onRegionChange: (region) => {
      dispatch(changeRegion(region))
    }
  }
}

const MapResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapResults)

export default MapResultsContainer
