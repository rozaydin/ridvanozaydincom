export type ServicesProps = {};

const services = [
  {
    title: "Software Consultancy",
    description:
      "Strategic guidance backed by hands-on experience with Java, Go, Node.js, and SQL.",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions aligned with your unique business needs.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Design, migration, and optimization on AWS — scalable and cost-effective.",
  },
  {
    title: "Architecture & Scalability",
    description:
      "Build reliable, high-performance systems using Kubernetes and modern best practices.",
  },
  {
    title: "System Optimization",
    description:
      "Enhance performance, reliability, and maintainability of your existing stack.",
  },
  {
    title: "End-to-End Collaboration",
    description:
      "Close partnership and clear communication throughout the entire development lifecycle.",
  },
];

function Services(props: ServicesProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="group p-6 rounded-xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover hover:border-gray-200 transition-all duration-300"
          >
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-gray-600 leading-relaxed">
        I provide expert software development consultancy backed by years of
        hands-on experience with Java, Go, Node.js, SQL, AWS, and Kubernetes. I
        am specialized in designing scalable, reliable, and high-performance
        systems tailored to your business goals. Whether you're migrating to the
        cloud, building a new platform, or fine-tuning your existing
        infrastructure, I bring the technical expertise and strategic insight to
        make it happen. Your success is my priority — let's take your software
        to the next level.
      </p>
    </section>
  );
}

export default Services;
