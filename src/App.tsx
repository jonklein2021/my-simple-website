import './App.css'

export default function App() {
  return (
    <>
      <div className="main">
        <h1>Jon Klein</h1>
        <div className='sections'>
          <img src="/budder_portrait.jpg" alt="Budder and me :)" className='profile' />
          <p>
            Hello, I'm Jon! I'm a Senior Software Engineer at <a href="https://cimpress.com/">Cimpress</a>, the parent company of <a href="https://www.vistaprint.com/">VistaPrint</a>.
            I work on everything from full-stack development to DevOps to infrastructure. Previously, I worked at Amazon as an SDE in their ads organization.
          </p>
          <p>
            I did my undergrad at Lehigh University, where I studied Computer Science and Math through <a href="https://ideas.lehigh.edu/">the IDEAS program</a>.
            During my time there, I explored a variety of computer systems research projects, spanning GPU programming, concurrent data structures, and
            numerical methods.
          </p>
          <p>
            I'm also an Master's student in Georgia Tech's <a href="https://omscs.gatech.edu/">OMSCS program</a>, where I plan to dive deeper into computer
            systems, high-performance computing, and machine learning.
          </p>
          <p>
            Outside of work, I enjoy <a href="https://en.wikipedia.org/wiki/Calisthenics">calisthenics</a>, <a href="https://www.speedsolving.com/wiki/index.php/Speedcubing">speedcubing</a>,
            and hanging out with my 3 cats :)
          </p>
        </div>
      </div>
    </>
  )
}
