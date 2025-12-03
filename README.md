<div align="center">

# 💊 MedSync

### Your Complete Healthcare & Wellness Companion

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11.2.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)

**MedSync** is an all-in-one healthcare platform that revolutionizes access to affordable generic medicines, enables health tracking through calorie monitoring, and provides instant access to nearby medical facilities.

[Features](#-features) • [Architecture](#-architecture) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Usage](#-usage)

</div>

---

## 🌟 Features

### 💊 Generic Medicine Marketplace
- **Bulk Purchase Platform**: Connect customers directly with sellers offering generic medicines at affordable prices
- **Cost-Effective Healthcare**: Save up to 60-80% compared to branded medications
- **Seller Portal**: Dedicated interface for suppliers to manage inventory and orders
- **Secure Transactions**: Firebase-powered authentication and secure payment processing
- **Medicine Search & Browse**: Easy-to-use interface for finding generic alternatives

### 🍎 Calorie Tracker & Health Monitor
- **Daily Calorie Tracking**: Log and monitor your daily caloric intake
- **Nutrition Analysis**: Detailed breakdown of macronutrients and micronutrients
- **Calorimeter Tool**: Advanced calculator for personalized calorie recommendations
- **Health Goals**: Set and track your fitness and dietary objectives
- **Visual Analytics**: Charts and graphs to visualize your progress

### 🏥 Hospital Locator
- **Interactive Maps**: Powered by Leaflet and React-Leaflet for seamless navigation
- **Real-time Geolocation**: Find nearby hospitals based on your current location
- **Distance Calculation**: See how far each medical facility is from you
- **Detailed Information**: Get contact details, directions, and facility information
- **Emergency Access**: Quick access to nearest emergency services

### 🔔 Additional Features
- **💉 Vaccine Reminder**: Schedule and receive notifications for upcoming vaccinations
- **🤖 AI Health Bot**: 24/7 intelligent chatbot for health queries and support
- **🔐 Dual Authentication**: Separate login systems for customers and sellers
- **📱 Responsive Design**: Seamless experience across all devices
- **🌐 PWA Ready**: Progressive Web App capabilities for offline access

---

## 🏗️ Architecture

![MedSync Architecture](./architecture.svg)

### System Architecture Overview

**MedSync** follows a modern, component-based architecture built with React:

#### Frontend Layer
- **React 18.3.1** - Component-based UI framework
- **React Router DOM** - Client-side routing and navigation
- **Material-UI & React Bootstrap** - UI component libraries
- **Tailwind CSS** - Utility-first styling framework

#### Core Modules
1. **Medicine Marketplace Module**
   - Generic medicine browsing and search
   - Seller management dashboard
   - Bulk order processing

2. **Health Tracking Module**
   - Calorie calculator and tracker
   - Nutrition database integration
   - Progress visualization

3. **Hospital Locator Module**
   - Leaflet map integration
   - Geolocation services
   - Real-time location tracking

#### Backend Services
- **Firebase**: Authentication, real-time database, and cloud storage
- **External APIs**: Medicine databases and nutrition APIs
- **Vercel**: Hosting and continuous deployment

---

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase account for backend services

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/MedSync.git
   cd MedSync
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Realtime Database
   - Copy your Firebase config to `src/firebase/Firebase.jsx`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

---

## 🛠️ Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.3.1 | Frontend framework |
| React Router | 6.23.1 | Navigation and routing |
| Firebase | 11.2.0 | Authentication & database |
| Leaflet | 1.9.4 | Interactive maps |
| Axios | 1.7.9 | HTTP client |

### UI/UX Libraries
- **Material-UI** (5.15.18) - Component library
- **React Bootstrap** (2.10.2) - Bootstrap components
- **Tailwind CSS** (3.4.3) - Utility-first CSS
- **React Icons** (5.4.0) - Icon library
- **React Hot Toast** (2.5.1) - Toast notifications
- **Typewriter Effect** (2.21.0) - Text animations

### Development Tools
- Create React App
- ESLint
- Jest & React Testing Library

---

## 📖 Usage

### For Customers

1. **Sign Up / Login**
   - Create an account or log in to access all features
   - Secure authentication via Firebase

2. **Browse Generic Medicines**
   - Navigate to the Generic Medicine section
   - Search for medicines by name or category
   - View bulk purchase options and pricing

3. **Track Your Health**
   - Access the Calorie Tracker
   - Log your daily meals and activities
   - Monitor your nutritional intake

4. **Find Nearby Hospitals**
   - Go to the Hospital Locator
   - Allow location access for accurate results
   - View hospitals on the interactive map

### For Sellers

1. **Seller Registration**
   - Sign up using the Seller Portal
   - Complete your business profile

2. **Manage Inventory**
   - Add generic medicines to your catalog
   - Set bulk pricing and minimum order quantities
   - Update stock availability

3. **Process Orders**
   - Receive and manage customer orders
   - Track sales and analytics

---

## 📱 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder with optimized performance

### `npm run eject`
**Note**: This is a one-way operation. Ejects from Create React App for full configuration control.

---

## 🌐 Deployment

The application is configured for easy deployment on Vercel:

1. Push your code to a Git repository
2. Import the project on [Vercel](https://vercel.com/)
3. Configure environment variables
4. Deploy with a single click

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👥 Authors

**Muhammad Altamash Rizwi**

---

## 🙏 Acknowledgments

- React community for excellent documentation
- Firebase for backend infrastructure
- Leaflet for mapping capabilities
- All open-source contributors

---

<div align="center">

**Made with ❤️ for better healthcare access**

⭐ Star this repository if you find it helpful!

</div>
