import { connect } from 'react-redux'
import DetailsList from '../components/DetailsList'

const mapStateToProps = (state) => {
  return {
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
