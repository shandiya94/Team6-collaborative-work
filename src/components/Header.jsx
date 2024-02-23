import { BsBrightnessHigh, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../hooks/themeContext';
import { useContext, useState, useEffect } from 'react';
import { subscribeContext } from '../hooks/subscribeContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Hungry chef (3).png';
import { foodContext } from '../hooks/foodContext';

const Header = () => {
  const { darkMode, handleToggle, bgColorclassName } = useContext(ThemeContext);

  const { setSearchInput } = useContext(foodContext);
  const [foodSearch, setFoodSearch] = useState('');
  const { toggleSubscribe } = useContext(subscribeContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFoodSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(foodSearch);
    navigate('/recipeIndex');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toggleSubscribe();
  };
  const [dynamicStyle, setDynamicStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDynamicStyle({
          marginLeft: '0px',
          marginTop: '0px',
        });
      } else {
        setDynamicStyle({
          marginLeft: '50px',
          marginTop: '100px',
        });
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg  ${bgColorclassName}`}
      style={{ width: '100%', height: '150px', backgroundColor: '#fff2d5' }}
    >
      <div className='container-fluid d-flex justify-content-between'>
        <Link className='navbar-brand ' to='/'>
          <img
            className='flex-shrink-1'
            style={{
              height: '50%',
              width: '50%',
              backgroundColor: '#fff2d5',
              borderRadius: '50%',
              ...dynamicStyle,
            }}
            src={logo}
            alt='Hungry Chef Logo'
          />
        </Link>
        <div>
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
          <div className='nav-item'>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav '>
                <li>
                  <Link to='/' className='nav-link '>
                    <button className='btn btn-success'>Home</button>
                  </Link>
                </li>
                <li>
                  <Link to='/recipeIndex' className='nav-link'>
                    <button className='btn btn-success'>Recipes</button>
                  </Link>
                </li>
              </ul>
              <button
                onClick={handleSubscribe}
                className=' btn btn-success mr-5 '
                type='submit'
              >
                subscribe
              </button>

              <form className='d-flex align-items-center' role='search'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  id='searchInput'
                  onChange={handleInputChange}
                  autoComplete='off'
                  style={{ maxWidth: '120px' }}
                />
                <button
                  onClick={handleSearch}
                  className='btn btn-success'
                  type='submit'
                >
                  Search
                </button>
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
