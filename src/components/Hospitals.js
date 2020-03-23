import React from "react";

const Hospitals = ({ data }) => {
    
  const hospitalList = data.length ? (
    data.map(hospital => {  
      return (
        
      

        <div className="col s12 m6 l4 " key={hospital.id}>
          <div className="card small cardStyle grey lighten-4 z-depth-2">
            <div className="card-content black-text">
              <span className="card-title">
                <h6> {hospital.hospital.name_si}</h6>
                <h6> {hospital.hospital.name_ta}</h6>
                <h6> {hospital.hospital.name}</h6>
              </span> 
              <div className="cardContent">
                cumulative local : {hospital.cumulative_local} <br/> 
                cumulative foreign :{hospital.cumulative_foreign}  <br/>
                treatment local : {hospital.treatment_local}  <br/>
                treatment foreign : {hospital.treatment_foreign}<br/>
                cumulative total : {hospital.cumulative_total}  <br/>
                treatment total : {hospital.treatment_total}   <br/>
              </div>
            </div>
          </div>
        </div>
      );
  
    })
  ) : (
    <p className="center">Fetching data ...</p>
  );

  return (
    <div className="container">
        <div className="center hospitalTitle">
          Hospital status
        </div> 
      <div className="row">{hospitalList}</div>
    </div>
  );
};

export default Hospitals;
