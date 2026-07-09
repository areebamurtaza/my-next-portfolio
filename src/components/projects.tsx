export default function Projects() {
    return (
        <section id="projects" className="px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-2xl font-semibold text-white-900">Projects</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900">E-commerce Site</h3>
                        <p className="mt-2 text-gray-600">A responsive online store built with React.</p>
                    </article>
                    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900">Blood Donation App</h3>
                        <p className="mt-2 text-gray-600">A simple app for patients and donors.</p>
                    </article>
                    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900">Real Estate System</h3>
                        <p className="mt-2 text-gray-600">A property management dashboard with API data.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}