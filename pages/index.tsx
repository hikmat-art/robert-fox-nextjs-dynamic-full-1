export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600">Robert Fox Portfolio</h1>
      <p className="mt-4 text-lg text-gray-700">Full-Stack Web Designer & Developer</p>

      <section className="mt-8 max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600">
          I am a creative web designer with a focus on responsive, modern designs.
        </p>
      </section>

      <section className="mt-8 max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Business Website</li>
          <li>E-commerce Store</li>
          <li>Personal Portfolio</li>
        </ul>
      </section>

      <footer className="mt-10 text-gray-500">
        Contact: robert.fox@example.com
      </footer>
    </div>
  );
}
