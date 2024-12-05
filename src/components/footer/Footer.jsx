import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* footer */}


<footer className="bg-secondary text-primary py-4 mt-4 shadow  ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm  sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">Himras</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
    </div>
  )
}
