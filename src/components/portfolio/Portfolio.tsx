import React from "react";

type Project = {
  project: string;
  description: string;
  summary: string;
  industry: string[];
  tech: string[];
};

type Props = {
  projects: Project[];
};

export default function PortfolioTable({ projects }: Props) {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Project Portfolio</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th>Project</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.project}</td>
                <td>{project.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style>{`
        .summary-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
}
