import { useState } from 'react'
import './App.css'
import { Button, Input, Card, List } from './components'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [items] = useState(['React', 'Vite', 'Testing', 'Components'])

  const handleButtonClick = () => {
    setCount(count + 1)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleItemClick = (item, index) => {
    alert(`Clicked on ${item} at index ${index}`)
  }

  return (
    <div className="app">
      <h1>React Components Testing Codex</h1>
      <p className="subtitle">
        A repository for learning basic React components and testing
      </p>

      <div className="components-grid">
        <Card title="Button Component" footer="Click counter example">
          <p>This is a reusable button component with different variants.</p>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <Button label="Primary" variant="primary" onClick={handleButtonClick} />
            <Button label="Secondary" variant="secondary" onClick={handleButtonClick} />
            <Button label="Danger" variant="danger" onClick={handleButtonClick} />
            <Button label="Disabled" variant="primary" disabled={true} />
          </div>
          <p>Button clicked: {count} times</p>
        </Card>

        <Card title="Input Component" footer="Try typing in the input field">
          <p>This is a reusable input component with labels and validation.</p>
          <Input 
            label="Username" 
            placeholder="Enter your username" 
            value={inputValue}
            onChange={handleInputChange}
            required={true}
          />
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter your email"
          />
          {inputValue && <p>You typed: {inputValue}</p>}
        </Card>

        <Card title="List Component" footer="Click on any item">
          <p>This is a reusable list component for displaying items.</p>
          <h4>Unordered List:</h4>
          <List items={items} onItemClick={handleItemClick} />
          <h4>Ordered List:</h4>
          <List items={items} ordered={true} />
          <h4>Empty List:</h4>
          <List items={[]} />
        </Card>

        <Card title="Getting Started">
          <h3>For Students:</h3>
          <ol style={{ textAlign: 'left', paddingLeft: '20px' }}>
            <li>Explore the component files in <code>src/components/</code></li>
            <li>Read the component documentation and prop definitions</li>
            <li>Study the test files (<code>*.test.jsx</code>) to understand testing</li>
            <li>Run <code>npm test</code> to see all tests pass</li>
            <li>Try modifying components and seeing tests fail/pass</li>
            <li>Create your own components following these examples</li>
          </ol>
        </Card>
      </div>
    </div>
  )
}

export default App
