import React from 'react';
import TextUpdater from './components/TextUpdater';
import FormSubmit from './components/FormSubmit';
import UserCard from './components/UserCard';
import StyledButton from './components/StyledButton';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">React.js Assignments</h1>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">1. Text Updater</h2>
        <TextUpdater />
      </div>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">2. Form Submit</h2>
        <FormSubmit />
      </div>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">3. User Card</h2>
        <UserCard name="John Doe" email="john@example.com" />
      </div>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">4. Styled Button</h2>
        <StyledButton />
      </div>
      
      <div className="mb-8 p-4 border rounded">
        <h2 className="text-xl font-semibold mb-2">5. Login Form</h2>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;