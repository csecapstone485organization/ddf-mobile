import React, { Component } from 'react'
import ResultsList from '../components/ResultsList'
import { selectResult } from '../actions/actions'
import { connect } from 'react-redux'
import store from '../store/store'

type Props = {
  nextScreen: Function
}

const mapStateToProps = (state) => {
  return {
    listData: state.results.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultSelection: (result) => {
      dispatch(selectResult(result))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList)
