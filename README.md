[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Nuxt](https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js)](https://nuxt.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![PrimeVue](https://img.shields.io/badge/PrimeVue-4AB7D6?logo=vue.js)](https://primevue.org)

# Nuxt 3 + Tailwind CSS + PrimeVue Boilerplate

A starter template with Nuxt 3, Tailwind CSS 4, PrimeVue 4, and dark mode support.

## Demo

[Live Demo](https://nuxt3-primevue-boilerplate.vercel.app) - Check out the live demo of this boilerplate.

![Screenshot](https://via.placeholder.com/800x400?text=Nuxt3+PrimeVue+Boilerplate+Screenshot)

## Features

- ✅ [Nuxt 3](https://nuxt.com/) - The progressive Vue framework
- 🎨 [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- 🧩 [PrimeVue 4](https://primevue.org/) - UI component library for Vue
- 🌓 Integrated dark mode
- 🌐 Internationalization with i18n
- 🖼️ Image optimization with @nuxt/image
- 🔤 Font optimization with @nuxt/fonts
- 📦 Auto-imported components

## Installation

### Option 1: Using nuxi

You can create a new project based on this template using the `nuxi init` command with the template option:

```bash
# Using npx
npx nuxi init my-project -t github:arpixnet/nuxt3-primevue-boilerplate

# Or using pnpm
pnpm dlx nuxi init my-project -t github:arpixnet/nuxt3-primevue-boilerplate

# Or using yarn
yarn dlx nuxi init my-project -t github:arpixnet/nuxt3-primevue-boilerplate

# Or using bun
bunx nuxi init my-project -t github:arpixnet/nuxt3-primevue-boilerplate
```

Then navigate to your project directory and install dependencies:

```bash
cd my-project
npm install # or pnpm install, yarn install, bun install
```

### Option 2: Using Git

```bash
# Clone the repository
git clone https://github.com/arpixnet/nuxt3-primevue-boilerplate.git
cd nuxt3-primevue-boilerplate

# Install dependencies
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## Configuration

### Tailwind Configuration

You can customize the Tailwind configuration in the `tailwind.config.js` file:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4AB7D6',
        // Add your custom colors here
      }
    }
  }
}
```

### PrimeVue Configuration

PrimeVue is configured in the `assets/themes/config.js` file. You can customize the theme and other options there.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Project Structure

```
├── app/
│   ├── assets/           # Static assets (CSS, images, etc.)
│   ├── components/       # Reusable Vue components
│   ├── layouts/          # Application layouts
│   ├── middleware/       # Nuxt middleware
│   ├── pages/            # Application pages
│   └── plugins/          # Nuxt plugins
├── public/               # Public files
├── server/               # Server code
└── nuxt.config.ts        # Nuxt configuration
```

For more information about deployment, check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## Contributing

Contributions are welcome! Here's how you can contribute to this project:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

Please make sure to update tests as appropriate.

## Troubleshooting

### Common Issues

#### Build Errors

**Problem**: Build fails with dependency errors.

**Solution**: Try clearing the cache and reinstalling dependencies:

```bash
# Clear Nuxt cache
rm -rf .nuxt
rm -rf node_modules/.cache

# Reinstall dependencies
rm -rf node_modules
npm install
```

#### Development Server Issues

**Problem**: Hot reload not working properly.

**Solution**: Restart the development server with the `--force` flag:

```bash
npm run dev -- --force
```

## Changelog

### v1.0.0 (2025-04-02)

- Initial release
- Nuxt 3 integration
- Tailwind CSS 4 setup
- PrimeVue 4 components
- Dark mode support
- i18n configuration
