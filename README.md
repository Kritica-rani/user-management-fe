# User Management Frontend

A React-based frontend application for managing users. This project uses modern React patterns, Material-UI components, context API for state management, React Hook Form with Yup for validation, and Axios for API communication.

## Live Demo

The application is deployed at: [https://user-management-fe-648p-2u716cxqg-kriticaranis-projects.vercel.app/](https://user-management-fe-648p-2u716cxqg-kriticaranis-projects.vercel.app/)

## Features

- View a list of all users
- Create new users with form validation
- Delete existing users
- Component-based architecture
- Material-UI components for a polished UI
- API integration with axios and interceptors
- Form validation with React Hook Form and Yup

## Tech Stack

- React
- Material-UI (MUI) for UI components
- Context API for state management
- React Hook Form for form handling
- Yup for schema validation
- Axios for API requests and interceptors

## Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd user-management-fe
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your backend API URL:

```
REACT_APP_API_URL=https://user-management-be-6oll.onrender.com
```

## Running Locally

Start the development server:

bashnpm run dev

# or

yarn dev

The application will be available at http://localhost:5173.

## Build for Production

Create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `build` directory.

## Component Design Pattern

This project follows a component-based design pattern where:

1. **Components are broken down by responsibility:**

   - Common components (reusable UI elements)
   - Layout components (structural elements)

2. **Material-UI integration:**

   - MUI components used throughout the application
   - Consistent styling and user experience

3. **State management with Context API:**

   - User context manages the state of users
   - Custom hooks provide access to context functionality

4. **Service layer:**

   - API services handle communication with the backend
   - Axios interceptors for request/response handling

5. **Form validation:**
   - React Hook Form for managing form state
   - Yup schemas for validation rules
   - Integration with MUI form components

## API Integration

The application connects to the backend API at [https://user-management-be-6oll.onrender.com](https://user-management-be-6oll.onrender.com) with the following endpoints:

- `GET /users` - List all users
- `POST /users` - Create a new user
- `DELETE /users/{id}` - Delete a user

## Form Validation

User creation forms are validated using Yup schemas with the following rules:

- Name: Required, string
- Email: Required, valid email format
- Age: Required,number
