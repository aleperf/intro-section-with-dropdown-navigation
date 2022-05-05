import classes from './Home.module.scss';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className={classes['home']}>
      <Hero />
      <main>
        <h1>Here Goes the Main Content</h1>
      </main>
    </div>
  );
};

export default Home;
