# 🧬 Skinstric AI

A responsive AI image-analysis experience built with **Next.js**, **React**, and **Tailwind CSS**.

Skinstric AI guides users through a multi-step onboarding process, allows them to upload an image or take a selfie, sends the image to an external analysis API, and displays confidence-ranked demographic estimates.

## Live Demo

[View Skinstric AI Live](https://skinstric-ai-ten-tan.vercel.app/)

## GitHub Repository

[View the Repository](https://github.com/jdblair78/Skin-Care-Internship-Project)

## About the Project

Skinstric AI was developed as part of a frontend development internship project.

The goal was to recreate a polished AI skincare interface while building the complete user journey with React and Next.js. The application includes animated onboarding screens, browser camera access, gallery uploads, asynchronous API requests, local-storage state management, responsive layouts, and interactive data visualization.

## Features

* Responsive AI-inspired landing page
* Multi-step onboarding workflow
* User name and location collection
* Browser local-storage state management
* Camera permission request
* Gallery permission confirmation
* Image upload from the user’s device
* Live browser camera preview
* Selfie capture using the Canvas API
* Image conversion to Base64
* External image-analysis API integration
* Processing and loading states
* Dynamic navigation between application steps
* Confidence-ranked demographic estimates
* Race, age, and sex result categories
* Interactive category selection
* Circular confidence visualization
* Ability to review and override estimated results
* Reusable navigation and interface components
* Animated rotating rectangle design
* Responsive layouts for desktop, tablet, and mobile screens

## Technologies Used

* Next.js 16
* React 19
* JavaScript
* Tailwind CSS 4
* CSS3
* Next.js App Router
* Next.js Image component
* React Hooks
* Fetch API
* Browser Local Storage
* MediaDevices API
* Canvas API
* Vercel

## Application Workflow

### 1. Landing Page

The landing page introduces the Skinstric AI experience with animated visuals and interactive navigation.

Users can begin the analysis workflow by selecting the test option.

### 2. User Introduction

Users enter their name before continuing.

The entered name is saved in browser local storage and passed into the next step of the onboarding flow.

### 3. Location

Users enter their city or location.

The application combines the location with the previously saved name and displays a simulated processing state before allowing the user to continue.

### 4. Image Selection

Users can choose between two image-input methods:

* Allow AI access to the device gallery
* Allow AI access to the device camera

A confirmation modal explains which browser permission will be requested.

### 5. Gallery Upload

When gallery access is selected, the user can choose an image from their device.

The image is:

1. Read with the browser `FileReader`
2. Converted into a Base64 data URL
3. Saved temporarily in local storage
4. Sent to the Skinstric image-analysis API
5. Used to generate the results screen

### 6. Camera Capture

When camera access is selected, the browser requests permission using the MediaDevices API.

The application then:

1. Displays a live camera preview
2. Captures the current video frame
3. Draws the frame onto a hidden canvas
4. Converts the captured image to Base64
5. Sends the image to the analysis API
6. Navigates to the results screen

### 7. Demographic Results

The results page reads the API response from local storage and displays estimated:

* Race
* Age
* Sex

Each category contains confidence percentages sorted from highest to lowest.

Users can select a category, view its confidence score, and choose a different result when an estimate needs to be corrected.

## API Integration

Images are sent to the Skinstric Phase Two cloud function using a `POST` request.

```javascript
const response = await fetch(
  "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: imageBase64,
    }),
  }
);

const result = await response.json();
```

The returned result is saved in local storage and used to render the demographic confidence data.

## Local Storage

The application uses browser local storage to preserve data between routes.

```text
skinstric_phase_one
skinstric_location
skinstric_uploaded_image
skinstric_results
```

These values may contain the user’s entered information, uploaded image data, and API analysis results.

## Application Routes

```text
/               Landing page
/Introduce      Name collection
/Where          Location collection
/Allow          Camera or gallery selection
/Camera         Live camera and selfie capture
/Demographics   AI confidence results
/Select         Analysis category selection interface
```

## Reusable Components

The project includes reusable components for common interface behavior:

```text
AIConfidence
AllowModal
BackButton
CameraAccess
ProceedBtn
Progress
RotatingRectangleInput
```

These components handle navigation, permissions, loading states, visual progress, result selection, and the animated onboarding design.

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/jdblair78/Skin-Care-Internship-Project.git
```

### 2. Open the project folder

```bash
cd Skin-Care-Internship-Project
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the following address in your browser:

```text
http://localhost:3000
```

## Camera Requirements

Camera access must be approved by the user.

Most browsers require camera features to run from:

* `localhost`
* A secure HTTPS website

The deployed Vercel application uses HTTPS and can request camera access from supported browsers and devices.

## Available Scripts

### `npm run dev`

Starts the Next.js development server.

### `npm run build`

Creates an optimized production build.

### `npm start`

Runs the optimized production build.

Run `npm run build` before using this command locally.

### `npm run lint`

Checks the project for ESLint issues.

## Project Structure

```text
Skin-Care-Internship-Project/
├── app/
│   ├── Allow/
│   │   └── page.js
│   ├── Camera/
│   │   └── page.js
│   ├── Demographics/
│   │   └── page.js
│   ├── Introduce/
│   │   └── page.js
│   ├── Landing/
│   │   └── page.js
│   ├── Navbar/
│   │   └── page.js
│   ├── Select/
│   │   └── page.js
│   ├── Where/
│   │   └── page.js
│   ├── components/
│   │   ├── AIConfidence/
│   │   ├── AllowModal/
│   │   ├── BackButton/
│   │   ├── CameraAccess/
│   │   ├── ProceedBtn/
│   │   ├── Progress/
│   │   └── RotatingRectangleInput/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## What I Learned

This project strengthened my understanding of:

* Building multi-page applications with the Next.js App Router
* Creating responsive interfaces with Tailwind CSS
* Managing form input with React state
* Navigating programmatically with `useRouter`
* Preserving data between routes with local storage
* Handling asynchronous API requests
* Creating loading, success, and error states
* Uploading and converting image files
* Accessing a device camera from the browser
* Capturing images with the Canvas API
* Rendering API results dynamically
* Sorting confidence data
* Creating reusable React components
* Building custom progress visualizations
* Deploying a Next.js application with Vercel

## Future Improvements

* Connect the name and location step to the Phase One API
* Add clearer API error messages
* Add an image preview before submission
* Add a retake option for camera images
* Add a confirmation step before analysis
* Improve camera support across mobile browsers
* Add stronger form validation
* Add keyboard navigation and accessibility labels
* Automatically clear outdated local-storage data
* Add a privacy-consent screen
* Avoid storing sensitive image data longer than necessary
* Add automated component and integration tests
* Add analytics for onboarding completion
* Add additional skin-analysis categories
* Provide personalized skincare recommendations from validated data

## Privacy Notice

This demonstration processes user-selected images through an external API.

Image data and analysis results may also be stored temporarily in the browser’s local storage. Users should avoid uploading private or sensitive images when testing the application.

A production version should include a complete privacy policy, explicit user consent, secure data handling, data-retention controls, and a method for deleting stored information.

## Medical and AI Disclaimer

This project was created for educational, internship, and portfolio purposes.

The displayed demographic estimates are generated by an external AI service and may be inaccurate. The application is not a medical device and should not be used to diagnose skin conditions, determine treatment, or make healthcare decisions.

## Author

**Joshua Blair**

* [GitHub Profile](https://github.com/jdblair78)
* [Project Repository](https://github.com/jdblair78/Skin-Care-Internship-Project)
* [Live Application](https://skinstric-ai-ten-tan.vercel.app/)
