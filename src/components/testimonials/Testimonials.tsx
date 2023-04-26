export type TestimonialsProps = {};

function Testimonials(props: TestimonialsProps) {
  return (
    <div>
      <span className="text-start">Customer Testimonials:</span>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://ipera.ai/ipera-uses-kubernetes-infrastructure/"
          >
            ipera.ai
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Testimonials;
