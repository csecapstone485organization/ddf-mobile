import React, { Component } from 'react'
import EditQueryForm from '../components/EditQueryForm'
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

export default connect(mapStateToProps, mapDispatchToProps)(EditQueryForm)
