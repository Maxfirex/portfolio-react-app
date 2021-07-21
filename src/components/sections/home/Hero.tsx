import Video from '../../helpers/Video';
import './Hero.scss';

const Hero = () => {

    return (
        <section>
            <div className="hero-container-fixed">
                <Video src="/media/videos/Hologram_Planet_by_nuva.webm" type="video/webm" poster="/media/images/thumbnail.png" />
            </div>
            <div id="home" className="hero-container">
                <div className="hero">
                    <p className="hero-welcome">Welcome to my website!</p>
                </div>
                <div className="hero transparent"></div>
            </div>
        </section>
    )
}

export default Hero;