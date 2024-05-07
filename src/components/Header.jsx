import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav>
        <div className="navbar justify-between bg-base-300 ">
          <Link to="/" className="btn btn-ghost text-lg">
            Note📝
          </Link>
          <ul className="menu menu-horizontal px-1">
            <Link to="/login">
              <button className="btn btn-neutral">Login</button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
