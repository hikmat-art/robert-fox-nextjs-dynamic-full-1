import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <header>
        <h1>Robert Fox Portfolio</h1>
        <p>Full-Stack Web Designer & Developer</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a creative web designer with a focus on responsive, modern designs.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 – Business Website</li>
          <li>Project 2 – E-commerce Store</li>
          <li>Project 3 – Personal Portfolio</li>
        </ul>
      </section>
      <footer>
        <p>Contact: robert.fox@example.com</p>
      </footer>
    </Layout>
  );
}
