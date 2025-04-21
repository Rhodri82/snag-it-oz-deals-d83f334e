
# DealsOz - Australian Community Deal Sharing Platform

**URL**: https://lovable.dev/projects/d5c8af7f-8cad-4dcb-ac9b-5325817f8de7

## Project Overview

DealsOz is a uniquely Australian community deal-sharing platform inspired by HotUKDeals. It allows users to discover, share, and vote on the best deals across Australia.

## Project Structure

### Key Folders

- **`src/components/`**: Core UI components used throughout the application
- **`src/components/deals/`**: Deal-specific components (cards, filters, actions)
- **`src/components/header/`**: Navigation and header-related components
- **`src/__legacy/`**: Deprecated components kept for reference (do not use in new code)
- **`src/hooks/`**: Custom React hooks for shared functionality
- **`src/pages/`**: Main application pages/routes
- **`src/types/`**: TypeScript type definitions
- **`src/utils/`**: Utility functions

## Common File Reference Table

| File Name | Purpose | Where Used |
|-----------|---------|------------|
| `DealCard.tsx` | Displays individual deal information | Deal listings, search results |
| `DealList.tsx` | Maps and renders collections of deals | Homepage, category pages |
| `DealTabs.tsx` | Navigation tabs for deal filtering | Deal header section |
| `DealFilters.tsx` | Filter controls for deals | Deal header section |
| `DealSort.tsx` | Sorting options for deals | Deal header section |
| `Layout.tsx` | Main application layout wrapper | All pages |
| `Header.tsx` | Main navigation header | All pages |
| `Pagination.tsx` | Page navigation for deal lists | Deal listings with multiple pages |

## How to Edit This Project

There are several ways of editing your application.

### Use Lovable

Simply visit the [Lovable Project](https://lovable.dev/projects/d5c8af7f-8cad-4dcb-ac9b-5325817f8de7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

### Use your preferred IDE

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

### Edit Safely

1. **Make incremental changes**: Small, focused edits are easier to review and less likely to cause conflicts
2. **Test locally**: Always verify your changes work before pushing
3. **Document your changes**: Add comments explaining any complex logic
4. **Update imports**: When moving files, ensure all imports are updated correctly

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

Simply open [Lovable](https://lovable.dev/projects/d5c8af7f-8cad-4dcb-ac9b-5325817f8de7) and click on Share -> Publish.

## Custom Domain Setup

Yes, you can connect your own domain!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
