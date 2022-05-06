import classes from './Home.module.scss';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className={classes['home']}>
      <Hero />
      <main>
        <div className={classes["home__main-container"]}>
          <h1>Make Remote Work</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
