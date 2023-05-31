import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg- 
                    no-repeat bg-center z-50'>
                    <Navbar />
                    <Hero />
                </div>
                <div>
                    <About />
                    <StarsCanvas />
                </div>
                <div>
                    <Experience />
                    <StarsCanvas />
                </div>
                <div>
                    <Tech />
                    <StarsCanvas />
                </div>
                <div>
                    <Works />
                    <StarsCanvas />
                </div>
                <div>

                </div>
                
                <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;