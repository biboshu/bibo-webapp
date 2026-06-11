<p align="center">
  <img src="src/lib/assets/images/logo.svg" alt="Bibo Logo" width="80" />
</p>

<h1 align="center">Bibo Webapp</h1>

<p align="center">
  The frontend application powering Bibo — a lightweight, open-source note-taking app.
</p>

<p align="center">
  <a href="https://github.com/biboshu/bibo-webapp/blob/main/LICENSE"><img src="https://img.shields.io/github/license/biboshu/bibo-webapp" alt="License"></a>
</p>

## About Bibo Webapp

> **Note:** This repository contains the SvelteKit frontend for Bibo. The desktop shell (Tauri) lives in a separate repository: [biboshu/bibo-desktop](https://github.com/biboshu/bibo-desktop).

This is the web application that powers Bibo, built with SvelteKit, Tailwind CSS, and DaisyUI. It runs both as a standalone web app and embedded inside the Tauri desktop client.

- 📝 Block-based editor
- 🎨 Built with SvelteKit + Tailwind CSS + DaisyUI
- 🌍 Internationalization with Paraglide
- 📖 Storybook for component development
- 🧪 Tested with Vitest + Playwright

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/)

### Setup

```bash
git clone https://github.com/biboshu/bibo-webapp.git webapp
cd webapp
pnpm install
pnpm dev
```

To test inside the desktop shell, clone [bibo-desktop](https://github.com/biboshu/bibo-desktop) alongside this repository:

```
bibo/
├── webapp/    # This repo
└── client/    # biboshu/bibo-desktop
```

```bash
cd ../client
pnpm install
pnpm tauri:dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Build for production (web) |
| `pnpm build:tauri` | Build for Tauri desktop |
| `pnpm check` | Type-check with svelte-check |
| `pnpm lint` | Lint with ESLint + Prettier |
| `pnpm test` | Run unit + e2e tests |
| `pnpm storybook` | Start Storybook |

## Contributing

Thank you for considering contributing to Bibo! Please read the [contribution guide](CONTRIBUTING.md) before submitting a pull request.

## Code of Conduct

Please review and abide by the [Code of Conduct](CODE_OF_CONDUCT.md).

## Security Vulnerabilities

If you discover a security vulnerability, please send an email to the maintainers instead of opening a public issue. All security vulnerabilities will be promptly addressed.

## License

Bibo Webapp is open-source software licensed under the [AGPL-3.0-or-later](LICENSE) license.
