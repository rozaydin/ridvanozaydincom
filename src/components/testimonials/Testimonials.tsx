export type TestimonialsProps = {};

const testimonials = [
  {
    title: "ipera.ai uses Kubernetes Infrastructure",
    source: "ipera.ai",
    href: "https://ipera.ai/ipera-uses-kubernetes-infrastructure/",
  },
  {
    title: "Scaling Sales Forecasting for a Footwear Giant",
    source: "toptal.com",
    href: "https://www.toptal.com/case-study/global-footwear-company-improves-sales-forecasting",
  },
];

function Testimonials(props: TestimonialsProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Customer Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <a
            key={i}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-6 rounded-xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300"
          >
            <span
              aria-hidden="true"
              className="absolute top-3 right-4 text-5xl leading-none text-primary-100 group-hover:text-primary-200 transition-colors duration-300 select-none font-serif"
            >
              &ldquo;
            </span>
            <p className="relative text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 pr-8">
              {t.title}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wide text-gray-500">
              <span>{t.source}</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
