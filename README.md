# ridvanozaydin.com

Merhaba! 👋

I'm **Ridvan Ozaydin**, a software developer with deep expertise in end-to-end software design and development. I specialize in building high-performance, scalable applications using **Java**, **Node.js**, and **Go**. Over the years, I've delivered complex, tailor-made solutions for clients in the **energy**, **telecommunications**, **IoT**, and **blockchain** sectors.

This repository contains the source code for my personal website and blog at [ridvanozaydin.com](https://ridvanozaydin.com).

---

## Services

- **Software Consultancy** — Strategic guidance backed by hands-on experience with Java, Go, Node.js, and SQL.
- **Custom Software Development** — Tailored solutions aligned with your unique business needs.
- **Cloud Solutions** — Design, migration, and optimization on AWS — scalable and cost-effective.
- **Architecture & Scalability** — Reliable, high-performance systems using Kubernetes and modern best practices.
- **System Optimization** — Enhance performance, reliability, and maintainability of your existing stack.
- **End-to-End Collaboration** — Close partnership and clear communication throughout the entire development lifecycle.

## Testimonials

- [ipera.ai uses Kubernetes Infrastructure](https://ipera.ai/ipera-uses-kubernetes-infrastructure/)
- [Scaling Sales Forecasting for a Footwear Giant](https://www.toptal.com/case-study/global-footwear-company-improves-sales-forecasting)

## Education

- **M.Sc.** — [Istanbul Teknik Üniversitesi](https://itu.edu.tr/)
- **B.Sc.** — [Karadeniz Teknik Üniversitesi](https://ktu.edu.tr/)

## Hire Me

- 📧 [ridvan.ozaydin@ridvanozaydin.com](mailto:ridvan.ozaydin@ridvanozaydin.com)
- 💼 [Hire me through Toptal](https://talent.toptal.com/resume/developers/ridvan-ozaydin)

---

## About This Site

Built with **[Astro 5](https://astro.build/)** and **React** islands, styled with **Tailwind CSS**, and deployed as a static site to **AWS S3 + CloudFront** via **GitHub Actions**.

### Tech Stack

- **Framework:** Astro 6 with React 18 islands
- **Styling:** Tailwind CSS 4
- **Content:** Astro Content Collections (Markdown / MDX) with Zod-validated frontmatter
- **Hosting:** AWS S3 + CloudFront (static)
- **CI/CD:** GitHub Actions

### Local Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server with hot reload
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
```

### Project Structure

```
src/
├── pages/          # File-based routing (incl. blog/[...slug].astro)
├── layouts/        # BlogPost layout wrapper
├── components/     # Astro + React islands, organized by feature
├── content/blog/   # Blog posts in Markdown / MDX
├── data/           # Static JSON (projects, companies)
└── consts.ts       # Site-wide constants
```

### Adding a Blog Post

Create a new `.md` or `.mdx` file in `src/content/blog/`. Frontmatter must match the Zod schema in `src/content.config.ts` (`title`, `description`, `pubDate`, optional `heroImage` / `updatedDate`).

---

## License

Content © Ridvan Ozaydin. Code is provided as-is for reference.
