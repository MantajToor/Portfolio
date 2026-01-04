# Portfolio

Personal portfolio website showcasing my projects and skills.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Code Quality**: ESLint + Prettier

## Project Structure

```
Portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # Page-specific components
│   │   ├── ui/            # Reusable UI components
│   │   └── three/         # React Three Fiber components
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Shared components
├── lib/                    # Utility functions
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build

Create a production build:

```bash
npm run build
```

### Code Formatting

Format code with Prettier:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## License

MIT License - see [LICENSE](LICENSE) file for details.
