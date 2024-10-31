# Nekomi.club tree

[Back](../README.md)

## /
Home endpoint

**layout.tsx**
Root layout. Includes global metadata, server availablity check, state provider & skeleton theme

**not-found.tsx**
Root 404 fallback. User will be redirected here if next does not find path. If router.ts includes path, Routing provider will display page state (indev, working or clear (404))

**page.tsx**
Home RSC. Fetch titles, set metadata & etc.

**Home.tsx**
Page layout

------------------------------------------

## /u/[username]
User profile endpoint

**layout.tsx**
Layout. Provides metadata & fetch user data. Set initial layout with header, bg & content

**page.tsx**
RSC lists fetching & defining if user is account owner by session cookie

**content.tsx**
CSR components

------------------------------------------

## /u/[username]/list/[listId]
User list

**page.tsx**
RSC lists layout

------------------------------------------

## /w/[query]
Watch title

**page.tsx**
RSC, fetch title data, set metadata & parse dubbers

**Watch.tsx**
CSR layout

------------------------------------------

## /polling
Services status page. Depends on fk-uptime service

------------------------------------------

## /dev
Dev endpoints. In prod mode layout will throw 404 screen

------------------------------------------

## /dev/icons
List of all nekomi icons

------------------------------------------

## /dev/screen/*
400 - User error
404 - Not found
indev - Page in development
unavailable - Server unavailable

------------------------------------------



[Back](../README.md)