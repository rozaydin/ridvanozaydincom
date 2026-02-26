import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaRegEnvelope,
} from "react-icons/fa/index.js";

const links = [
  {
    href: "https://www.linkedin.com/in/ridvanozaydin",
    icon: <FaLinkedin className="w-5 h-5 text-blue-600" />,
    label: "LinkedIn",
    handle: "ridvanozaydin",
  },
  {
    href: "https://github.com/rozaydin",
    icon: <FaGithub className="w-5 h-5 text-gray-800" />,
    label: "GitHub",
    handle: "rozaydin",
  },
  {
    href: "https://stackoverflow.com/users/3102328/rozaydin",
    icon: <FaStackOverflow className="w-5 h-5 text-orange-500" />,
    label: "Stack Overflow",
    handle: "rozaydin",
  },
  {
    href: "mailto:ridvan.ozaydin@ridvanozaydin.com",
    icon: <FaRegEnvelope className="w-5 h-5 text-gray-600" />,
    label: "Email",
    handle: "ridvan.ozaydin@ridvanozaydin.com",
  },
];

function Links() {
  return (
    <section className="py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">Get in Touch</h1>
      <div className="space-y-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-card transition-all duration-200 no-underline group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
              {link.icon}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{link.label}</p>
              <p className="text-sm text-gray-400">{link.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Links;
