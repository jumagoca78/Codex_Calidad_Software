# Getting Started Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Open the Application**
   - Navigate to `http://localhost:3000` in your web browser

## Using the Application

### Adding a New Student

1. Fill in the student registration form with:
   - First Name (required)
   - Last Name (required)
   - Email (required, must be valid email format)
   - Student Number (required, must be unique)
   - Enrollment Date (optional, defaults to today)

2. Click "Add Student" button

3. The student will appear in the "Registered Students" table below

### Editing a Student

1. Click the green "Edit" button next to the student you want to modify
2. The form will populate with the student's current information
3. Make your changes
4. Click "Update Student"

### Deleting a Student

1. Click the red "Delete" button next to the student
2. Confirm the deletion in the popup dialog
3. The student will be removed from the system

### Managing Course Registrations

1. Click the blue "Courses" button next to a student
2. A modal will open showing all available courses
3. Registered courses are highlighted in green with an "Unregister" button
4. Available courses have a green "Register" button
5. Click "Register" to enroll the student in a course
6. Click "Unregister" to drop the student from a course
7. Close the modal by clicking the × button or clicking outside

## Available Courses

The system includes 5 pre-configured courses:

1. **CS101** - Introduction to Programming (3 credits)
2. **CS201** - Data Structures (4 credits)
3. **CS301** - Database Systems (3 credits)
4. **CS202** - Web Development (3 credits)
5. **CS401** - Software Engineering (4 credits)

## Features

- ✅ Real-time form validation
- ✅ Duplicate email/student number prevention
- ✅ Success and error notifications
- ✅ Responsive design for mobile and desktop
- ✅ Smooth animations and transitions
- ✅ Modern gradient interface

## API Endpoints

If you want to integrate with the backend directly:

### Students
- `GET /api/students` - List all students
- `GET /api/students/:id` - Get one student
- `POST /api/students` - Create a student
- `PUT /api/students/:id` - Update a student
- `DELETE /api/students/:id` - Delete a student

### Courses
- `GET /api/courses` - List all courses
- `POST /api/students/:id/courses/:courseId` - Register to course
- `DELETE /api/students/:id/courses/:courseId` - Unregister from course

## Tips

- The system uses in-memory storage, so data will be lost when the server restarts
- Email and student number must be unique across all students
- Students can register for multiple courses
- A student cannot register for the same course twice

## Support

For issues or questions, please refer to the README.md file or open an issue on GitHub.
