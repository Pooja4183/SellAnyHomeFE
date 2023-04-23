import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid bg-black mb-0'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center p-3 my-0 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            <img
              src='/logo.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='Sellanyhome'
            />
          </a>
          <span className='text-muted'>&copy; 2021 Company, Inc</span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li>
            <a className='text-muted' href='/twitter/sellanyhome'>
              <img
                src='/Twitter.png'
                width='20'
                height='20'
                className='d-inline-block align-top'
                alt='twitter'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/facebook/sellanyhome'>
              <img
                src='/facebook.png'
                width='20'
                height='20'
                className='d-inline-block align-top'
                alt='facebook'
              />
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='/instagram/sellanyhome'>
              <img
                src='/insta.png'
                width='20'
                height='20'
                className='d-inline-block align-top'
                alt='insta'
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
