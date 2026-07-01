# readly

A discussion-driven app built with Next.js App Router, Prisma, PostgreSQL, and Neon Auth. The project combines a tag-based feed, post creation, threaded comments, voting, and lightweight community discovery in a Reddit-style interface.

## Overview

`readly` is a social reading and discussion platform where users can browse posts by feed sort or tag, open full discussion threads, vote on posts and comments, and publish new content once signed in. The app uses Prisma for database access, Neon Auth for authentication, and seeded demo content for local development.

## Features

- Tag-based feed with `hot`, `new`, and `top` sorting
- Post detail pages with threaded comments
- Upvote and downvote interactions for posts and comments
- Auth-gated post creation flow
- Tag filters and sidebar tag counts
- Trending sidebar content
- Seed scripts for demo posts, nested comments, and votes
- Prisma-generated client output under `lib/generated/prisma`

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Prisma 7
- PostgreSQL
- Neon Auth
- shadcn/ui style component setup

## Project Structure

```text
app/
  (main)/
    page.tsx
    post/[id]/page.tsx
    submit/page.tsx
  auth/[pathname]/page.tsx
  api/auth/[...path]/route.ts
components/
  feed/
  layout/
  post/
  ui/
lib/
  actions/
  db/
  generated/prisma/
  auth.ts
  prisma.ts
prisma/
scripts/
```

## Environment Variables

Create a `.env` file in the project root with values like:

```bash
DATABASE_URL=postgres://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require
NEON_AUTH_BASE_URL=https://your-neon-auth-instance.example.com
NEON_AUTH_COOKIE_SECRET=replace-with-a-random-secret-at-least-32-characters-long
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Push the Prisma schema to your database:

```bash
npm run db:push
```

3. Seed demo content:

```bash
npm run db:seed
```

Optional richer seed data with comments and votes:

```bash
npm run db:seed-cv
```

4. Start the development server:

```bash
npm run dev
```

5. Open the app:

```text
http://localhost:3000
```

## Data Model

The core schema includes:

- `UserProfile`
- `Post`
- `Tag`
- `PostTag`
- `Comment`
- `Vote`

Posts can have multiple tags, comments can be nested through `parentId`, and votes are stored by `userId + targetType + targetId`.

## Deployment Notes

- `lib/generated/prisma` is generated, so `prisma generate` must run during install or build. This repo already handles that with `postinstall`.
- If production sign-in returns `INVALID_ORIGIN`, add your deployed frontend origin to the Neon Auth trusted origins configuration.

## Notes

- The submit flow requires authentication and redirects signed-out users to `/auth/sign-in`.
- If no tags are provided when creating a post, the app defaults to `#webdev`.
- This repo is set up for seeded local development, so the initial experience is best after running one of the seed scripts.
