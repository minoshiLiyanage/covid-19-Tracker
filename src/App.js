import React, {Component} from 'react'; 
import axios from 'axios';
import  './styles.css'

//components 
import Hospitals from './components/Hospitals';
import StatCount from './components/StatCount';



class App extends Component {
  
 state = {
  hospitals:[ ],
  cases: [] 
 }

 //send request and pass the data into state
 componentDidMount(){
  
  axios.get('https://hpb.health.gov.lk/api/get-current-statistical')
  .then(res => { 
    
    this.setState({
      hospitals: res.data.data.hospital_data ,
      cases: {
        "update_date_time": res.data.data.update_date_time,
        "local_new_cases": res.data.data.local_new_cases,
        "local_total_cases": res.data.data.local_total_cases,
        "local_total_number_of_individuals_in_hospitals": res.data.data.local_total_number_of_individuals_in_hospitals,
        "local_deaths": res.data.data.local_deaths,
        "local_new_deaths": res.data.data.local_new_deaths,
        "local_recovered": res.data.data.local_recovered,
        "global_new_cases": res.data.data.global_new_cases,
        "global_total_cases": res.data.data.global_total_cases,
        "global_deaths": res.data.data.global_deaths,
        "global_new_deaths": res.data.data.global_new_deaths,
        "global_recovered": res.data.data.global_recovered,
      }
    })
  })

 }

  render(){


  return (
    <div className="App">

        <div className="mainTitle center"> COVID-19 Situation Report </div>  



      <StatCount data={this.state.cases}/>
      <Hospitals data={this.state.hospitals}/>
    </div>
  );

  }
}

export default App;
