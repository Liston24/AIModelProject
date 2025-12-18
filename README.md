# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Secrets & Environment Variables

Do not hardcode API keys or secrets in source files. This project uses Vite environment variables to load secrets at runtime:

- Create a file named `.env.local` in the project root.
- Copy the contents of `.env.example` and fill in your values.
- `.env.local` is ignored by git (see `.gitignore`).

Example `.env.local`:

```
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
# Optional
VITE_GEMINI_MODEL=gemini-2.5-flash
```

In code, secrets are read via `import.meta.env` and only variables prefixed with `VITE_` are exposed to the client.

### Production Deployment

Configure the same environment variables in your hosting provider's dashboard (e.g., Vercel, Netlify, Render) rather than committing them to the repo. Rebuild the app after updating env vars.
