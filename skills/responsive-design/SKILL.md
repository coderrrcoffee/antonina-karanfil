# Responsive Design Skill

## Goal

Every website must work naturally across desktop, tablet and mobile.

Do not treat mobile as an afterthought.

## Mobile-first thinking

Consider the smallest practical viewport first.

Important widths to test include:

- 320px
- 360px
- 390px
- 430px

Also verify desktop layouts around:

- 768px
- 1024px
- 1440px

## Common mobile problems

Always check for:

- horizontal overflow
- oversized headings
- buttons that become too narrow
- navigation collisions
- images overflowing containers
- excessive padding
- awkward line breaks
- cards becoming too narrow
- fixed elements covering content

## Layout

Use responsive CSS rather than creating separate desktop and mobile pages.

Prefer:

- flexbox
- CSS grid
- fluid sizing
- clamp()
- max-width
- responsive spacing

Avoid unnecessary JavaScript for layout.

## Typography

Headings should scale appropriately.

Do not simply preserve desktop font sizes on mobile.

Use fluid sizing where appropriate.

## Navigation

Desktop navigation should transform into a usable mobile navigation.

Do not allow navigation links to overflow horizontally.

## Verification

After significant UI changes, inspect both desktop and mobile layouts.

A page is not finished if it only looks good at one viewport width.