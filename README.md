# NEKOMI.CLUB

Migrating to nextjs 15 is not possible due to errors in @fullkekw modules till they will be fixed

## [Tree](./docs/tree.md)

## Setup
Create local ```.env``` file from ```.env.example```

```bash
$ npm ci
$ npm run build
$ npm run start
```

## Husky
To setup husky, run:

```bash
$ npx husky init
```

Paste ```npm run husky``` in ```.husky/pre-commit```

## Notes
Server unavailable screen logic placed in ```./layout.tsx```
404 route fallback to define if route simple not added placed in ```./not-found.tsx```
Text elipsis class - ```text-ellipsis line-clamp-[{LINES}]```

*See ./components/handlers.ts*

## UI
```scss
.ui-button // Default styled button with dark-medium background, border & animations
```