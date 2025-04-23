export type ServicesProps = {};

function Services(props: ServicesProps) {
  return (
    <div>
      <span className="text-start">Services:</span>

      <div className="container mt-4 mb-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Software Consultancy</h5>
                <p className="text-justify">
                  Strategic guidance backed by hands-on experience with Java,
                  Go, Node.js, and SQL.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Custom Software Development
                </h5>
                <p className="text-justify">
                  Tailored solutions aligned with your unique business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Cloud Solutions</h5>
                <p className="text-justify">
                  Design, migration, and optimization on AWS — scalable and
                  cost-effective.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Architecture & Scalability
                </h5>
                <p className="text-justify">
                  Build reliable, high-performance systems using Kubernetes and
                  modern best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">System Optimization</h5>
                <p className="text-justify">
                  Enhance performance, reliability, and maintainability of your
                  existing stack.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">
                  End-to-End Collaboration
                </h5>
                <p className="text-justify">
                  Close partnership and clear communication throughout the
                  entire development lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text">
        I provide expert software development consultancy backed by years of
        hands-on experience with Java, Go, Node.js, SQL, AWS, and Kubernetes. I
        am specialized in designing scalable, reliable, and high-performance
        systems tailored to your business goals. Whether you’re migrating to the
        cloud, building a new platform, or fine-tuning your existing
        infrastructure, I bring the technical expertise and strategic insight to
        make it happen. Your success is my priority — let’s take your software
        to the next level.
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
