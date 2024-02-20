import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ cardData, onClose }) => {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const closePopup = () => {
    setPopupOpen(false);
    onClose && onClose();
  };

  return (
    <div className={`popup ${isPopupOpen ? 'visible' : ''}`}>
      <div className='popup-content'>
        <span className='close' onClick={closePopup}>
          &times;
        </span>
        {cardData && (
          <>
            <h2>{cardData.strMeal}</h2>
            <p>{cardData.strInstructions}</p>
          </>
        )}
      </div>
    </div>
  );
};

Popup.propTypes = {
  cardData: PropTypes.object, // Make cardData optional
  onClose: PropTypes.func,
};

export default Popup;
