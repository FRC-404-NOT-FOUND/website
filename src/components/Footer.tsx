const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer>
    <section className="py-8">
      <div className="container text-center">
        <p>&copy;{currentYear} - The ARGS Robotics Team.</p>
        <p>512 W. Washington Street Petersburg VA, 23803</p>
        <p>The ARGS ROBOTICS TEAM is a 501(c)(3) non-profit organization.</p>
        <p>FIRST® is a registered trademark of United States Foundation for Inspiration and Recognition of Science and Technology.</p>
      </div>
    </section>
  </footer>
);

export default Footer;
