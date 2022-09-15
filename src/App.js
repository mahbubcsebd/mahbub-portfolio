import { About, Contact, Footer, Header, Hero, Portfolio, ScrollTop, Skill } from './components';
import LoveToDo from './components/LoveToDo';

function App() {
    return (
        <div className="App bg-white dark:bg-gray-900 transition duration-1000">
            <Header />
            <Hero />
            <About />
            <Skill />
            <Portfolio />
            <LoveToDo />
            <Contact />
            <ScrollTop />
            <Footer />
        </div>
    );
}

export default App;
