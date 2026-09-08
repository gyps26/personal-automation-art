# Exact portfolio replication

## Goal
Rebuild the one-page portfolio so it closely mirrors the live `automation-watch.onrender.com/portfolio` page, preserving its visible structure, wording, project ordering, filters, screenshots, metrics, and interactions.

## What will change
- Recreate the original header branding and navigation treatment for a one-page site.
- Match the original portfolio introduction, GoHighLevel funnel section, grouped workflow showcase, and case-study results section.
- Use the exact titles, descriptions, feature labels, workflow steps, detailed “how it works” copy, benefits, categories, and metrics extracted from the live page.
- Restore the original platform and category filtering, project search, image viewing, and workflow-detail interactions.
- Import and display all project screenshots still served by the old website.
- Preserve the original ordering and project counts: 3 GoHighLevel funnels and 30 workflow projects across Zapier, Make.com, and n8n.
- Match the old dark dashboard appearance, typography, spacing, badges, cards, platform colors, and mobile behavior.
- Update the page title and sharing description to match Mario’s portfolio rather than generic project metadata.

## Image handling
The old site currently returns missing-file errors for several funnel and newest workflow screenshots. Those projects will remain complete and in their correct positions, with a deliberate screenshot-unavailable treatment rather than invented or unrelated imagery. All 28 recoverable original images will be used unchanged.

## Verification
- Check that all extracted projects, text, tags, steps, filters, and metrics are present.
- Test search, platform/category filters, project details, and full-image viewing.
- Compare the finished page with the captured desktop reference and check a mobile viewport.
- Confirm the page loads without visual, console, or build errors.

## Technical details
- Store the extracted portfolio records and local image mappings as typed data.
- Use the existing design controls for interactive buttons and dialogs.
- Keep the result as a single TanStack Start route with responsive React sections and semantic metadata.
