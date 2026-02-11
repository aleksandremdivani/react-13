import { Link } from "react-router-dom";
const Header = ({ user, handleLogOut }) => {
  return (
    <header className="flex h-[100px] w-full justify-between px-3 items-center">
      <Link to="/" className="rounded-lg text-white bg-emerald-400 py-3 px-5">
        Logo
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          {!user && (
            <li>
              <Link to="/login" className="hover:text-blue-400">
                Log in
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {user && (
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <img src="/assets/user-icon.svg" alt="user" className="h-7 rounded-xl" />
            <h3 className="font-bold text-[22px]">{user.firstName}</h3>
          </div>
          <Link
            to="/"
            className="py-2 px-4 bg-blue-500 text-white rounded-md active:opacity-70"
            onClick={handleLogOut}
          >
            Log Out
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
