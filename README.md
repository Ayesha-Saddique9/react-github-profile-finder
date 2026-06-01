# 🔍 React GitHub Profile Finder

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A sleek, responsive, and blazing-fast web application that allows users to search for GitHub profiles and instantly view their statistics. Built with **React.js** and styled with **Tailwind CSS**, this project demonstrates modern API integration and robust state management.

---

## 📸 Project Previews

### 1. The Search Interface
![Search Interface](./search.png)

### 2. Live Data Rendering
![Profile Result](./result.png)

---

## ✨ Key Features & Logic

- **⚡ Real-time API Integration:** Fetches live user data directly from the official GitHub REST API using modern `async/await` Promises.
- **🛡️ Robust Error Handling:** Intelligently catches invalid usernames and renders a custom "User Not Found" state instead of crashing.
- **⏳ Dynamic Loading States:** Provides visual feedback to the user while data is being fetched over the network.
- **🎨 Modern UI/UX:** Designed with a sleek Dark Mode aesthetic using Tailwind CSS, featuring hover transitions, focus rings, and custom stat badges.
- **🧹 Clean State Management:** Efficiently utilizes React's `useState` hook to separate UI states (Loading, Error, and Data).

---

## 🛠️ Technologies Used

- **Frontend Library:** React.js (Functional Components & Hooks)
- **Styling:** Tailwind CSS
- **Data Fetching:** Native JavaScript Fetch API
- **Version Control:** Git & GitHub

---

## 💻 How to Run Locally

Want to test this project on your own machine? Follow these simple steps:

```bash
# 1. Clone the repository
git clone https://github.com/Ayesha-Saddique9/react-github-profile-finder.git

# 2. Navigate into the project folder
cd react-github-profile-finder

# 3. Install the necessary dependencies
npm install

---
##👩‍💻 Author
Ayesha Saddique

Frontend Web Developer
GitHub: @Ayesha-Saddique9
LinkedIn: Ayesha Saddique

# 4. Start the Vite development server
npm run dev
