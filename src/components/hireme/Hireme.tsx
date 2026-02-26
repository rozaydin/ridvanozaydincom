function Hireme() {
  return (
    <section className="grid grid-cols-2 gap-6 max-w-md mx-auto">
      <div className="flex items-center justify-center h-12">
        <img src="/assets/hireme.png" className="h-12 w-12" alt="Email" />
      </div>
      <div className="flex items-center justify-center h-12">
        <img src="/assets/toptal.avif" className="h-6 object-contain" alt="Toptal" />
      </div>
      <a
        href="mailto:ridvan.ozaydin@ridvanozaydin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-200 no-underline"
      >
        Hire me — Send an email
      </a>
      <a
        href="https://talent.toptal.com/resume/developers/ridvan-ozaydin"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 no-underline"
      >
        Hire me through Toptal
      </a>
    </section>
  );
}

export default Hireme;
