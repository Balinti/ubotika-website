import React, { useState } from 'react';

function TaraWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Replace with your actual 11 Labs conversational AI embed code
    window.open('YOUR_11_LABS_TARA_LINK', 'Tara', 'width=400,height=600');
    // Or use iframe embed if you prefer
  };

  return (
    <div className="tara-widget">
      <button className="tara-button" onClick={handleClick} title="Speak with Tara">
        🎙️
      </button>
    </div>
  );
}

export default TaraWidget;
