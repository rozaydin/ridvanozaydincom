import Stack from "react-bootstrap/cjs/Stack";
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
    <Stack gap={3}>
      <div className="bg-light border twocell">
        <div className="part">
          <div>
            <h4>{props.company}</h4>
            <p>{props.position}</p>
            <span className="period">
              <FaCalendar />
              &nbsp;
              {props.period}
            </span>
          </div>
        </div>
        <div className="part">
          <img
            className="companyLogo"
            src={`/assets/companies/${props.name}.png`}
          />
        </div>
      </div>
    </Stack>
  );
}

export default Company;
