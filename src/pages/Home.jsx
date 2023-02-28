
import styles from '../style';
import { Navbar, Hero, Stats, Business, Team, Billing, CTA, Footer } from "../components";

const Home = () =>{

  console.log(window.location.host);
  return (
  
    <div className="bg-black w-full overflow-hidden">
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Team />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
  
}

export default Home;