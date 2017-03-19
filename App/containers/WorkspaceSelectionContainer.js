import { connect } from 'react-redux'
import { selectWorkspace } from '../actions/actions'
import WorkspaceSelectionList from '../components/WorkspaceSelectionList'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWorkspaceSelection: (workspace) => {
      dispatch(selectWorkspace(workspace))
    }
  }
}

const WorkspaceSelectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkspaceSelectionList)

export default WorkspaceSelectionContainer
