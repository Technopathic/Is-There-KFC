import { useState } from 'react'

const Home = () => {
  const [language, setLanguage] = useState("fi")

  return (
    <div className="container">
      <header>
        <div></div>
        <div className="languages">
          <span className={language === "fi" ? "active" : ""} onClick={() => setLanguage("fi")}>FI</span>
          <span className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</span>
        </div>
      </header>
      <main>
        <div className="question">{language === "fi" ? "kfc suomessa?" : "Is there KFC in Finland?"}</div>
        <div className="answer">{language === "fi" ? "ei (vielä)" : "Not Yet"}</div>
      </main>
      <footer>Made with 🍗 by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/NowNanoTV" className="social">NowNano</a></footer>
    </div>
  )
}

export default Home