export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <h1 className="text-lg font-semibold text-gray-900">My Portfolio</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <a href="#about" className="hover:text-black transition duration-300">
            About
          </a>
          <a href="#skills" className="hover:text-black transition duration-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-black transition duration-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-black transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}