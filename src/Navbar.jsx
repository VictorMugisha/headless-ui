import { Fragment } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function Navbar() {
  return (
    <div className="w-full text-white h-20 flex justify-between items-center px-20">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="flex items-center gap-8">
        <li>Services</li>
        <li>Products</li>
        <li>About</li>
        <li>Banking</li>
        <li>
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton>Services</MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ disabled, selected }) => (
                      <a
                        href="#"
                        className={classNames(
                          selected ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          disabled ? "opacity-50" : "",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        For Companies
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ selected }) => (
                      <a
                        href="#"
                        className={classNames(
                          selected
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        For Investors
                      </a>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        </li>
      </ul>
    </div>
  );
}
