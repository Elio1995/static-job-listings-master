import React from "react";
import { Job } from "../App";
import "../App.css";

function Card(props: any) {
  return (
    <div className="jobList my-14">
      {props.jobList.map((job: Job) => {
        const jobId = job.id;
        return (
          <div key={jobId} className="card grid p-10 my-7 bg-white">
            <div className="logo">
              <img src={job.logo}></img>
            </div>
            <div className="jobTitle text-start text-black">
              <span
                style={{ color: "hsl(180, 29%, 50%)" }}
                className="font-black mr-3"
              >
                {job.company}
              </span>

              {job.new === true ? (
                <span
                  style={{
                    backgroundColor: "hsl(180, 29%, 50%)",
                  }}
                  className="px-2 py-1 rounded-2xl text-white font-black text-xs"
                >
                  NEW!
                </span>
              ) : (
                <span></span>
              )}
              {job.featured === true ? (
                <span className="bg-black rounded-2xl px-2 py-1 ml-2 text-white font-black text-xs">
                  FEATURED
                </span>
              ) : (
                <span></span>
              )}
              <p className="mt-2 text-lg font-black">{job.position}</p>
              <div className="mt-2 text-xs font-semibold text-slate-400">
                <span>{job.postedAt}</span>
                <span className="mx-4">•</span>
                <span>{job.contract}</span>
                <span className="mx-4">•</span>
                <span>{job.location}</span>
              </div>
              <hr className="ruler"></hr>
            </div>

            <div className="thirdGrid text-end mt-8 text-black">
              <span className="thirdGridSpan">
                <span
                  style={{
                    backgroundColor: "hsl(180, 52%, 96%)",
                    color: "hsl(180, 29%, 50%)",
                  }}
                  className="px-2 py-1 mx-1 text-white font-black text-xs"
                >
                  {job.role}
                </span>
              </span>

              <span className="thirdGridSpan">
                <span
                  style={{
                    backgroundColor: "hsl(180, 52%, 96%)",
                    color: "hsl(180, 29%, 50%)",
                  }}
                  className="px-2 py-1 mx-1 text-white font-black text-xs"
                >
                  {job.level}
                </span>
              </span>

              {job.languages.map((language) => {
                return (
                  <span className="thirdGridSpan">
                    <span
                      style={{
                        backgroundColor: "hsl(180, 52%, 96%)",
                        color: "hsl(180, 29%, 50%)",
                      }}
                      className="px-2 py-1 mx-1 text-white font-black text-xs"
                    >
                      {language}
                    </span>
                  </span>
                );
              })}

              {job.tools.map((tool) => {
                return (
                  <span className="thirdGridSpan">
                    <span
                      style={{
                        backgroundColor: "hsl(180, 52%, 96%)",
                        color: "hsl(180, 29%, 50%)",
                      }}
                      className="px-2 py-1 mx-1 text-white font-black text-xs"
                    >
                      {tool}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
