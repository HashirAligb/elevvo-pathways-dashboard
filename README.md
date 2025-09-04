Elevvo Pathways Dashboard
A comprehensive recruitment management platform built with React and Material-UI, designed to streamline applicant tracking and hiring pipeline management for HR teams.
Overview
This dashboard was developed during my software engineering internship at Alevelo Pathways to create an efficient system for managing recruitment workflows. The application provides real-time insights into applicant statuses, company partnerships, and hiring analytics.
Features

Applicant Management: Track candidates through the complete hiring pipeline (Applied → Interviewing → Hired/Rejected)
Company Database: Manage partner companies with industry categorization and open role tracking
Interactive Analytics: Visual insights including applicant geographic distribution, status breakdowns, and monthly hiring trends
Form Management: Create new applicant profiles with validation using Formik and Yup
Data Export: CSV export functionality for reporting and data analysis
Responsive Design: Fully optimized for desktop and mobile devices

Tech Stack

Frontend: React with Material-UI components
Forms: Formik with Yup validation
Charts: Nivo for data visualization
Calendar: FullCalendar integration
Styling: Custom Material-UI theming with light mode design
Layout: Responsive CSS Grid and Flexbox

Key Pages

Dashboard: Overview metrics and quick insights
Applicants: Comprehensive applicant management with filtering
Companies: Partner company database with search functionality
Analytics: Detailed charts and hiring trend analysis
Forms: New applicant creation with validation

Installation & Setup
bash# Clone the repository
git clone https://github.com/HashirAligb/elevvo-pathways-dashboard.git

# Install dependencies
cd elevvo-pathways-dashboard
npm install

# Start development server
npm start
The application will run on http://localhost:3000
Project Structure
src/
├── components/     # Reusable UI components
├── scenes/         # Page-level components  
├── data/           # Mock data and API calls
└── theme.js        # Material-UI custom theming
Development Highlights
This project taught me valuable lessons about building professional admin interfaces and making thoughtful technical decisions. I chose Formik over React Hook Form for form management because React Hook Form would have required wrapping each Material-UI TextField in a Controller component, making the forms more verbose. Formik's render props pattern provided cleaner integration with Material-UI's built-in error handling.
Acknowledgments
Built upon foundational concepts from Ed Roh's "Complete React Admin Dashboard" tutorial, which provided excellent guidance on Material-UI theming and React dashboard patterns. The final implementation was completely customized for recruitment management workflows.


Note: This is a frontend-only application with mock data for demonstration purposes for now. 

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
