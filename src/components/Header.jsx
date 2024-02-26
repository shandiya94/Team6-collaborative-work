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
    navigate('/recipe-index');
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    toggleSubscribe();
  };
  // const [dynamicStyle, setDynamicStyle] = useState({});

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setDynamicStyle({
  //         marginLeft: '0px',
  //         marginTop: '0px',
  //       });
  //     } else {
  //       setDynamicStyle({
  //         marginLeft: '50px',
  //         marginTop: '100px',
  //       });
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <header className={`mb-4 fixed-top ${bgColorclassName}`}>
      <nav
        className='navbar navbar-expand-lg'
        style={{ width: '100%', backgroundColor: '#fff2d5' }}
      >
        <div className='container-fluid d-flex justify-content-between'>
          <Link className='navbar-brand ' to='/'>
            <h1 className='display-5  lh-1 mb-3' style={{ color: '#4c723b' }}>
              Hungry Chef
            </h1>
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
                    <Link to='/recipe-index' className='nav-link'>
                      <button className='btn btn-success'>Recipes</button>
                    </Link>
                  </li>
                </ul>
                <button
                  onClick={handleSubscribe}
                  className=' btn btn-success me-2 '
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
    </header>
  );
};

export default Header;
