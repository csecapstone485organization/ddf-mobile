import React, { Component } from 'react'
import ResultsList from '../components/ResultsList'
import { fetchResults } from '../actions/actions'
import { connect } from 'react-redux'
import store from '../store/store'

type Props = {
  nextScreen: Function
}

const mapStateToProps = (state) => {
  console.log(store.getState())
  console.log("STATE")
  return {
    listData: state.results.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList)
