import React from 'react';
import { logo } from '../assets/images/index';
import Container from './Container';
import SearchInput from './SearchInput';

const Header = () => {
    return (
        <div className='border-b-[1px] border-slate-300'>
            <Container className="py-7 flex items-center gap-x-3 md:gap-x-7 justify-between">
                <img src={logo} alt="Logo" className='w-20'/>
                <SearchInput />
                <div className='hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText'>
                    <p>navlinks</p>
                    <p>user</p>
                    <p>cart</p>
                </div>

            </Container>
        </div>
    );
};

export default Header;