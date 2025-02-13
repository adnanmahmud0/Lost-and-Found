# WhereIsIt

## Project Purpose
WhereIsIt is a Lost and Found Website designed to connect individuals who have lost personal belongings with those who have found them. The platform allows users to report lost items, browse found items, and facilitate their recovery through user interactions. This project provides practical experience in building full-stack applications, integrating user authentication, managing databases, and deploying applications.

---

## Live URL
[Visit WhereIsIt Live](https://whereisit-90953.web.app/)

*(Replace "#" with your live site link once deployed.)*

---

## Key Features

1. **Authentication System**
   - Login and registration via email/password.
   - Google or GitHub OAuth login.
   - Password validation with error messages.

2. **Responsive Design**
   - Fully optimized for mobile, tablet, and desktop views.

3. **CRUD Operations**
   - Add, update, view, and delete posts about lost or found items.
   - Toast notifications for user feedback.

4. **Dynamic Routing**
   - Conditional rendering for authenticated and unauthenticated users.
   - Dynamic page titles and error handling (404 page).

5. **Search and Filter**
   - Search functionality on the Lost & Found Items page by title or location.

6. **Pagination**
   - Items are displayed in pages for better usability.

7. **Enhanced UX/UI**
   - Animations powered by Framer Motion.
   - Eye-catching layout and color contrast.

---

## NPM Packages Used

1. **Frontend**:
   - `react` - For building the user interface.
   - `react-router-dom` - For routing and navigation.
   - `framer-motion` - For animations.
   - `react-datepicker` - For date selection.
   - `tailwindcss` - For styling.

2. **Backend**:
   - `express` - For server-side operations.
   - `mongoose` - For MongoDB object modeling.
   - `dotenv` - For environment variable management.
   - `cors` - To handle cross-origin requests.
   - `jsonwebtoken` - For JWT-based authentication.

3. **Utilities**:
   - `sweetalert2` - For alerts and notifications.
   - `bcryptjs` - For hashing passwords.
   - `multer` - For file uploads.

---

Ensure all dependencies are installed using the following command:

```bash
npm install
```

---

### Additional Notes
Follow deployment guidelines to ensure smooth performance in production. Secure sensitive credentials using `.env` files, and verify all private routes with JWT tokens.
