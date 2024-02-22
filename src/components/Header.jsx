import { BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../Hooks/themeContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { foodContext } from '../Hooks/foodContext';

const Header = () => {
  const { darkMode, handleToggle, bgColorclassName } = useContext(ThemeContext);
  const { fetchProduct, setSearchInput } = useContext(foodContext);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProduct(setSearchInput); // Pass the search input to fetchProduct
  };

  return (
    <nav className={`navbar navbar-expand-lg ${bgColorclassName}`}>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          LOGO
        </Link>
        <button
          className='navbar-toggler'
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
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/RecipeIndexPage' className='nav-link active'>
                Recipe Index
              </Link>
            </li>
          </ul>

          <div className='p-2 mx-4'>
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
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
