# Filaments Custom Cardiology Puzzle - Vercel Deployment

This is a custom version of the Filaments game (a Strands-like word puzzle) with a cardiology-themed puzzle.

## Deployment Instructions

### Option 1: One-Click Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FYOUR_USERNAME%2Ffilaments-custom)

### Option 2: Manual Deployment

1. Push this repository to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - Build Command: `npm run vercel-build`
   - Output Directory: `out`
6. Click "Deploy"

## Notes

- This version is configured to work without a multiplayer server
- The custom cardiology puzzle is hardcoded as the only available puzzle
- The multiplayer and board loading interfaces are hidden

## Customization

If you want to change the WebSocket address or other configuration:

1. Modify the `WS_ADDRESS` environment variable in the `vercel-build` script in `package.json`
2. If needed, update the `IS_DEPLOYED` check in `ts/main.ts`

## Local Development

To run the project locally:

```bash
npm install
npm run build
npm start
```

This will start a local server at http://localhost:8080 where you can test the game. 