import foodBackgroundImage from '../assets/foodBackground.jpg';

const HeroPage = () => {
  return (
    <>
      <div
        className='d-flex flex-column justify-content-start align-items-center'
        style={{
          backgroundImage: `url(${foodBackgroundImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
        }}
      >
        <div
          className='d-flex flex-column align-items-end'
          style={{
            fontSize: '2rem',
            color: '#4c723b',
            marginTop: '12%',
            marginRight: '13%',
          }}
        >
          <div className='d-flex flex-column' style={{ width: '40%' }}>
            <p>
              Welcome to Hungry Chef, your ultimate destination for easy and
              delicious recipes from around the globe! Whether you're a seasoned
              chef or a novice in the kitchen, our app is your go-to resource
              for satisfying your culinary cravings.
            </p>
            <br />
            <p>Check out our new recipes!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
