export default function Hero() {
  return (
    <section className="bg-gray-50 px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
            Developer Portfolio
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Hi, I’m Areeba Murtaza.
          </h2>
          <p className="mt-4 max-w-xl text-gray-600">
            I create simple, responsive web experiences using Next.js, TypeScript, and Tailwind CSS.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-gray-800"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 transition duration-300 hover:bg-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
          <p className="mt-3 text-gray-600">
            Full stack developer intern focused on clean UI, responsive layouts, and practical solutions.
          </p>
        </div>
      </div>
    </section>
  );
}