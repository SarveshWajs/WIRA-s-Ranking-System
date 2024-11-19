WIRA's Ranking Dashboard
WIRA's Ranking Dashboard is a web application designed to display player scores and rankings interactively and intuitively. The application features efficient backend management of over 100,000 data entries and provides features like search, pagination, and responsive design for seamless usability on both desktop and mobile devices.

Features
Backend powered by Node.js and PostgreSQL.
Over 100,000 lines of data generated using @faker-js/faker.
RESTful API with search, pagination, and data caching for optimized performance.
Responsive and interactive frontend built with Vue.js.
Supports desktop and mobile views for enhanced user experience.

Prerequisites
Node.js (version 14 or higher)
PostgreSQL (version 12 or higher)
A web browser (latest version of Chrome, Firefox, etc.)

Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/wira-ranking-dashboard.git
cd wira-ranking-dashboard

3. Setup Backend
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Set up the PostgreSQL database:

Create a database named wira_dashboard.
Update the database connection in config.js with your credentials.
Generate fake data and populate the database:

bash
Copy code
node generate-data.js
Start the backend server:

bash
Copy code
node server.js
By default, the server runs on http://localhost:3000.

3. Setup Frontend
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
By default, the frontend runs on http://localhost:5173.

Usage
Open the frontend in your browser at http://localhost:5173.
Use the search bar to look up players by username or character name.
Navigate through pages using pagination controls.
View rankings and scores in an intuitive dashboard.

Project Structure
php
Copy code
wira-ranking-dashboard/
├── backend/
│   ├── server.js         # Main backend server
│   ├── generate-data.js  # Script to generate fake data
│   ├── routes/           # API endpoints
│   └── config.js         # Database configuration
├── frontend/
│   ├── public/           # Static assets
│   ├── src/              # Vue.js components and main app logic
│   ├── app.js            # Main frontend script
│   └── index.html        # Entry HTML file
└── README.md             # Project documentation

Technologies Used
Backend:

Node.js
Express.js
PostgreSQL
Frontend:

Vue.js
Axios
Other:

@faker-js/faker (for data generation)
