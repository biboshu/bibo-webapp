# Contributing to Bibo

Thank you for considering contributing to Bibo! 🎉

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/tools/install)
- Tauri system dependencies ([see docs](https://v2.tauri.app/start/prerequisites/))

### Setup

This project requires the [bibo-desktop](https://github.com/biboshu/bibo-desktop) repository to be cloned alongside this one if you want to test the desktop app:

```bash
mkdir bibo && cd bibo
git clone https://github.com/biboshu/bibo-webapp.git webapp
git clone https://github.com/biboshu/bibo-desktop.git client
```

Your directory structure should look like this:

```
bibo/
├── webapp/    # Frontend (SvelteKit)
└── client/    # Desktop shell (Tauri)
```

Then install dependencies and run:

```bash
cd webapp
pnpm install
pnpm dev
```

To test inside the desktop shell:

```bash
cd ../client
pnpm install
pnpm tauri:dev
```

## How to Contribute

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/my-feature
   ```
3. **Make your changes**
4. **Test** your changes locally
5. **Commit** with a clear message
6. **Push** and open a Pull Request

## Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(scope): <description>
```

**Types:**

| Type | Description |
|------|-------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes |
| `style` | Code style (formatting, no logic change) |
| `refactor` | Code refactoring |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |
| `ci` | CI/CD changes |

**Examples:**

```bash
git commit -m "feat(editor): add drag and drop for blocks"
git commit -m "fix(updater): resolve crash on startup"
git commit -m "docs: update contributing guide"
```

## Code Style

- Follow the existing code style
- Run `pnpm lint` before committing
- Run `pnpm check` to verify TypeScript/Svelte types

## Reporting Bugs

Use the [Bug Report](https://github.com/biboshu/bibo-webapp/issues/new?template=bug_report.md) template. Include:

- Steps to reproduce
- Expected vs actual behavior
- Your OS and Bibo version

## Suggesting Features

Use the [Feature Request](https://github.com/biboshu/bibo-webapp/issues/new?template=feature_request.md) template. Explain:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered

## Pull Requests

- Keep PRs focused on a single change
- Link to related issues
- Add a clear description of what and why
- Make sure CI passes

## Security Vulnerabilities

If you discover a security vulnerability, please send an email to the maintainers instead of opening a public issue. All security vulnerabilities will be promptly addressed.

## License

By contributing, you agree that your contributions will be licensed under the [AGPL-3.0-or-later](LICENSE) license.
