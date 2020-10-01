import React from "react";

const StatCount = ({ data }) => { 

    var pluralCorrection = 'deaths'

    if(data.local_deaths ===1){
        pluralCorrection = 'death'

    }


    if(data.local_deaths === 0){
        data.local_deaths = 'No'
    }


  return (
    <div className="container">
    
      <div className="row center dateText">Updated on {data.update_date_time}</div>

      <div className="row">
        <div className="col s12 m6 l4 ">
          <div className="card   cardStyle gradient-red-pink z-depth-2">
            <div className="card-content white-text">
              <span className="card-title">
                There are {data.local_total_cases} local cases reported{" "}
              </span>
              <div className="cardContent"> 
                including {data.local_new_cases} new cases{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l4 ">
          <div className="card cardStyle gradient-green-teal z-depth-2">
            <div className="card-content white-text">
              <span className="card-title">
                {" "}
                {data.local_total_number_of_individuals_in_hospitals} patients
                are currently being treated at hospitals 
              </span>
              <div className="cardContent"> 
                {data.local_recovered} patients have recovered by now 
              </div>
              <div className="cardContent"> 
                {data.global_recovered} patients have recovered by now 
              </div>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l4 ">
          <div className="card  cardStyle gradient-light-blue-cyan z-depth-2">
            <div className="card-content white-text">
              <span className="card-title">
                 {data.local_deaths} {pluralCorrection} reported until now
              </span>
              <div className="cardContent"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default StatCount;
