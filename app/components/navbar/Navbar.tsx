'use client'

import Link from 'next/link';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { auth } from '../../firebase/config';
import { User } from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <header className="bg-white/20 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center p-4 max-w-[1280px] mx-auto z-50">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            width="141"
            height="40"
            loading="lazy"
            className="max-w-[141px] min-w-[100px] min-h-full"
            src="/assets/logo.svg"
            alt="Travlog Logo"
          />
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!user ? (
            <>
              <LoginButton />
              <SignUpButton />
            </>
          ) : (
            <Link
              href="/profile"
              className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700"
            >
              Profile
            </Link>
          )}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:gap-x-5"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/discover"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/deals"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Special Deals
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
