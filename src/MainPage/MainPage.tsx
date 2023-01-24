import { useEffect, useState } from "react";
import "../App.css";
// import { copy } from "../utils/copy";

export const MainPage = () => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  useEffect(() => {
    setCoverLetter(`Dear ${company}'s talent acquisition team,

Your ${jobTitle} role caught my attention! My current day to day work is building functional React/Typescript front-end web apps with a strong focus on app usability. From my recent experience at Apple, I’ve led the front end development as well as collaborated on some of the backend work for an internal battery anomaly detection product. With this tool, the data scientists and battery experts team is able to catch anomalies ahead of time and can continue improving battery development and performance.

To contribute back to the developers community, I gave a tech talk on Inclusive Design UX/UI best practices which encourages devs to see beyond compliance and move towards empathetic engineering. I'm curious if you'd be interested in bringing someone with my skills to your team? I'm free next week Wednesday or Friday afternoon to chat. Or let me know whenever you would be available.

Best regards,
Dieu Huynh
408-569-2453`);
  }, [company, jobTitle]);
  return (
    <div>
      <h1>Cover Letter Template</h1>
      <h2>On CodeSandbox!</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          gap: "2em",
        }}
      >
        <div>
          <label htmlFor="company">Company</label>
          <input
            name="company"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            name="jobTitle"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            id={"coverletter"}
            style={{ width: "80%", height: "25em" }}
            value={coverLetter}
          ></textarea>
        </div>
        <div>
          <button
            style={{ width: "30%" }}
            onClick={() => {
              setCoverLetter(``);
            }}
          >
            Reset
          </button>
          <button
            style={{ width: "30%" }}
            onClick={() => {
              navigator.clipboard.writeText(coverLetter).then(
                () => {
                  console.log("success");
                },
                (err) => {
                  setCoverLetter(`failed, ${err}`);
                }
              );
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};
