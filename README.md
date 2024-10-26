# Dine DELIGHT

## Project Overview

**Dine DELIGHT** is a comprehensive React-based platform designed to enhance the experience of food lovers and streamline business operations for cuisine providers and hotels. The platform offers an organized, user-friendly interface that allows users to handle all their dining needs in one place. Dine DELIGHT’s core features empower users to order food for delivery, reserve tables, and book venues—all from the convenience of a single application.

## Objective

The goal of Dine DELIGHT is to provide a seamless solution for both customers and businesses. Users can efficiently manage their dining plans, while restaurants and hotels can handle their orders and reservations with ease, helping them grow their customer base and improve operational efficiency.

## Features

1. **Food Delivery**: Users can browse through menus, place orders for delivery, and track their order status.
2. **Table Reservations**: Reserve tables at favorite restaurants for a hassle-free dining experience.
3. **Venue Bookings**: Book venues for events, gatherings, or business meetings, ensuring availability on desired dates.

## Technology Stack

### Front-End

The front end of Dine DELIGHT leverages a modern stack that ensures an efficient and maintainable development process:

- **React**: The core JavaScript library for building user interfaces, making the app responsive and interactive.
- **Styled Components**: A CSS-in-JS library that allows writing CSS directly in JavaScript, making it easy to style components dynamically.
- **Redux**: State management library used to handle the global state of the application, ensuring consistency across components.
- **Context API**: For sharing data that doesn’t necessarily need Redux but still benefits from centralized, global context, such as theme preferences.
- **TanStack Query**: Provides data fetching, caching, and synchronization, especially useful for asynchronous server data and API integration.

## Project Setup

To get started with Dine DELIGHT, clone the repository and install dependencies:

```bash
git clone https://github.com/Nkhan000/dine-delight-react-fe.git
cd dine-delight
npm install
```

### Running the Application

Once dependencies are installed, you can run the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Build for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `build` directory with a minified version of the app.

## Folder Structure

Here's a high-level overview of the folder structure:

```
src/
├── ui/         # Reusable UI components
├── features/   # Redux features and slices and hooks for authentication, cart, dashboard, delivery, settings and user
├── util/       # important helper functions and global contexts
├── hooks/      # general reuseable custom hooks
├── pages/      # Application pages (Home, Booking, Reservations, etc.)
├── services/   # API services and utilities
└── styles/     # Global and theme styles using styled-components
```

## Contributing

We welcome contributions! Please fork the repository and create a pull request with any enhancements, bug fixes, or features you'd like to see in Dine DELIGHT.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---
