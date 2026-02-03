// API Base URL
const API_BASE_URL = '/api';

// State management
let currentStudentId = null;
let allCourses = [];

// DOM Elements
const studentForm = document.getElementById('student-form');
const studentsTableBody = document.getElementById('students-tbody');
const formTitle = document.getElementById('form-title');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');
const courseModal = document.getElementById('course-modal');
const closeModal = document.querySelector('.close');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadStudents();
    loadCourses();
    setupEventListeners();
    setTodayDate();
});

// Set today's date as default
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('enrollmentDate').value = today;
}

// Event Listeners
function setupEventListeners() {
    studentForm.addEventListener('submit', handleFormSubmit);
    cancelBtn.addEventListener('click', resetForm);
    closeModal.addEventListener('click', () => {
        courseModal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === courseModal) {
            courseModal.style.display = 'none';
        }
    });
}

// Load all students
async function loadStudents() {
    try {
        const response = await fetch(`${API_BASE_URL}/students`);
        const students = await response.json();
        displayStudents(students);
    } catch (error) {
        console.error('Error loading students:', error);
        showMessage('Error loading students', 'error');
    }
}

// Load all courses
async function loadCourses() {
    try {
        const response = await fetch(`${API_BASE_URL}/courses`);
        allCourses = await response.json();
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

// Display students in table
function displayStudents(students) {
    if (students.length === 0) {
        studentsTableBody.innerHTML = '<tr><td colspan="5" class="no-data">No students registered yet</td></tr>';
        return;
    }

    studentsTableBody.innerHTML = students.map(student => `
        <tr>
            <td>${student.studentNumber}</td>
            <td>${student.firstName} ${student.lastName}</td>
            <td>${student.email}</td>
            <td>${student.enrollmentDate}</td>
            <td>
                <button class="btn btn-action btn-edit" onclick="editStudent(${student.id})">Edit</button>
                <button class="btn btn-action btn-courses" onclick="manageCourses(${student.id})">Courses</button>
                <button class="btn btn-action btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        studentNumber: document.getElementById('studentNumber').value.trim(),
        enrollmentDate: document.getElementById('enrollmentDate').value
    };

    try {
        let response;
        if (currentStudentId) {
            // Update existing student
            response = await fetch(`${API_BASE_URL}/students/${currentStudentId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } else {
            // Create new student
            response = await fetch(`${API_BASE_URL}/students`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        }

        if (response.ok) {
            showMessage(currentStudentId ? 'Student updated successfully' : 'Student added successfully', 'success');
            resetForm();
            loadStudents();
        } else {
            const error = await response.json();
            showMessage(error.error || 'An error occurred', 'error');
        }
    } catch (error) {
        console.error('Error saving student:', error);
        showMessage('Error saving student', 'error');
    }
}

// Edit student
async function editStudent(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/students/${id}`);
        const student = await response.json();
        
        currentStudentId = id;
        document.getElementById('student-id').value = id;
        document.getElementById('firstName').value = student.firstName;
        document.getElementById('lastName').value = student.lastName;
        document.getElementById('email').value = student.email;
        document.getElementById('studentNumber').value = student.studentNumber;
        document.getElementById('enrollmentDate').value = student.enrollmentDate;
        
        formTitle.textContent = 'Edit Student';
        submitBtn.textContent = 'Update Student';
        
        // Scroll to form
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error loading student:', error);
        showMessage('Error loading student details', 'error');
    }
}

// Delete student
async function deleteStudent(id) {
    if (!confirm('Are you sure you want to delete this student?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/students/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            showMessage('Student deleted successfully', 'success');
            loadStudents();
        } else {
            showMessage('Error deleting student', 'error');
        }
    } catch (error) {
        console.error('Error deleting student:', error);
        showMessage('Error deleting student', 'error');
    }
}

// Manage courses for a student
async function manageCourses(studentId) {
    try {
        const response = await fetch(`${API_BASE_URL}/students/${studentId}`);
        const student = await response.json();
        
        document.getElementById('modal-student-name').textContent = 
            `${student.firstName} ${student.lastName} (${student.studentNumber})`;
        
        const coursesList = document.getElementById('courses-list');
        coursesList.innerHTML = allCourses.map(course => {
            const isRegistered = student.registeredCourses.includes(course.id);
            return `
                <div class="course-item ${isRegistered ? 'registered' : ''}">
                    <div class="course-info">
                        <div class="course-code">${course.code}</div>
                        <div class="course-name">${course.name}</div>
                        <div class="course-credits">${course.credits} credits</div>
                    </div>
                    <div class="course-actions">
                        ${isRegistered 
                            ? `<button class="btn btn-action btn-unregister" onclick="unregisterCourse(${studentId}, ${course.id})">Unregister</button>`
                            : `<button class="btn btn-action btn-register" onclick="registerCourse(${studentId}, ${course.id})">Register</button>`
                        }
                    </div>
                </div>
            `;
        }).join('');
        
        courseModal.style.display = 'block';
    } catch (error) {
        console.error('Error loading student courses:', error);
        showMessage('Error loading course information', 'error');
    }
}

// Register student to a course
async function registerCourse(studentId, courseId) {
    try {
        const response = await fetch(`${API_BASE_URL}/students/${studentId}/courses/${courseId}`, {
            method: 'POST'
        });

        if (response.ok) {
            showMessage('Successfully registered to course', 'success');
            manageCourses(studentId); // Refresh the modal
        } else {
            const error = await response.json();
            showMessage(error.error || 'Error registering to course', 'error');
        }
    } catch (error) {
        console.error('Error registering to course:', error);
        showMessage('Error registering to course', 'error');
    }
}

// Unregister student from a course
async function unregisterCourse(studentId, courseId) {
    if (!confirm('Are you sure you want to unregister from this course?')) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/students/${studentId}/courses/${courseId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            showMessage('Successfully unregistered from course', 'success');
            manageCourses(studentId); // Refresh the modal
        } else {
            const error = await response.json();
            showMessage(error.error || 'Error unregistering from course', 'error');
        }
    } catch (error) {
        console.error('Error unregistering from course:', error);
        showMessage('Error unregistering from course', 'error');
    }
}

// Reset form
function resetForm() {
    currentStudentId = null;
    studentForm.reset();
    setTodayDate();
    formTitle.textContent = 'Add New Student';
    submitBtn.textContent = 'Add Student';
}

// Show message
function showMessage(message, type) {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    messageDiv.style.background = type === 'success' 
        ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
        : 'linear-gradient(135deg, #f44336, #da190b)';
    
    document.body.appendChild(messageDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => messageDiv.remove(), 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
