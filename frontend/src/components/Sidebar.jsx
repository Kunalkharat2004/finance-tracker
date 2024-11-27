import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = "block px-4 py-2 rounded hover:bg-blue-600 hover:text-white";
  const activeLinkClasses = "bg-blue-600 text-white";

  return (
    <div className="bg-gray-200 w-60 h-full p-4">
      <h2 className="text-xl font-bold mb-6">Finance Planner</h2>
      <nav className="space-y-2">
      
        <NavLink to="/add-client" end className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Add Client Information
        </NavLink>
        <NavLink to="/show-finance" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Show Finance Details
        </NavLink>
        <NavLink to="/update-client" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Update Client
        </NavLink>
        <NavLink to="/delete-client" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Delete Client
        </NavLink>
        <NavLink to="/search-client" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Search Client
        </NavLink>
        <NavLink to="/salary-slip" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>
          Salary Slip Generation
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
