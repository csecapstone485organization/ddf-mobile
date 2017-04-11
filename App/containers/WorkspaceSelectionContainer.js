import { connect } from 'react-redux'
import { selectWorkspace } from '../actions/actions'
import WorkspaceSelectionList from '../components/WorkspaceSelectionList'

const listData = [
  {title:'Workspace 1', modified:1490216837867, queries:4},
  {title:'Workspace 2', modified:1490216827866, queries:4},
  {title:'Workspace 3', modified:1490216817865, queries:4},
  {title:'Workspace 4', modified:1490216807864, queries:40000},
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
