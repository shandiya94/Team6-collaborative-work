import { BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../hooks/themeContext';
import { useContext, useState } from 'react';
import { subscribeContext } from '../hooks/subscribeContext';
import { Link } from 'react-router-dom';
import logo from '../assets/Hungry chef (3).png';

import { foodContext } from '../hooks/foodContext';

const Header = () => {
  const { darkMode, handleToggle, bgColorclassName } = useContext(ThemeContext);

  const { fetchProduct, setSearchInput } = useContext(foodContext);
  const [foodSearch, setFoodSearch] = useState('');
  const { toggleSubscribe } = useContext(subscribeContext);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProduct(foodSearch); // Pass the search input to fetchProduct
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toggleSubscribe();
    fetchProduct(setSearchInput); // Pass the search input to fetchProduct
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${bgColorclassName}`}
      style={{ width: '100%', height: '150px', backgroundColor: '#fff2d5' }}
    >
      <div className='container-fluid'>
        <Link
          className='navbar-brand d-none d-sm-none d-md-none d-lg-block'
          to='/'
        >
          <img
            className='flex-shrink-1'
            style={{
              height: '50%',
              width: '50%',
              marginLeft: '50px',
              marginTop: '100px',
              backgroundColor: '#fff2d5',
              borderRadius: '50%',
            }}
            src={logo}
            alt='Hungry Chef Logo'
          />
        </Link>
        <div className='d-block d-sm-block d-md-block d-lg-none'>
          {darkMode ? (
            <BsBrightnessHigh className='text-success' onClick={handleToggle} />
          ) : (
            <BsFillMoonFill onClick={handleToggle} />
          )}
        </div>
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

        <div
          className='collapse navbar-collapse mh-25'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                <button className='btn btn-success'>Home</button>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/recipeIndex' className='nav-link'>
                <button className='btn btn-success'>Recipes</button>
              </Link>
            </li>
          </ul>

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
              className='btn btn-success'
              type='submit'
            >
              Search
            </button>
            <div className='nav-item'>
              <button
                onClick={handleSubscribe}
                className='btn btn-success p-2 ms-4'
                type='submit'
              >
                subscribe
              </button>
            </div>
          </form>
          <div className='d-md-block d-none px-3'>
            {darkMode ? (
              <BsBrightnessHigh
                className='text-success'
                onClick={handleToggle}
              />
            ) : (
              <BsFillMoonFill onClick={handleToggle} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
