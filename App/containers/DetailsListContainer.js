import { connect } from 'react-redux'
import DetailsList from '../components/DetailsList'
import store from '../store/store'

const mapStateToProps = (state) => {
  return {
    selectedResult: state.selectedResult
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
