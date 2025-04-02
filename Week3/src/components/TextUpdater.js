import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');
  
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full max-w-md"
        placeholder="Type something..."
      />
      <p className="mt-2">Current text: {text}</p>
    </div>
  );
};

export default TextUpdater;