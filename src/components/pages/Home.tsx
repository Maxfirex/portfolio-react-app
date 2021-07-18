import About from '../sections/about/About';
import Contact from '../sections/contact/Contact';
import Hero from '../sections/home/Hero';

import './Home.scss';

const Home = () => {
    return (
        <div className="container">
            <Hero />
            <About />
            <Contact />
        </div>
    )
}

export default Home;