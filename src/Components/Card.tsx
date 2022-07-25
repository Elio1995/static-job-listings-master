import React from "react";
import "../App.css";

function Card(props) {
  return (
    <>
      {props.jobList.map((job: []) => {
        return (
          <div className="card grid mx-20 bg-white">
            <div>
              <img src={job.logo}></img>
            </div>
            <div className="text-start text-black">
              <span>{job.company}</span>
              <span>{job.new === true ? "NEW!" : ""}</span>
              <span className="ml-5">
                {job.featured === true ? "FEATURED" : ""}
              </span>
              <p>{job.position}</p>
              <span>{job.postedAt}</span>
              <span>{job.contract}</span>
              <span>{job.location}</span>
            </div>
            <div className="text-start text-black">
              <span>{job.role}</span>
              <span>{job.level}</span>
              <span>
                {job.languages.map((language: []) => {
                  return <>{language}</>;
                })}
              </span>
              <span>
                {job.tools.map((language: []) => {
                  return <>{language}</>;
                })}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
