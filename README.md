# SpotCheck – Ghana Rental & Hospitality Marketplace

**Mobile app (iOS & Android)** built with React Native and Expo.

**Developer / Creator / Builder:** Abdallah Fuseini

## Overview

SpotCheck connects landlords and property managers with tenants across Ghana for three accommodation types:

- **Long-term residential rentals** (monthly/annual with 6, 12, or 24-month advance)
- **Student hostels** (per bed, per semester/academic year with gender segregation)
- **Short-stay hotels / guest houses** (per night)

## Platform

This repository contains the **mobile application only** (iOS and Android).  
There is no website component. The app talks to a backend API that you host separately (configure `EXPO_PUBLIC_BASE_URL` / `EXPO_PUBLIC_API_URL` in `.env`).

## Tech Stack

- React Native + Expo (SDK 54)
- Expo Router
- TypeScript
- Tailwind CSS
- Zustand (auth & state)
- Paystack (payments – via your backend)
- SecureStore for session tokens

## Getting Started

```bash
yarn install
# or npm install

# Configure environment
cp .env.example .env
# Set EXPO_PUBLIC_BASE_URL to your API base URL

npx expo start
```

## Building for stores

```bash
npx eas build --platform ios --profile production
npx eas build --platform android --profile production
```

## License

MIT – Developed by Abdallah Fuseini

---

Version 1.0.0 – Built for Ghana's rental market 🇬🇭
