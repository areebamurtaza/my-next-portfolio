export default function Contact() {
    return (
        <section id="contact" className="flex min-h-[70vh] items-center justify-center px-4 py-16">
            <div className="w-full max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-center text-gray-900">Contact</h2>
                <form className="mt-6 space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                    />
                    <textarea
                        rows={5}
                        placeholder="Message"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-black px-4 py-3 text-white transition duration-300 hover:bg-gray-800"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}