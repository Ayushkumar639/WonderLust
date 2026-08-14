# WonderLust 🏠

> A full-stack property rental platform (Airbnb-style) built with Node.js, Express, MongoDB, and modern web technologies. Features user authentication, property listings with categories, reviews, Cloudinary image uploads, and interactive Mapbox maps.

[![Node.js](https://img.shields.io/badge/Node.js-22.20.0-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.2.1-black.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.9.1-brightgreen.svg)](https://mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-6.0.1-yellow.svg)](https://ejs.co/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-1.41.3-blue.svg)](https://cloudinary.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-0.16.2-purple.svg)](https://mapbox.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

---

## ✨ Features

### 🔐 Authentication & Authorization
- **User Registration** - Secure signup with email and password
- **User Login/Logout** - Session-based authentication with Passport.js
- **Password Hashing** - Automatic bcrypt hashing via passport-local-mongoose
- **Route Protection** - Middleware for logged-in users and resource ownership
- **Flash Messages** - Success/error notifications using connect-flash

### 🏘️ Property Listings
- **Full CRUD Operations** - Create, Read, Update, Delete listings
- **11 Property Categories**: Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Architectural, Dome, Boats
- **Rich Details** - Title, description, price, location, country, image
- **Image Uploads** - Cloudinary integration with Multer for image storage
- **Geolocation** - Mapbox-powered interactive maps with coordinates
- **Owner Association** - Listings linked to authenticated users

### ⭐ Reviews & Ratings
- **Review System** - Users can leave comments and 1-5 star ratings
- **Cascade Delete** - Reviews automatically removed when listing is deleted
- **Validation** - Server-side validation with Joi

### 🎨 Frontend & UX
- **EJS Templating** - Server-side rendering with EJS-Mate layouts
- **Responsive Design** - Mobile-friendly UI components
- **Partial Includes** - Reusable header, footer, navbar components
- **Form Validation** - Client and server-side validation

### 🛠️ Developer Experience
- **Async Error Handling** - wrapAsync utility for clean route handlers
- **Custom Error Classes** - ExpressError for structured error responses
- **Data Seeding** - 24+ sample listings with global locations
- **Environment Configuration** - dotenv for secure config management

---

## 📸 Screenshots

> *Add your screenshots here*

| Home Page | Listing Detail | Create Listing |
|:---------:|:-------------:|:--------------:|
| ![Home](screenshots/home.png) | ![Detail](screenshots/detail.png) | ![Create](screenshots/create.png) |

| User Dashboard | Map View | Categories |
|:-------------:|:--------:|:----------:|
| ![Dashboard](screenshots/dashboard.png) | ![Map](screenshots/map.png) | ![Categories](screenshots/categories.png) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v22.20.0 or higher
- **MongoDB** Atlas account (or local MongoDB instance)
- **Cloudinary** account for image storage
- **Mapbox** account for interactive maps

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayushkumar639/WonderLust.git
   cd WonderLust
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```env
   ATLASDB_URL=your_mongodb_atlas_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_access_token
   NODE_ENV=development
   ```

4. **Seed the database** (optional - adds sample listings)
   ```bash
   node init/index.js
   ```

5. **Start the development server**
   ```bash
   npm start
   # or
   node app.js
   ```

6. **Visit the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🌐 Live Demo

**Deployed on Render** with **MongoDB Atlas** database:
> 🔗 **Live URL:** `https://wonderlust-93hu.onrender.com`

---

## 📁 Project Structure

```
WonderLust/
├── app.js                 # Application entry point
├── package.json           # Dependencies & scripts
├── schema.js              # Joi validation schemas
├── cloudConfig.js         # Cloudinary configuration
├── middleWare.js          # Custom middleware (auth, validation)
├── .gitignore
├── .env                   # Environment variables (not tracked)
├── README.md
│
├── controllers/           # Request handlers (business logic)
│   ├── listings.js        # Listing CRUD operations
│   ├── reviews.js         # Review operations
│   └── users.js           # Authentication handlers
│
├── models/                # Mongoose schemas & models
│   ├── listing.js         # Property listing schema
│   ├── review.js          # Review schema
│   └── user.js            # User schema (passport-local-mongoose)
│
├── routes/                # Express route definitions
│   ├── listing.js         # /listings routes
│   ├── review.js          # /listings/:id/reviews routes
│   └── user.js            # /signup, /login, /logout routes
│
├── utils/                 # Utility functions & classes
│   ├── ExpressError.js    # Custom error class
│   └── wrapAsync.js       # Async wrapper for route handlers
│
├── views/                 # EJS templates
│   ├── layouts/           # Base layouts (boilerplate.ejs)
│   ├── includes/          # Partials (header, footer, navbar)
│   ├── listings/          # Listing views (index, show, new, edit)
│   └── users/             # Auth views (signup, login)
│
├── public/                # Static assets
│   ├── css/               # Stylesheets
│   └── js/                # Client-side JavaScript
│
└── init/                  # Database seeding
    ├── data.js            # Sample listing data (24 properties)
    └── index.js           # Seeding script
```

---

## 🛣️ API Routes

### Listings (`/listings`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET    | `/` | List all listings | No |
| GET    | `/new` | Show create form | Yes |
| POST   | `/` | Create new listing | Yes |
| GET    | `/:id` | Show single listing | No |
| GET    | `/:id/edit` | Show edit form | Yes (Owner) |
| PUT    | `/:id` | Update listing | Yes (Owner) |
| DELETE | `/:id` | Delete listing | Yes (Owner) |

### Reviews (`/listings/:id/reviews`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST   | `/` | Add review to listing | Yes |
| DELETE | `/:reviewId` | Delete review | Yes (Author) |

### Users (`/`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET    | `/signup` | Show registration form | No |
| POST   | `/signup` | Register new user | No |
| GET    | `/login` | Show login form | No |
| POST   | `/login` | Authenticate user | No |
| GET    | `/logout` | Logout user | Yes |

---

## 🗄️ Database Models

### User
```javascript
{
  email: { type: String, required: true },
  // username, salt, hash managed by passport-local-mongoose
}
```

### Listing
```javascript
{
  title: { type: String, required: true },
  description: String,
  image: {
    filename: String,
    url: String
  },
  price: Number,
  location: String,
  country: String,
  geometry: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  category: {
    type: String,
    enum: ['Trending', 'Rooms', 'Iconic Cities', 'Mountains', 'Castels', 
           'Amazing Pools', 'Camping', 'Farms', 'Archetic', 'Dome', 'Boats']
  },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
}
```

### Review
```javascript
{
  comment: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
}
```

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ATLASDB_URL` | MongoDB connection string | Yes |
| `SECRET` | Session encryption secret | Yes |
| `CLOUD_NAME` | Cloudinary cloud name | Yes |
| `CLOUD_API_KEY` | Cloudinary API key | Yes |
| `CLOUD_API_SECRET` | Cloudinary API secret | Yes |
| `MAPBOX_TOKEN` | Mapbox public access token | Yes |
| `NODE_ENV` | Environment (development/production) | No |

### Cloudinary Setup
1. Create a [Cloudinary](https://cloudinary.com/) account
2. Create an upload preset or use signed uploads
3. Configure folder: `wanderlust_DEV` (set in `cloudConfig.js`)

### Mapbox Setup
1. Create a [Mapbox](https://mapbox.com/) account
2. Generate a public access token
3. Add token to `.env` as `MAPBOX_TOKEN`

---

## 🚢 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong `SECRET` for sessions
- [ ] Configure MongoDB Atlas with IP whitelist
- [ ] Set up Cloudinary for production
- [ ] Use Mapbox token with URL restrictions
- [ ] Enable HTTPS (reverse proxy with Nginx)
- [ ] Set up process manager (PM2)

### Deploy to Render/Heroku/Railway

1. **Create a new web service**
2. **Connect your GitHub repository**
3. **Set build command:** `npm install`
4. **Set start command:** `node app.js`
5. **Add all environment variables**
6. **Deploy!**

### Docker (Optional)

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style
- Follow existing code patterns
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes locally

---

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ayush Kumar**
- GitHub: [@Ayushkumar639](https://github.com/Ayushkumar639)
- Project: [WonderLust](https://github.com/Ayushkumar639/WonderLust)

---

## 🙏 Acknowledgments

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - ODM
- [Passport.js](http://passportjs.org/) - Authentication
- [Cloudinary](https://cloudinary.com/) - Image management
- [Mapbox](https://mapbox.com/) - Maps & geolocation
- [Unsplash](https://unsplash.com/) - Sample images
- [Bootstrap](https://getbootstrap.com/) - CSS framework (if used)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Ayushkumar639/WonderLust?style=social)
![GitHub forks](https://img.shields.io/github/forks/Ayushkumar639/WonderLust?style=social)
![GitHub issues](https://img.shields.io/github/issues/Ayushkumar639/WonderLust)
![GitHub last commit](https://img.shields.io/github/last-commit/Ayushkumar639/WonderLust)

---

<div align="center">
  <strong>Built with ❤️ using Node.js, Express & MongoDB</strong>
  <br>
  <em>Happy Coding! 🚀</em>
</div>