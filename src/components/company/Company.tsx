import { FaCalendar } from "react-icons/fa/index.js";

export type CompanyProps = {
  name: string;
  company: string;
  url: string;
  position: string;
  period: string;
};

function Company(props: CompanyProps) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-card p-6 hover:shadow-card-hover hover:border-gray-200 transition-all duration-300">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {props.url ? (
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors duration-200"
              >
                {props.company}
              </a>
            ) : (
              props.company
            )}
          </h3>
          <p className="text-sm text-gray-600">{props.position}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FaCalendar className="w-3 h-3" />
            <span>{props.period}</span>
          </div>
        </div>
        <img
          className="w-16 h-16 object-contain shrink-0"
          src={`/assets/companies/${props.name}.png`}
          alt={`${props.company} logo`}
        />
      </div>
    </div>
  );
}

export default Company;
