import React, { useState } from 'react';
// import twitterIcon from './assets/images/twitter-icon.png';
import "./community.css"
import { socialLinks } from '../utils/stub-generation';
import Link from 'next/link';

const SocialCloud: React.FC = () => {
  const [value, setValue] = useState("Where Code Meets Community!")
  return (
    <section className='bg-neutral-100 py-8'>
      <div className="max-w-3xl mx-auto text-center ">
        <h2 className="h2 text-secondary-300 ">
          🐰 Join the Keploy community ✨
        </h2>
      </div>
      <div className="social-cloud" >
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link link-${index + 1}`}
            title={link.title}
            onMouseEnter={() => setValue(link.description)}
            onMouseLeave={() => setValue(" Where Code Meets Community!")}
          >
            {link.icon}
          </Link>

        ))}

      </div>
      <p className='text-center text-xl text-gray-700 '>{value}</p>

    </section>

  );
};

export default SocialCloud;