const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory database (for simplicity)
let students = [];
let courses = [
    { id: 1, name: 'Introduction to Programming', code: 'CS101', credits: 3 },
    { id: 2, name: 'Data Structures', code: 'CS201', credits: 4 },
    { id: 3, name: 'Database Systems', code: 'CS301', credits: 3 },
    { id: 4, name: 'Web Development', code: 'CS202', credits: 3 },
    { id: 5, name: 'Software Engineering', code: 'CS401', credits: 4 }
];
let studentIdCounter = 1;

// API Routes

// Get all students
app.get('/api/students', (req, res) => {
    res.json(students);
});

// Get a single student
app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.json(student);
});

// Create a new student
app.post('/api/students', (req, res) => {
    const { firstName, lastName, email, studentNumber, enrollmentDate } = req.body;
    
    // Validation
    if (!firstName || !lastName || !email || !studentNumber) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Check if email or student number already exists
    const existingStudent = students.find(s => s.email === email || s.studentNumber === studentNumber);
    if (existingStudent) {
        return res.status(400).json({ error: 'Student with this email or student number already exists' });
    }
    
    const newStudent = {
        id: studentIdCounter++,
        firstName,
        lastName,
        email,
        studentNumber,
        enrollmentDate: enrollmentDate || new Date().toISOString().split('T')[0],
        registeredCourses: []
    };
    
    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update a student
app.put('/api/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    const { firstName, lastName, email, studentNumber, enrollmentDate } = req.body;
    
    // Check if email or student number conflicts with another student
    const conflictStudent = students.find(s => 
        s.id !== parseInt(req.params.id) && 
        (s.email === email || s.studentNumber === studentNumber)
    );
    if (conflictStudent) {
        return res.status(400).json({ error: 'Email or student number already in use by another student' });
    }
    
    students[studentIndex] = {
        ...students[studentIndex],
        firstName: firstName || students[studentIndex].firstName,
        lastName: lastName || students[studentIndex].lastName,
        email: email || students[studentIndex].email,
        studentNumber: studentNumber || students[studentIndex].studentNumber,
        enrollmentDate: enrollmentDate || students[studentIndex].enrollmentDate
    };
    
    res.json(students[studentIndex]);
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
    const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
    if (studentIndex === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    students.splice(studentIndex, 1);
    res.status(204).send();
});

// Get all courses
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

// Register student to a course
app.post('/api/students/:id/courses/:courseId', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    const course = courses.find(c => c.id === parseInt(req.params.courseId));
    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }
    
    // Check if already registered
    if (student.registeredCourses.includes(parseInt(req.params.courseId))) {
        return res.status(400).json({ error: 'Student already registered to this course' });
    }
    
    student.registeredCourses.push(parseInt(req.params.courseId));
    res.json(student);
});

// Unregister student from a course
app.delete('/api/students/:id/courses/:courseId', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }
    
    const courseIndex = student.registeredCourses.indexOf(parseInt(req.params.courseId));
    if (courseIndex === -1) {
        return res.status(400).json({ error: 'Student not registered to this course' });
    }
    
    student.registeredCourses.splice(courseIndex, 1);
    res.json(student);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
