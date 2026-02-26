export type TestimonialsProps = {};

function Testimonials(props: TestimonialsProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Customer Testimonials
      </h2>
      <ul className="space-y-2">
        <li>
          <a
            className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ipera.ai/ipera-uses-kubernetes-infrastructure/"
          >
            ipera.ai
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Testimonials;
