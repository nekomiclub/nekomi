# NEKOMI.CLUB

## [Tree](./docs/tree.md)

## Notes
Classes
```scss
.gradient--primary // New background gradient
  &-text // New text gradient
  &-border-* // New border gradient. *px - 2, 4
  &-hover // Fills background on hover and focus-visible

.gradient--secondary // New background gradient
  &-hover // Fills background on hover and focus-visible
```

Each request has ```x-url``` header, that contains current url.
Server unavailable screen logic placed in ```./layout.tsx```
404 route fallback to define if route simple not added placed in ```./not-found.tsx```
Text elipsis class - ```text-ellipsis line-clamp-[{LINES}]```

*See ./components/handlers.ts*

## Dependencies
- nekomi-core
- nekomi-media
- fk-usapi
- fk-authority
- fk-uptime (/polling)