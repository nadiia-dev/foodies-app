# Foodies App

Welcome to the Foodies App! This is a full-stack application that allows users to discover, and share their favorite recipes. Built using modern web technologies, this app offers a user-friendly interface and seamless functionality.

## Features

- **Browse Recipes**: Discover a wide variety of recipes based on categories and ingredients.
- **Share Recipes**: Users can share recipes with others.
- **Responsive Design**: The app is fully responsive and works on both desktop and mobile devices.

## Technologies Used

- **Frontend**:

  - Next.js
  - React
  - Tailwind CSS (for styling)
  - PostgreSQL (database)
  - Cloudinary (file storage)

- **Deployment**:
  This project is deployed on [Vercel](https://vercel.com/).

- **Database table structure**

#### meals

- `id` (UUID): Unique identifier for each meal.
- `slug` (TEXT): Unique identifier for each meal that is used in the URL.
- `title` (TEXT): Title of the recipe.
- `image` (TEXT): Image link.
- `summary` (TEXT): Meal summary.
- `instructions` (TEXT): Instructions for the meal.
- `creator` (TEXT): Name of the person who shared the recipe.
- `creator_email` (TEXT): Email address of the person who shared the recipe.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/nadiia-dev/foodies-app.git
```

2.Navigate to the project directory:

```bash
cd foodies-app
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up environment variables. Create a .env file and add the necessary configuration.

```env
FOODIES_POSTGRES_URL= # Connection string for your PostgreSQL database
CLOUD_NAME= #cloudinary cloud name
CLOUDINARY_API_KEY= #cloudinary api key
CLOUDINARY_API_SECRET= #cloudinary api secret
```

5. Start development server:

```bash
npm run dev
```

Open the app in your browser at http://localhost:3000.
