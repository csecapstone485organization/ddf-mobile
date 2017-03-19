import React from 'react'
import LoginPrompt from '../components/LoginPrompt'
import { connect } from 'react-redux'

type Props = {
  nextScreen: Function
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPrompt)
