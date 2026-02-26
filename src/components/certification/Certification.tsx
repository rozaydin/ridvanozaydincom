export type CertificationProps = {};

const badges = [
  "63b7e01b-558f-4e41-b1af-0e1aa034dd75",
  "0089191b-1a33-497d-8654-0885ae177ab4",
  "333fff52-c214-468f-badf-d78d14041520",
  "38d27d0b-2d01-4104-b91f-492ffe55ae7f",
  "391326ee-9848-41c2-9e55-9f635d40d4a5",
];

function Certification(props: CertificationProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badgeId) => (
          <div key={badgeId} className="flex justify-center">
            <div
              data-iframe-width="250"
              data-iframe-height="270"
              data-share-badge-id={badgeId}
              data-share-badge-host="https://www.credly.com"
            />
            <script
              type="text/javascript"
              async
              src="//cdn.credly.com/assets/utilities/embed.js"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;
