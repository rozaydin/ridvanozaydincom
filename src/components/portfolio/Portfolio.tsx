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
    <section className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
        Project Portfolio
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Project
              </th>
              <th className="text-left py-3 px-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Summary
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.map((project, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="py-3 px-4 text-sm font-medium text-gray-900 align-top whitespace-nowrap">
                  {project.project}
                </td>
                <td className="py-3 px-4 text-sm text-gray-500">
                  {project.summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
