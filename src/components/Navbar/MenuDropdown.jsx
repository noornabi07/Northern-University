import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuDropdown = () => {
  return (
    <div className="text-white text-lg flex gap-5">
      <div className="flex items-center gap-1">
              <Link>Home</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>About NUB</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>Academic</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>Admission</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>Campus Life</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>Management</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      <div className="flex items-center gap-1">
              <Link>Contact</Link>
              <IoMdArrowDropdown className="mt-1"></IoMdArrowDropdown>
      </div>
      
    </div>
  );
};

export default MenuDropdown;
