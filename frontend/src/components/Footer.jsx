import React from 'react'

const Footer = () => {
  return (
<footer className="bg-white m-4 mt-0 shadow rounded-lg">
    <div className="bg-white shadow rounded-lg xl:shadow-none xl:rounded-none w-full mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
      <span className="bg-white text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://fooddoneright.com/" className="hover:underline bg-white">FoodDoneRight™</a>. All Rights Reserved.
      </span>
      <ul className="bg-white flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className='bg-white '>
              <a href="#" className="bg-white hover:underline me-4 md:me-6">About</a>
          </li>
          <li className='bg-white '>
              <a href="#" className="bg-white hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li className='bg-white '>
              <a href="#" className="bg-white hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li className='bg-white '>
              <a href="#" className="bg-white hover:underline">Contact</a>
          </li>
      </ul>
    </div>
</footer>

  )
}

export default Footer