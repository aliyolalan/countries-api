import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#2B3743] h-20 text-white mb-[49px]">
      <div className="container mx-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/countries">Countries</NavLink>
      </div>
    </div>
  );
}
