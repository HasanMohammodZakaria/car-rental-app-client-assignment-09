# 🚗 DriveFleet — Car Rental Platform

> A modern full-stack Car Rental Platform where users can explore premium vehicles, book rentals, manage listings, and track their bookings — all with a clean, recruiter-friendly UI.

🌐 **Live Site:** https://car-rental-kohl-delta.vercel.app

---

## ✨ Features

- 🔐 **Secure Authentication** — Email/password and Google OAuth login with JWT-based private route protection. Logged-in users are never redirected to login on page reload.
- 🚘 **Explore & Search Cars** — Browse all available cars in a responsive grid layout with real-time search by car name and filter by car type (SUV, Sedan, Hatchback, Luxury, etc.) using MongoDB `$regex` operator.
- 📋 **Complete Booking System** — Logged-in users can book any car, choose driver preference, add special notes, and view all their bookings with car name, total price, and booking date.
- 🛠️ **Car Listing Management (CRUD)** — Users can add new car listings, update their own cars (price, description, availability, image, type, location), and delete listings with a confirmation modal.
- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop with smooth Framer Motion animations, an off-canvas mobile sidebar, and consistent UI across all screen sizes.
- 🔢 **Booking Count Tracking** — Car booking count auto-increments using MongoDB `$inc` operator every time a car is booked.
- 🌐 **Google OAuth Integration** — One-click Google login with seamless redirect to home route on success.

---

## 🛠️ Tech Stack

### Frontend
| Technology | Usage |
|---|---|
| Next.js(App Router) | Frontend Framework |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Better Auth | Authentication (Email + Google) |
| HeroUI | UI Component Library |
| React Icons | Icon Library |
|Mongodb | Data Base Management |
|react-toastify | Use for user notification |
|react |  |
|react-dom |  |


### Backend
| Technology | Usage |
|---|---|
| Node.js + Express.js | Server Framework |
| MongoDB Atlas | Database |
| jose-cjs | JWT Verification via JWKS |
| Better Auth | Auth & JWT Plugin |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment Variables |

---