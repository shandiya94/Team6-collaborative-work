import { BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../hooks/themeContext';
import { useContext, useState } from 'react';
import { subscribeContext } from '../hooks/subscribeContext';
import { Link } from 'react-router-dom';

import { foodContext } from '../hooks/foodContext';

const Header = () => {
  const { darkMode, handleToggle, bgColorclassName } = useContext(ThemeContext);
  const { setCategory, fetchProduct } = useContext(foodContext);
  const [foodSearch, setFoodSearch] = useState('');
  const { toggleSubscribe } = useContext(subscribeContext);

  function handleCategorySelect(category) {
    fetchProduct(category);
    setCategory(category);
  }

  const handleInputChange = (e) => {
    setFoodSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProduct(foodSearch, '');
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    toggleSubscribe();
  };

  return (
    <nav className={`navbar navbar-expand-lg ${bgColorclassName}`}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Foodie
        </a>
        <button
          className='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item '>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link active' aria-current='page'>
                About
              </Link>
            </li>
          </ul>

          <div className='p-2 mx-4 '>
            {darkMode ? (
              <BsBrightnessHigh className='text-light' onClick={handleToggle} />
            ) : (
              <BsFillMoonFill onClick={handleToggle} />
            )}
          </div>

          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearch}
              className='btn btn-outline-success'
              type='submit'
            >
              Search
            </button>
            <button
              onClick={handleSubscribe}
              className='btn btn-outline-success p-2 ms-4'
              type='submit'
            >
              subscribe
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
