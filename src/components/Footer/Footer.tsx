import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
            <div className='mt-10 bg-[#efefef]  flex flex-col md:flex-row justify-center items-center gap-6 py-4 md:justify-around'>
            <div className='font-semibold text-lg md:text-xl uppercase text-center'>About Canvastar
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Our Company</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>References</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Our Activities</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Contact</Link></div>
            </div>
            <div className='font-semibold text-lg md:text-xl text-center uppercase'>Customer Service
               <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Return Policy</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Sales Contract</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Delivery & Packaking</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Private Policy</Link></div>
            </div>
            <div className='font-semibold text-lg md:text-xl text-center uppercase'>Help Centre
              <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>What is Canvas Art Print?</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>What is Limited Edition?</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Custom Art Print?</Link></div>
                <div className='font-normal text-sm normal-case text-gray-500'><Link href={"/"}>Custom Size?</Link></div>
                </div> 
        </div>
    );
}

export default Footer;
