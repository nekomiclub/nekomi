# ANIMEE.CLUB

## [Tree](./docs/tree.md)

## Notes
Classes
```scss
.gradient--primary // Primary background gradient
  &-text // Primary gradient for text
  &-border // DEPRECATED. Primary gradient for border 
.gradient--secondary // Secondary background gradient

.gradient--primary // New background gradient
  &-text // New text gradient
  &-border-* // New border gradient. *px - 2, 4
  &-hover // Fills background on hover and focus-visible

.gradient--secondary // New background gradient
  &-hover // Fills background on hover and focus-visible

// @deprecated
.szh-slide // Slide transition for @szhsin/react-menu. Assing to parent el
  &--toTop // Appears from bottom
  &--toBottom // Appears from top

.break-ellipsis // Will break word with dots (lorem ips...). Require max-width specified
```

Each request has x-url header, that contains current url.
Server unavailable screen logic placed in ```./layout.tsx```
404 route fallback to define if route simple not added placed in ```./not-found.tsx```

*See ./components/handlers.ts*
## Dependencies
- animee-core
- animee-media
- fk-usapi
- fk-authority
- fk-uptime (/polling)