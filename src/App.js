import {Header, Hero, About, Skill, Portfolio, Contact, Footer} from "./components";

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-gray-900 transition duration-1000">
      <Header/>
      <Hero/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
        {/* <div className="flex items-center min-h-screen justify-center">
            <h1 className="text-blue-600 dark:text-white font-bold text-7xl">React + Tailwind Boilerplate</h1>
        </div> */}
    </div>
  );
}

export default App;
