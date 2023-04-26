export type ServicesProps = {};

function Services(props: ServicesProps) {
  return (
    <div>
      <span className="text-start">Services:</span>

      <p className="text">
        I offer developer consultancy services with years of experience in Java,
        Golang, NodeJS, SQL, AWS, and Kubernetes. My team specializes in
        building scalable, reliable, and efficient software systems for
        businesses of all sizes. Whether you need help migrating to the cloud,
        building a new system, or optimizing your existing software stack, we
        can help. Our team of experts will work closely with you to understand
        your unique business needs and deliver customized solutions that exceed
        your expectations. We prioritize customer satisfaction and are committed
        to delivering the best possible service to our clients. Contact us today
        to take your software development to the next level!
      </p>

      {/* <div className="flex-container">
        <span className="flex-item skill">java</span>
        <span className="flex-item skill">nodejs</span>
        <span className="flex-item skill">golang</span>
        <span className="flex-item skill">react</span>
        <span className="flex-item skill">ionic</span>
        <span className="flex-item skill">sql</span>
        <span className="flex-item skill">postgresql</span>
        <span className="flex-item skill">sqlite</span>
        <span className="flex-item skill">aws</span>
        <span className="flex-item skill">kubernetes</span>
      </div> */}
    </div>
  );
}

export default Services;
