import React from 'react';
// can put the logo here, will show top left
import Logo from '';

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
<a href='#contact' className='btn btn-lg'>Button poggers</a>
export default Header;
