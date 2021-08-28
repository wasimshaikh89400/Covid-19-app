import React, { Component } from 'react'
import './App.css'
import Swal from 'sweetalert2'
import Header from './Components/HeaderComp/Header'
import Country from './Components/CountryComp/Country'
import UserData from './Components/UserDataComp/UserData'
import OneState from './Components/OneStateComp/OneState'
import AllState from './Components/AllStateComp/AllState'
import TestSeries from './Components/TestSeriesComp/TestSeries'
import Footer from './Components/FooterComp/FooterComp'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      apiData: '',
      testData: '',
      stateWiseData: true
    }
  }

  componentDidMount() {
    fetch('https://api.covid19india.org/data.json').then(resp => resp.json()).
      then(data => {
        console.log(data);
        this.setState({
          apiData: data.statewise,
          renderChildren: false,
          testData: data.cases_time_series
        })
      })
    console.log(this.state.apiData)
  }

  changeState = () => {
    var userCheck = localStorage.getItem('userData')
    if (!userCheck) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please first fill your vaccination details! ',

      })
    }
    else {
      this.setState({
        stateWiseData: false
      })
    }
  }

  changeTest = () => {
    this.setState({
      stateWiseData: true
    })
  }
  render() {
    const { apiData, testData, stateWiseData } = this.state

    return (
      <div className="container-fluet App">
        <Header />

        {/* user Data component start */}
        <UserData />
        {/* user Data component end */}
        <div>
          {/* Add condition because componentDidMount method load the child before parent */}
          {this.state.apiData &&
            <Country stateData={apiData[0]} />}

          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-4">
              <button onClick={this.changeTest}>State Wise Cases</button>
              <button onClick={this.changeState}>Day Wise Cases</button>
            </div>
          </div>

          {/* display one state data according user selection  */}
          <div className="row">
            <div className="col-md-4">
              {apiData && stateWiseData &&
                <OneState stateData={apiData} />}
              {/* display one state data according user selection end! */}

            </div>
            {/* display one state data according user selection  */}
            <div className="col-md-8">
              {apiData && stateWiseData &&
                <AllState stateData={apiData} />}
              {/* display one state data according user selection end! */}
            </div>
          </div>
          {/* display date wise data */}
          {testData && !stateWiseData &&
            <TestSeries stateData={testData} />}
          {/* display date wise data end*/}

          {/* Footer start */}
          <Footer />
          {/* Footer end */}

        </div>
      </div>
    )
  }
}
