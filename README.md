# Senior Frontend Engineer (Vue.js) E-Commerce Test Task Application for Lightspeed

## Overview

This application provides a complete e-commerce experience with category browsing, product discovery, and shopping cart functionality. It integrates with the Ecwid REST API to fetch real store data and implements best practices for Vue.js application development.

## Sliced File Architecture

This project follows the **Sliced File Architecture** pattern, where all files related to a specific feature are stored together in a single directory. This approach makes the code more understandable and maintainable.

```
src/
├── catalog/                  # Catalog page (home)
│   ├── categories/            # Categories feature
│   └── products/              # Products feature
├── cart/                     # Shopping cart page
│   ├── cart-card/             # Individual cart item component
│   └── cart-details/          # Cart details and summary
├── product/                  # Product detail page
│   └── components/            # Product page components
├── header/                   # Header component
├── not-found-page/           # 404 page
│   └── components/            # Error page components
└── lib/                      # Shared utilities
    ├── api/                   # API client
    ├── assets/                # Global assets
    ├── components/            # Shared UI components
    ├── router/                # Router configuration
    └── stores/                # Pinia stores
```

## Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint

# Format code
pnpm format
```

## Task Requirements

For detailed project requirements, see [docs/requirements.md](./docs/requirements.md).

## Acknowledgments

- Architecture inspired by [Rhetus LIMS](https://github.com/Quantori-Academy/rhetus-lims)
- API provided by [Ecwid](https://www.ecwid.com/)
- Built for [Lightspeed](https://www.lightspeedhq.com/) technical assessment
