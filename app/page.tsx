export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <img
            src="/profile.jpg"
            alt="Morris Ayo Oliha"
            className="w-56 h-56 rounded-full object-cover mb-6 border-4 border-gray-200"
          />

          <h1 className="text-5xl font-bold text-gray-900">
            Morris Ayo Oliha
          </h1>

          <p className="mt-4 text-xl text-gray-600">
          Software Development Student | Aspiring Full-Stack Developer | Software Testing Enthusiast
          </p>

          <p className="mt-6 max-w-2xl text-gray-700">
            Passionate about full-stack web development, software testing,
            and building practical applications that solve real-world problems.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/olihamorris"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/morris-oliha-050600209"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-lg"
            >
              LinkedIn
            </a>

            <a
  href="/Morris_Ayo_Oliha_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
>
  Download Resume
</a>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Programming Languages
              </h3>
              <ul className="space-y-2">
                <li>JavaScript</li>
                <li>C#</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">
                Backend & Tools
              </h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">
                Handcrafted Haven
              </h3>
              <p className="text-gray-700">
                Full-stack artisan marketplace developed with Next.js and React.
                Features product listings, reviews, search functionality, and a
                responsive user experience.
              </p>
            </div>

            <div className="border rounded-lg p-6 shadow-sm">
  <h3 className="text-2xl font-semibold mb-3">
    Nigerian Proverbs API
  </h3>

  <p className="text-gray-700 mb-4">
    RESTful API built with Node.js and Express for storing and serving
    Nigerian proverbs and cultural content. Deployed on Render and
    designed to demonstrate backend development, routing, and API design.
  </p>

  <div className="flex gap-3">
    <a
      href="https://nigerian-proverbs-api.onrender.com"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      Live API
    </a>

    <a
      href="https://github.com/olihamorris/nigerian-proverbs-api"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 border rounded-lg"
    >
      GitHub
    </a>
  </div>
</div>

  <div className="border rounded-lg p-6 shadow-sm">
  <img
    src="/fashion-lookbook.png"
    alt="Pan-African Fashion Lookbook"
    className="w-full rounded-lg mb-4 border"
  />

  <h3 className="text-2xl font-semibold mb-3">
    Pan-African Fashion Lookbook
  </h3>

  <p className="text-gray-700 mb-4">
    Responsive web application showcasing African fashion
    collections and designers using HTML, CSS, and JavaScript.
  </p>

  <div className="flex gap-3">
    <a
      href="https://olihamorris.github.io/pan-african-fashion-lookbook/"
      target="_blank"
      className="px-4 py-2 bg-black text-white rounded-lg"
    >
      Live Demo
    </a>

    <a
      href="https://github.com/olihamorris/pan-african-fashion-lookbook"
      target="_blank"
      className="px-4 py-2 border rounded-lg"
    >
      GitHub
    </a>
  </div>
</div>

  <div className="border rounded-lg p-6 shadow-sm">
  <h3 className="text-2xl font-semibold mb-3">
    Next.js Dashboard
  </h3>

  <p className="text-gray-700 mb-4">
  Interactive dashboard application built with Next.js App Router,
  TypeScript, Tailwind CSS, layouts, navigation, authentication
  concepts, and data-driven user interfaces. Developed while
  learning modern React and Next.js best practices.
</p>

  <a
    href="https://github.com/olihamorris/wdd430-nextjs-dashboard"
    target="_blank"
    className="px-4 py-2 border rounded-lg"
  >
    GitHub
  </a>
</div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Education
    </h2>

    <div className="bg-white p-8 rounded-lg shadow">
      <h3 className="text-2xl font-semibold">
        Bachelor of Science in Software Development
      </h3>

      <p className="mt-2 text-gray-600">
        Brigham Young University–Idaho
      </p>

      <p className="mt-2 text-gray-700">
        Expected Graduation: 2027
      </p>

      <h4 className="mt-6 text-xl font-semibold">
        Relevant Coursework
      </h4>

      <ul className="mt-4 space-y-2">
        <li>Web Frontend Development</li>
        <li>Web Backend Development</li>
        <li>Software Testing</li>
        <li>Database Fundamentals</li>
        <li>Data Structures and Algorithms</li>
      </ul>
    </div>
  </div>
      </section>
      <section className="py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-8">
      Contact
    </h2>

    <p className="text-gray-700 mb-4">
  Feel free to connect with me through GitHub, LinkedIn, or email.
</p>

<a
  href="mailto:olihamorris2000@gmail.com"
  className="text-blue-600 hover:underline font-medium block mb-8"
>
  olihamorris2000@gmail.com
</a>

    <div className="flex justify-center gap-4">
      <a
        href="https://github.com/olihamorris"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-lg"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/morris-oliha-050600209"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border rounded-lg"
      >
        LinkedIn
            </a>
            <a
  href="/Morris_Ayo_Oliha_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-blue-600 text-white rounded-lg"
>
  Download Resume
</a>
    </div>
  </div>
      </section>
      <footer className="border-t py-6 text-center text-gray-600">
  © 2026 Morris Ayo Oliha • Built with Next.js and Tailwind CSS
</footer>
    </main>
  );
}