import './assets/css/main.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() 
{
    return (
    <>
        <div className='App'>
            
            <Navbar />

            <Projects />

            <Footer />

        </div>
    </>
    )
}

export default App
