import './Hero.scss';

const Hero = () => {

    return (
        <section id="home" className="hero-container">
            <video controls autoPlay loop muted>
                <source src="/media/videos/TobyOwning.mp4" type="video/mp4" />
            </video>
        </section>
    )
}

export default Hero;