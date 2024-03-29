# Swapify Barter App
Welcome to Swapify, your premier platform for modern bartering and trading. Swapify is a dynamic web application built entirely in vanilla JavaScript, designed to revolutionize the way individuals swap goods and services.

## Key Features
- **Responsive Design:** Ensures an optimal viewing experience across various devices.
- **Chat Feature:** Engage in real-time conversations with other users through our integrated chat feature.
- **Sign in With Google:** Easily authenticate and access your account.
- **Firebase Integration:** Utilizes Firebase services for authentication, real-time database storage with Firestore, and efficient file storage with Firebase Storage.

## Technologies Used
- **Frontend:** HTML, CSS, and JavaScript.
- **Backend:** Firebase services for authentication, database operations, and file storage.
- **Development Tools:** ESLint for code linting and consistency, Parcel for bundling and optimizing the application.
- **Git Hooks:** Integrated Husky for running pre-commit hooks to ensure code quality.


## Use Node.js

To install the necessary dependencies, run the following command in your terminal:

```bash
npm install
```

To run the application, run the following command in your terminal:
```
npm start
```
This command will start the application and typically open it in your default web browser. If it doesn't, you can access the app by navigating to `http://localhost:1234` in your browser.

## Fixing Linting Issues

This command will run ESLint and check your JavaScript files for any linting errors or warnings based on the ESLint configuration defined in the `.eslintrc.json` file.

```bash
npm run lint

```
This command will run ESLint with the `--fix` option, which automatically applies fixes for any fixable issues found in your JavaScript files.

```bash
npm run lint-fix
```

## Firebase Configuration
Before running the application, obtain the Firebase configuration values from your Firebase project's settings in the Firebase console. These values will be used as environment variables in your .env file. Follow these steps:

1. **Obtaine Access Keys**

    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Navigate to Project settings.
    - Under Your apps, select your web app.
    - Copy the configuration values provided.


2. **Enable Google Sign-In**

   - In the Firebase Console, navigate to the "Authentication" section.
   - Click on the "Sign-in method" tab.
   - Enable the "Google" sign-in provider and save your changes.


3. **Enable Firestore Database:**

   - In the Firebase Console, navigate to the "Firestore" section.
   - Set up your database rules and configure the database according to your app's needs.

    ```firebase
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /{document=**} {
          allow read, write: if request.auth != null;
        }
      }
    }
    ```

4. **Enable Real-Time Database:**

   - In the Firebase Console, navigate to the "Database" section.
   - Set up your database rules and configure the database according to your app's needs.

    ```json
    {
      "rules": {
        ".read": true,
        ".write": true
      }
    }
    ```

5. **Enable Storage:**

   - In the Firebase Console, navigate to the "Storage" section.
   - Set up your database rules and configure the database according to your app's needs.

    ```firebase
    rules_version = '2';
    service firebase.storage {
      match /b/{bucket}/o {
        match /{allPaths=**} {
          allow read, write: if request.auth != null;
        }
      }
    }
    ```


## Environment Variables
Create a `.env.local` file in the root directory of your project and add the Firebase configuration values as environment variables:

```env
PUBLIC_FIREBASE_API_KEY=
PUBLIC_FIREBASE_AUTH_DOMAIN=
PUBLIC_FIREBASE_DATABASEURL=
PUBLIC_FIREBASE_PROJECT_ID=
PUBLIC_FIREBASE_STORAGE_BUCKET=
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
PUBLIC_FIREBASE_APP_ID=
```
---

Remember to follow these steps carefully to ensure a smooth integration of your Web App with Firebase services.