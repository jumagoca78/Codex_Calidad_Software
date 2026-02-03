# Student Registration System

A well-designed CRUD (Create, Read, Update, Delete) application for managing university student registrations and course enrollments.

## Features

### Student Management
- ✅ **Create** new student records
- ✅ **Read/View** all registered students
- ✅ **Update** existing student information
- ✅ **Delete** student records
- ✅ Form validation for required fields
- ✅ Unique email and student number validation

### Course Management
- ✅ View available courses
- ✅ Register students to courses
- ✅ Unregister students from courses
- ✅ Prevent duplicate course registrations
- ✅ Interactive modal interface for course selection

### User Interface
- 🎨 Modern, responsive design
- 🎨 Gradient color scheme
- 🎨 Smooth animations and transitions
- 🎨 Mobile-friendly layout
- 🎨 Real-time success/error notifications

## Technology Stack

- **Backend**: Node.js with Express
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data Storage**: In-memory (for simplicity)
- **Styling**: Custom CSS with gradient design

## Installation

1. Clone the repository:
```bash
git clone https://github.com/jumagoca78/Codex_Calidad_Software.git
cd Codex_Calidad_Software
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
Codex_Calidad_Software/
├── server.js           # Express server and API endpoints
├── public/
│   ├── index.html     # Main HTML page
│   ├── styles.css     # Styling and layout
│   └── app.js         # Frontend JavaScript logic
├── package.json       # Project dependencies
└── README.md          # Documentation
```

## API Endpoints

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get a specific student
- `POST /api/students` - Create a new student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

### Courses
- `GET /api/courses` - Get all available courses
- `POST /api/students/:id/courses/:courseId` - Register student to course
- `DELETE /api/students/:id/courses/:courseId` - Unregister student from course

## Data Models

### Student
```javascript
{
  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  studentNumber: String,
  enrollmentDate: String,
  registeredCourses: Array<Number>
}
```

### Course
```javascript
{
  id: Number,
  name: String,
  code: String,
  credits: Number
}
```

## Pre-loaded Courses

The system comes with 5 pre-loaded courses:
1. Introduction to Programming (CS101) - 3 credits
2. Data Structures (CS201) - 4 credits
3. Database Systems (CS301) - 3 credits
4. Web Development (CS202) - 3 credits
5. Software Engineering (CS401) - 4 credits

## Usage Guide

### Adding a Student
1. Fill in the student information form
2. Click "Add Student"
3. The student will appear in the table below

### Editing a Student
1. Click the "Edit" button next to the student
2. Update the information in the form
3. Click "Update Student"

### Deleting a Student
1. Click the "Delete" button next to the student
2. Confirm the deletion

### Managing Course Registrations
1. Click the "Courses" button next to a student
2. A modal will open showing all available courses
3. Click "Register" to enroll in a course
4. Click "Unregister" to drop a course
5. Registered courses are highlighted in green

## Features Implementation

### Form Validation
- All required fields are validated
- Email format validation
- Duplicate email/student number prevention
- Real-time error messages

### CRUD Operations
- **Create**: Add new students with complete information
- **Read**: View all students in a table format
- **Update**: Edit existing student records
- **Delete**: Remove students from the system

### Course Registration
- Students can register for multiple courses
- Prevention of duplicate registrations
- Easy unregistration process
- Visual indication of registered courses

## Future Enhancements

- Persistent database (MongoDB, PostgreSQL)
- User authentication and authorization
- Grade management system
- Schedule conflict detection
- Advanced search and filtering
- Export data to CSV/PDF
- Email notifications

## License

ISC

## Author

Repository for software quality course
