# Alliance-Sourcing-BD-Admin

A full **Next.js App Router + TypeScript** CMS/Admin application for managing Alliance Sourcing BD content.

## Technology

- Next.js 16
- React 19 (required internally by Next.js)
- TypeScript
- App Router
- Tailwind CSS 4
- shadcn/ui + Radix UI
- MongoDB + Mongoose
- SWR
- React Hook Form + Zod
- Lucide React

## Project Structure

```text
Alliance-Sourcing-BD-Admin/
│
├── app/
│   ├── layout.tsx                         # Root layout
│   ├── globals.css                        # Global styles
│   ├── page.tsx                           # Admin login page
│   │
│   ├── admin/
│   │   ├── layout.tsx                     # Authenticated admin layout
│   │   ├── page.tsx                       # Admin dashboard
│   │   ├── products/
│   │   │   └── page.tsx                   # Products management
│   │   ├── about/
│   │   │   └── established-excellence/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── factory-machinery/
│   │   │   ├── advance-machinery/page.tsx
│   │   │   ├── factory-info/page.tsx
│   │   │   └── machinery-inventory/page.tsx
│   │   └── home/
│   │       ├── apart/page.tsx
│   │       ├── buying-house/page.tsx
│   │       ├── catalog/page.tsx
│   │       ├── heros/page.tsx
│   │       ├── services/page.tsx
│   │       └── we-work/page.tsx
│   │
│   └── api/
│       ├── categories/route.ts
│       ├── products/route.ts
│       ├── products/[id]/route.ts
│       ├── established-excellence/route.ts
│       ├── established-excellence/[id]/route.ts
│       ├── contact/route.ts
│       ├── contact/[id]/route.ts
│       ├── advance-machinery/route.ts
│       ├── advance-machinery/[id]/route.ts
│       ├── factory-info/route.ts
│       ├── factory-info/[id]/route.ts
│       ├── machinery-inventory/route.ts
│       ├── machinery-inventory/[id]/route.ts
│       ├── apart/route.ts
│       ├── apart/[id]/route.ts
│       ├── buying-house/route.ts
│       ├── buying-house/[id]/route.ts
│       ├── catalog/route.ts
│       ├── catalog/[id]/route.ts
│       ├── heros/route.ts
│       ├── heros/[id]/route.ts
│       ├── services/route.ts
│       ├── services/[id]/route.ts
│       ├── we-work/route.ts
│       └── we-work/[id]/route.ts
│
├── components/
│   ├── AdminSidebar/
│   │   └── page.tsx                       # Admin sidebar
│   ├── theme-provider/
│   │   └── page.tsx
│   ├── About/
│   │   └── EstablishedExcellence/
│   │       ├── EstablishedExcellenceManager/page.tsx
│   │       ├── EstablishedExcellenceForm/page.tsx
│   │       ├── EstablishedExcellenceList/page.tsx
│   │       └── EstablishedExcellenceModal/page.tsx
│   ├── Contacts/Contact/
│   │   ├── ContactManager/page.tsx
│   │   ├── ContactList/page.tsx
│   │   └── ContactDetailsModal/page.tsx
│   ├── FactoryMachenary/
│   │   ├── AdvanceMachenary/*/page.tsx
│   │   ├── FactoryInfo/*/page.tsx
│   │   └── MachenaryInventory/*/page.tsx
│   ├── Home/
│   │   ├── Apart/*/page.tsx
│   │   ├── BuyingHouse/*/page.tsx
│   │   ├── Catalog/*/page.tsx
│   │   ├── Hero/*/page.tsx
│   │   ├── Services/*/page.tsx
│   │   └── WeWork/*/page.tsx
│   ├── Products/
│   │   ├── ProductsManager/page.tsx
│   │   ├── ProductsForm/page.tsx
│   │   └── ProductsList/page.tsx
│   └── ui/
│       └── */page.tsx                    # shadcn/Radix UI components
│
├── lib/
│   ├── connectToDB.ts
│   ├── data-fetch.ts
│   ├── types.ts
│   ├── utils.ts
│   ├── hooks/
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── models/
│       ├── about-model.ts
│       ├── catagory.ts
│       ├── contact-model.ts
│       ├── factoryAndMachenary-model.ts
│       ├── home-model.ts
│       └── products.ts
│
├── public/
│   └── static assets
│
├── .env.example
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Routes

### Authentication

- `/` — Admin login

### Admin

- `/admin` — Dashboard
- `/admin/products` — Products
- `/admin/about/established-excellence` — Established Excellence
- `/admin/contact` — Contact
- `/admin/factory-machinery/advance-machinery` — Advanced Machinery
- `/admin/factory-machinery/factory-info` — Factory Information
- `/admin/factory-machinery/machinery-inventory` — Machinery Inventory
- `/admin/home/apart` — Apart
- `/admin/home/buying-house` — Buying House
- `/admin/home/catalog` — Catalog
- `/admin/home/heros` — Hero banners
- `/admin/home/services` — Services
- `/admin/home/we-work` — How We Work

## API

All CMS CRUD endpoints use Next.js App Router `route.ts` handlers under `app/api`.

## Environment

Create `.env` from `.env.example` and provide your MongoDB connection string and public API URL. Never commit secrets.

```env
DB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Installation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Type checking

```bash
npm run typecheck
```

## Architecture

The project uses **Next.js App Router**. `page.tsx` files under `app/` define actual routes. Reusable UI and CMS modules live under `components/`, with the requested `components/**/page.tsx` organization. API endpoints use `route.ts`, which is the correct Next.js convention for Route Handlers.
