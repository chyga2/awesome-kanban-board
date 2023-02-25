import React, {useState} from 'react';

function DropdownButton({buttonText, options, onSelect, id}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function handleSelect(selectedCard) {
        onSelect(selectedCard, id);
        setIsOpen(false);
    }
    return (
        <div className="dropdown-button-container">
            <button onClick={toggleDropdown}>{buttonText}</button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {options.map((option, id) => (
                        <li key={id} onClick={() => handleSelect(option, id)}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownButton;
