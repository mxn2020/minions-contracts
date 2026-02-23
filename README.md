# minions-contracts

**Agreements, statements of work, terms, and signed documents**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-contracts/sdk minions-sdk

# Python
pip install minions-contracts

# CLI (global)
npm install -g @minions-contracts/cli
```

---

## CLI

```bash
# Show help
contracts --help
```

---

## Python SDK

```python
from minions_contracts import create_client

client = create_client()
```

---

## Project Structure

```
minions-contracts/
  packages/
    core/           # TypeScript core library (@minions-contracts/sdk on npm)
    python/         # Python SDK (minions-contracts on PyPI)
    cli/            # CLI tool (@minions-contracts/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [contracts.minions.help](https://contracts.minions.help)
- Blog: [contracts.minions.blog](https://contracts.minions.blog)
- App: [contracts.minions.wtf](https://contracts.minions.wtf)

---

## License

[MIT](LICENSE)
