# Codex Calidad Software

A React components testing repository for computer science students learning software quality and testing practices.

## 📚 Purpose

This repository provides a hands-on learning experience for undergraduate computer science students to understand:
- React component development
- Component testing with Vitest and React Testing Library
- Software quality best practices
- Test-driven development (TDD)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone this repository:
```bash
git clone https://github.com/jumagoca78/Codex_Calidad_Software.git
cd Codex_Calidad_Software
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm test` - Run all tests
- `npm run test:ui` - Run tests with UI interface
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build

## 📦 Components Included

This repository includes four basic reusable React components with comprehensive tests:

### 1. Button Component
A versatile button component with multiple variants (primary, secondary, danger) and disabled state support.

**Location:** `src/components/Button.jsx`
**Tests:** `src/components/Button.test.jsx`

**Example usage:**
```jsx
<Button 
  label="Click me" 
  variant="primary" 
  onClick={() => console.log('Clicked!')} 
/>
```

### 2. Input Component
A flexible input component with label support, validation, and different input types.

**Location:** `src/components/Input.jsx`
**Tests:** `src/components/Input.test.jsx`

**Example usage:**
```jsx
<Input 
  label="Username" 
  placeholder="Enter your username" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  required={true}
/>
```

### 3. Card Component
A container component for organizing content with optional header and footer sections.

**Location:** `src/components/Card.jsx`
**Tests:** `src/components/Card.test.jsx`

**Example usage:**
```jsx
<Card title="Card Title" footer="Footer text">
  <p>Card content goes here</p>
</Card>
```

### 4. List Component
A list component for displaying items in ordered or unordered format with click handling.

**Location:** `src/components/List.jsx`
**Tests:** `src/components/List.test.jsx`

**Example usage:**
```jsx
<List 
  items={['Item 1', 'Item 2', 'Item 3']} 
  ordered={false}
  onItemClick={(item, index) => console.log(item)}
/>
```

## 🧪 Testing

This project uses **Vitest** and **React Testing Library** for component testing.

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

Each component has a corresponding test file that covers:
- Component rendering
- Props validation
- User interactions
- Edge cases
- Accessibility

### Learning from Tests

1. Open any `*.test.jsx` file to see examples of:
   - How to render components in tests
   - How to simulate user interactions
   - How to make assertions about component behavior
   - How to use test doubles (mocks, spies)

2. Try modifying a component and watch tests fail
3. Fix the tests or revert the component changes
4. Practice test-driven development by writing tests first

## 📖 Learning Path for Students

1. **Explore the Code:**
   - Read through each component file
   - Understand the props and their purposes
   - Study the JSX structure and styling

2. **Study the Tests:**
   - Review test files to understand what behavior is being tested
   - Learn how `describe`, `it`, and `expect` work
   - Understand the testing library utilities

3. **Run the Application:**
   - Start the dev server with `npm run dev`
   - Interact with the components in the browser
   - Open the browser console to see component behavior

4. **Run the Tests:**
   - Execute `npm test` to see all tests pass
   - Try breaking a component and see which tests fail
   - Fix the component and verify tests pass again

5. **Experiment:**
   - Add new props to existing components
   - Write tests for the new functionality
   - Create your own components following these patterns

6. **Challenge Yourself:**
   - Add a new component (e.g., Modal, Alert, Form)
   - Write comprehensive tests for it
   - Document the component with JSDoc comments

## 🛠️ Technology Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Vitest** - Test framework
- **React Testing Library** - Component testing utilities
- **ESLint** - Code linting and quality checks

## 📝 Code Quality

This project follows best practices for code quality:
- Components are well-documented with JSDoc comments
- Tests cover typical use cases and edge cases
- ESLint ensures code consistency
- All components are reusable and follow React best practices

## 🤝 Contributing

Students are encouraged to:
1. Fork this repository
2. Create a new branch for your feature
3. Add new components with tests
4. Submit a pull request

## 📄 License

This project is licensed under the terms included in the LICENSE file.

## 🎓 For Instructors

This repository can be used to teach:
- React fundamentals
- Component composition
- Testing best practices
- Software quality assurance
- Test-driven development
- CI/CD concepts (when integrated with GitHub Actions)

Feel free to fork and adapt for your curriculum needs.

---

**Happy Learning! 🚀**
