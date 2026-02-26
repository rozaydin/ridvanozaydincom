function Experience() {
  const totalYears = new Date().getFullYear() - 2007;

  return (
    <section className="rounded-xl border border-gray-100 bg-white shadow-card p-6 mb-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-gray-600">
            Developing since{" "}
            <span className="text-primary-600 font-semibold text-xl">2007</span>
          </p>
          <p className="text-gray-600">
            <span className="text-primary-600 font-semibold text-xl">
              {totalYears}
            </span>{" "}
            years of experience
          </p>
        </div>
        <img
          className="w-20 h-20 opacity-80"
          src="/assets/hacker.png"
          alt="Developer"
        />
      </div>
    </section>
  );
}

export default Experience;
