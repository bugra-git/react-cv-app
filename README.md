# CV Application

A React-based resume builder application built as part of The Odin Project's JavaScript/React curriculum. This project allows users to input personal details, educational background, and work history to generate a professional CV in real-time.

## 🚀 Features

- **Personal Bio Section**: Upload a profile picture and add contact information (Name, Email, Phone) and a personal "About Me" summary.
- **Dynamic Work Experience**: Add multiple job entries with company names, positions, and dates.
- **Education Tracking**: Add multiple educational milestones including school name and degree.
- **Edit/Save States**: Every section features a toggleable edit mode. Users can submit information to see a formatted preview or go back into edit mode to update existing details without losing progress.
- **Responsive Design**: A clean, modern split-layout design (Bio sidebar and Resume main view) that works across different screen sizes.

## 🛠️ Built With

- **React.js**: Functional components and Hooks (`useState`).
- **CSS3**: Custom styling with CSS Variables and Grid/Flexbox layouts.
- **Vite**: Frontend tooling for a fast development experience.
- **Lucide React**: For clean, modern iconography in the contact section.

## 📁 Project Structure

src/
├── assets/             # Static assets like default profile images
├── components/         # React components
│   ├── app.jsx         # Main application container
│   ├── bio.jsx         # Bio and contact info logic
│   └── resume.jsx      # Work & Education list logic
├── styles/             # Modular CSS files
│   ├── app.css
│   ├── bio.css
│   ├── main.css        # Global resets and variables
│   └── resume.css
└── main.jsx            # Entry point

## 📝 Assignment Requirements Fulfilled

- Functional components used throughout.
- Implementation of "General Information", "Education", and "Practical Experience" sections.
- Edit and Submit buttons for every section.
- Input fields pre-populate with existing data when entering edit mode.
- State management handled via React useState.

Created as part of The Odin Project curriculum.