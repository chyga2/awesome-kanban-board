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
        <div className="board_add-card">
            {/* <button className='editable_display ' onClick={toggleDropdown}>{buttonText}</button> */}
            {isOpen ?(
                <ul className="dropdown-menu ">
                    <div className='card_drop_sel'><select className='marg_sel' disabled>
                        </select></div>
                    {options.map((option, id) => (
                        <li className='card_drop_li' key={id} onClick={() => handleSelect(option, id)}>{option}</li>
                    ))}
                </ul>
            ):
        
            <button className='editable_display ' onClick={toggleDropdown}>{buttonText}</button>}
        </div>
    );
}

export default DropdownButton;
