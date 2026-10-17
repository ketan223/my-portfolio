# Ketan Tiwari — Developer Portfolio

Personal portfolio for **Ketan DilipKumar Tiwari**, a full-stack developer interested in machine learning, deep learning, and generative AI. The site brings together my background, technical skills, internship experience, projects, certificates, and contact details in one place.

💻 **Source code:** [github.com/ketan223/my-portfolio](https://github.com/ketan223/my-portfolio)

## Highlights

- Responsive single-page experience with smooth section navigation
- About and skills sections
- Internship experience with certificate previews
- Filterable personal and internship project showcases
- Certificate gallery
- Contact form, email, GitHub, and LinkedIn links
- Animated hero, mobile navigation, and interactive visual details

## Built with

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript and CSS
- [FormSubmit](https://formsubmit.co/) for contact form submissions

## Featured work

The portfolio highlights projects such as:

- **AI Interview Prep & Resume Analytics** — interview practice, AI-generated questions and feedback, and PDF resume generation.
- **Text-to-SQL Query Generator** — natural-language database queries with exploratory analysis and visualizations.
- **Online Appointment Booking System** — a MERN application with role-based access, scheduling, notifications, and video calling.
- **Medical Query Assistant** — a document-based RAG assistant built with LangChain and Gemini.
- **Streamify** — a language exchange platform with real-time chat and video.
- **ApplyPilot** — AI-assisted job outreach and recruiter response classification.

## Run locally

### Prerequisites

- Node.js (LTS recommended)
- npm

### Setup

```bash
git clone https://github.com/ketan223/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```text
src/
├── assets/                 # Profile, internship, and project images
├── components/
│   ├── About.jsx
│   ├── Certificates.jsx
│   ├── Contact.jsx
│   ├── Header.jsx
│   ├── Internships.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── App.jsx                 # Page layout and section navigation
└── main.jsx                # Application entry point
```

## Production build

Build the static site with:

```bash
npm run build
```

The generated files are written to `dist/`. Deploy that directory to any static host that supports single-page Vite applications. To test the production build locally, run `npm run preview`.

## Contact

- **LinkedIn:** [linkedin.com/in/ketan-tiwari-160873316](https://www.linkedin.com/in/ketan-tiwari-160873316)
- **GitHub:** [github.com/ketan223](https://github.com/ketan223)

---

© Ketan Tiwari
