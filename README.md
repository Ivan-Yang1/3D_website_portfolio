

# 3D website portfolio

[English](README.md) · [简体中文](README.zh.md)


## Project Introduction

This is a 3D personal website template built with React, Vite, and Tailwind. It has been edited and modified from a tutorial by Javascript Mastery to cater to personal needs. I've incorporated the i18next multilingual module and added buttons linking to personal social accounts.

## Features

- **3D Effects**: 3D models and animations are created using the React Three Fiber and Drei libraries.
- **Responsive Design**: Tailwind CSS is used for a responsive layout, ensuring the website looks good on all devices.
- **Animations**: Framer Motion adds animations to enhance user experience.
- **Routing Management**: React Router DOM manages page routing.
- **Personalized Customization**: Personal information such as biography, skills, projects, education, and contact details can be edited directly in src/constants/index.js.
- **Multilingual Support**: i18next supports language switching with English and Chinese.
- **Email Sending**: emailjs is used for email sending functionality.

## Usage

1. **Clone Repository**:

   ```
   git clone https://github.com/Ivan-Yang1/3D_website_portfolio.git
   ```

2. **Navigate to the Project Directory**:

   ```
   cd 3D_website_portfolio
   ```

3. **Install Dependencies**:

   ```
   npm install
   ```

4. **Modify .env File**:

   ```
   REACT_APP_EMAILJS_USERID=your_emailjs_user_id
   REACT_APP_EMAILJS_TEMPLATEID=your_emailjs_template_id
   REACT_APP_EMAILJS_RECEIVERID=your_emailjs_receiver_id
   ```
   Visit https://www.emailjs.com/ for more details.

5. **Start Development Server**:

   ```
   npm run dev
   ```

6. **Build for Production**:

   ```
   npm run build
   ```

## Notes

- Ensure Node.js and npm are installed locally.
- Personalize the template by editing the information in src/constants/index.js.
- Remember to set up your email.js account for email functionality.
- The website supports switching between English and Chinese.

