import { connect } from 'react-redux'
import { selectWorkspace } from '../actions/actions'
import WorkspaceSelectionList from '../components/WorkspaceSelectionList'

const listData = [
  {label:'Workspace 1'},
  {label:'Workspace 2'},
  {label:'Workspace 3'},
  {label:'Workspace 4'},
]

const mapStateToProps = (state) => {
  return {
    listData
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
