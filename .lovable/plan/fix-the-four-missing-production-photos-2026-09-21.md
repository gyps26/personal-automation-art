# Fix the four missing production photos

## Confirmed cause
The three funnel photos and profile photo are the only images stored as Lovable-hosted asset pointers. Their saved URLs begin with `/__l5e/assets-v1/...`, which resolves on the Lovable preview but not on the independently hosted Coolify site. The other portfolio images are actual image files bundled into the Docker build, which is why they remain visible.

## Changes
- Recover the original profile and three funnel images from their currently working asset URLs.
- Store them as normal bundled portfolio images so the Docker image contains all four files.
- Replace the four `.asset.json` imports and URL lookups with standard image imports, preserving the current placement, captions, sizing, and click-to-enlarge behavior.
- Keep all other portfolio images and page content unchanged.

## Validation
- Confirm the production build emits all four photos into its static assets.
- Run the Docker-style production server and verify every photo request returns an image successfully.
- Check the three funnel cards and About photo at desktop and mobile sizes.
