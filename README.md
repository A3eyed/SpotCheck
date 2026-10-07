# SpotCheck – Ghana Rental & Hospitality Marketplace

**Mobile app (iOS & Android)** built with React Native and Expo.

**Developer / Creator / Builder:** Abdallah Fuseini

## Overview

SpotCheck connects landlords and property managers with tenants across Ghana for:

- **Long-term residential rentals** (monthly/annual with 6, 12, or 24-month advance)
- **Student hostels** (per bed, per semester/academic year with gender segregation)
- **Short-stay hotels / guest houses** (per night)

## Platform

**Mobile only** (iOS & Android). No website is included in this repository.

The app expects a backend API. Set `EXPO_PUBLIC_BASE_URL` in `.env` to your API host (auth, listings, bookings, payments, uploads).

## Requirements

- Node.js 20+
- Yarn 4 (recommended) or npm
- Expo CLI / EAS CLI for builds
- At least **4 GB free RAM** for `yarn install` (full Expo/RN tree is large)

## Getting Started

```bash
cp .env.example .env
# Edit EXPO_PUBLIC_BASE_URL to your API

yarn install
npx expo start
```

## Building

```bash
npx eas build --platform ios --profile production
npx eas build --platform android --profile production
```

Bundle identifiers: **`com.spotcheck`** (iOS & Android).

## Status / known limits

- Anything AI / created.app branding and scaffolding have been removed.
- Full dependency install and Expo runtime were not verified in the low-memory cleanup environment; run `yarn install` + `npx expo start` on a normal machine.
- Backend is **not** included — host your own API and point `EXPO_PUBLIC_BASE_URL` at it.
- Auth uses a WebView against `{BASE_URL}/account/signin|signup` and expects a token callback at `/api/auth/token`.

## License

MIT – Developed by Abdallah Fuseini
