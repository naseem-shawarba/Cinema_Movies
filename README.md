# Cinema Movies
Cinema movies app is a responsive web app that allows you to browse movie categories, find your favorite films, and instantly watch trailers by clicking on them.

## Frameworks Used
* React.js 18
* Material UI (MUI)
* Tailwind CSS
* Recoil
* Next.js 14
* TypeScript

## Screenshots

![Screenshot1](https://github.com/naseem-shawarba/Projects_Screenshots/blob/main/Cinema_Movies/Screenshot1.png)


## Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

If you want to clone the repo and run the app locally, you need to obtain an API key from <a href="https://developer.themoviedb.org/docs/getting-started">TMDB API</a>. After obtaining the key, create a file named .env.local in the root directory of the project and add the API key within double quotes as follows:
```bash
NEXT_PUBLIC_API_KEY="<KEYGOESHERE>"
```

After setting up the .env.local file, you can use the following commands to run the app in development mode or build the app for production:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
