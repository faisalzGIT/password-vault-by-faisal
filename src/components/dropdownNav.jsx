import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function MobileDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left -pr-10 md:hidden">
      {/* Button (hamburger) */}
      <MenuButton className="inline-flex items-center justify-center rounded-md bg-green-100 px-3 py-2 text-sm font-semibold text-green-900 shadow hover:bg-green-200 focus:outline-none">
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </MenuButton>

      {/* Dropdown Items */}
      <MenuItems
        transition
        className="absolute right-0 z-20 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition
        data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <NavLink
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-green-100 data-focus:text-green-900"
            >
              Home
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/vault"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-green-100 data-focus:text-green-900"
            >
              Vault
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/coder"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-green-100 data-focus:text-green-900"
            >
              Coder
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-green-100 data-focus:text-green-900"
            >
              About
            </NavLink>
          </MenuItem>

        </div>
      </MenuItems>
    </Menu>
  );
}
