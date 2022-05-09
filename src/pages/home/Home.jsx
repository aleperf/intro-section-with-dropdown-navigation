import classes from './Home.module.scss';
import Hero from '../../components/Hero';
import audiophile from '../../images/client-audiophile.svg';
import databiz from '../../images/client-databiz.svg';
import maker from '../../images/client-maker.svg';
import meet from '../../images/client-meet.svg';

const Home = () => {
  const clients = [
    { name: 'databiz', logo: databiz },
    { name: 'audiophile', logo: audiophile },
    { name: 'meet', logo: meet },
    { name: 'maker', logo: maker },
  ];
  return (
    <div className={classes['home']}>
      <Hero />
      <main>
        <div className={classes['home__main-container']}>
          <h1>
            Make<span> remote work</span>
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className={classes['home__cta-btn']}>Learn more</button>
          <div className={classes['home__clients']}>
            {clients.map((client) => (
              <img src={client.logo} alt={client.name} key={client.name} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
