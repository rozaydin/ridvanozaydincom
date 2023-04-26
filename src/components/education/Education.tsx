export type EducationProps = {};

function Education(props: EducationProps) {
  return (
    <div>
      <span className="text-start">Education:</span>
      <div>
        M.Sc.
        <a href="https://itu.edu.tr/">Istanbul Teknik Üniversitesi</a>
      </div>
      <div>
        B.Sc.
        <a href="https://ktu.edu.tr/">Karadeniz Teknik Üniversitesi</a>
      </div>
    </div>
  );
}

export default Education;
