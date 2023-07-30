// can put the logo here, will show top left
import Logo from '../assets/Logo.webp';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
