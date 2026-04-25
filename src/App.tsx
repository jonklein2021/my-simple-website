import './App.css'

export default function App() {
  const omscsLink = "https://omscs.gatech.edu/";

  return (
    <>
      <div className="main">
        <div className="left">
          <img src="/budder.jpg" alt="Budder and me :)" />
        </div>
        <div className="right">
          <h1>Jon Klein</h1>
          <p>
            I'm a software engineer with experience across full-stack development,
            high-performance computing, distributed systems, and more. I graduated
            from Lehigh University in May 2025 with my Bachelors in Computer Science
            and Math began working full-time at Amazon shortly after that, where I
            worked in their ads organization as an SDE until the end of 2025. Now, I
            work at Cimpress as a software engineer, where I maintain core components
            of VistaPrint's manufacturing software. I'm also an incoming
            Master's student in Georgia Tech's <a href={omscsLink}>OMSCS program</a>,
            where I will study computer systems and high-performance computing.
          </p>
        </div>
      </div>
    </>
  )
}
