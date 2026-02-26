export type EducationProps = {};

function Education(props: EducationProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500 w-12">M.Sc.</span>
          <a
            href="https://itu.edu.tr/"
            className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Istanbul Teknik Üniversitesi
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-500 w-12">B.Sc.</span>
          <a
            href="https://ktu.edu.tr/"
            className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Karadeniz Teknik Üniversitesi
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
