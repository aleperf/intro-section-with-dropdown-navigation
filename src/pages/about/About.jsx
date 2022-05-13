import classes from './About.module.scss';
import mobileImage from '../../images/mobile-2.png';
import Attribution from '../../components/Attribution';
const About = () => {
  return (
    <div className={classes['about']}>
      <main>
        <img
          src={mobileImage}
          alt="team at work"
          className={classes['about__img']}
        />

        <div className={classes['about__section']}>
          <h2>Who we are</h2>
          <p>
            SNAP is a fictional company and our fictional mission is helping
            other companies organizing remote jobs at their best, using edge
            technologies. Our diverse fictional workforce is sparse around the
            world: more than 500 fictional developers, in 30 countries. We
            believe in our products so much that we really use them: SNAP is
            built on SNAP itself, dogfood has never been so tasty.
          </p>
        </div>

        <div className={classes['about__section']}>
          <h2>How it all began</h2>
          <p>
            In March 2020, Mary, Anthony, Sonequa e David were about to found a
            VR company called "DSK-VR" in London: they were in four different
            countries, but lockdowns all over the world clashed with their
            dreams. Our four young founders did not waver. They tried to use
            remote apps available at that time, but they soon realized they
            already had something better in their hands: the entire VR
            infrastructure of DSKVR could be used to build a working enviroment
            better than everything on the market, something so fast and agile
            they could make their ideas real in just... a SNAP.
          </p>
          <p>
            As you all know (if this story were real, clearly), SNAP became an
            instant success, making remote work easier and incredibly popular in
            many job areas.
          </p>
        </div>

        <div className={classes['about__section']}>
          <h2>Where we are heading now</h2>
          <p>
            The use of remote job apps has always been limited to office jobs:
            we want to make the future of work something completely new. Taste
            food cooked in your favorite restaurant on the other side of the
            Ocean, smell the air of Alpes,touch the consistency of that dress
            you are going to buy: all without moving from your home.
          </p>
          <p>Is it possible? We believe it will be... in a SNAP.</p>
        </div>
      </main>
      <footer className={classes['disclaimer']}>
        <div>
          <h3>Disclaimer</h3>
          <p>
            The About Page in this project you are watching now isn't included
            in the original Frontend Mentors Challenge, I added this page as a
            bonus and if it's not clear, SNAP, as described here, doesn't exist
            for real (intending "for real" as this instance of the multiverse)
            and all the people, companies and facts listed above are the figment
            of my imagination.
          </p>
        </div>
        <Attribution />
      </footer>
    </div>
  );
};

export default About;
