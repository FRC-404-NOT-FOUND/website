import { MdInfo, MdChevronRight } from 'react-icons/md/index';
import Feature from 'components/Feature';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

const StaticPage = () => {
  return (
    <div>
      <Hero />
      <div className="container flex flex-col gap-10">
        <Feature icon={MdInfo} title="About Us">
            <a href="/about" className="flex items-center">
              Learn more about our team and school
              <MdChevronRight size={16} className="p-0 react-icon" />
            </a>
        </Feature>
        <Feature icon={MdInfo} title="Our History">
          <a href="/about/history" className="flex items-center">
            How it all started, and where it&apos;s going.
            <MdChevronRight size={16} className="p-0 react-icon" />
          </a>
        </Feature>
        <Feature icon={MdInfo} title="Meet The Team">
          <a href="/about/team" className="flex items-center">
            See who&apos;s behind the magic.
            <MdChevronRight size={16} className="p-0 react-icon" />
          </a>
        </Feature>
        <Feature icon={MdInfo} title="Meet our Safety Mascot">
          <a href="/about/safety-dale" className="flex items-center">
            Learn about Safety Dale and how we promote safety
            <MdChevronRight size={16} className="p-0 react-icon" />
          </a>
        </Feature>
        <Feature icon={MdInfo} title="School">
          <a href="/about/school" className="flex items-center">
            Check out Appomattox Regional Governor&apos;s School
            <MdChevronRight size={16} className="p-0 react-icon" />
          </a>
        </Feature>
        <form action="/newsletter-signup" className="p-6 w-full flex flex-col gap-5 items-center justify-start">
          <label className="text-3xl font-bold text-gradient" htmlFor="newsletter">Sign up for our Newsletter</label>
          <div className="flex flex-row gap-3 w-full items-center justify-center">
            <input className="px-2 py-2 rounded-lg w-1/2 focus:outline-none text-black focus:ring ring-offset-1 ring-red-700 dark:ring-violet-500" name="newsletter" placeholder="Email" />
            <input className="button" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default StaticPage;