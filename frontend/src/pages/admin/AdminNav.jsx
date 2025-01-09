import React from 'react';
import { GrUserAdmin } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 m-5 shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-6">
        <GrUserAdmin className="text-7xl text-[#ff4221] m-2 p-2" />
         <p className="text-lg font-semibold text-[#ff4221]">Admin</p>
      </div>
      <hr />

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-[#ff4221] font-bold"
                  : "text-gray-700 dark:text-white hover:text-[#ff4221]"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-new-post"
              className={({ isActive }) =>
                isActive
                 ? "text-[#ff4221] font-bold"
                  : "text-gray-700 dark:text-white hover:text-[#ff4221]"
              }
            >
              Add New Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/ManageItems"
              className={({ isActive }) =>
                isActive
                 ? "text-[#ff4221] font-bold"
                  : "text-gray-700 dark:text-white hover:text-[#ff4221]"
              }
            >
             Manage Items
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
