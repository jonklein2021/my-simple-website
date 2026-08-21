import "./Home.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="main">
        <div className="headings">
          <h1>
            <b>Jon Klein</b>
          </h1>
          <h2>Senior Software Engineer based in New York</h2>
        </div>
        <div className="sections">
          <img
            src="/budder_portrait.jpg"
            alt="Budder and me :)"
            className="profile"
          />
          <p>
            Hello, I'm Jon! I'm a Software Engineer at{" "}
            <a href="https://cimpress.com/">Cimpress</a>, the parent company of{" "}
            <a href="https://www.vistaprint.com/">VistaPrint</a>. I work on
            everything from full-stack development to DevOps to infrastructure.
            Previously, I worked at Amazon as an SDE in their ads organization.
            If you want to know more about my experience,{" "}
            <a href="/Jonathan_Klein_Resume.pdf" target="_blank">
              here's my resume
            </a>
            .
          </p>
          <p>
            I did my undergrad at Lehigh University, where I studied Computer
            Science and Math through{" "}
            <a href="https://ideas.lehigh.edu/">the IDEAS program</a>. During my
            time there, I explored a variety of computer systems research
            projects, spanning zero-knowledge proving systems, GPU programming,
            and concurrent data structures.
          </p>
          <p>
            I'm also an Master's student in Georgia Tech's{" "}
            <a href="https://omscs.gatech.edu/">OMSCS program</a>, where I'm
            diving deeper into high-performance computing, machine learning, and
            other topics.
          </p>
          <p>
            Outside of work, I enjoy{" "}
            <a href="https://en.wikipedia.org/wiki/Calisthenics">
              calisthenics
            </a>
            ,{" "}
            <a href="https://www.speedsolving.com/wiki/index.php/Speedcubing">
              speedcubing
            </a>
            , and <Link to="/gallery">much more</Link>!
          </p>
        </div>
      </div>
    </>
  );
}
