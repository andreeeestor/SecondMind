import { useState, ReactNode } from "react";

interface NavDropdownProps {
  title: string;
  items: string[];
  icon?: ReactNode;
}

export default function NavDropdown({ title, items, icon }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li 
      className="relative cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center gap-1 py-1">
        <span>{title}</span>
        {icon && (
          <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            {icon}
          </span>
        )}
      </div>
      
      <div 
        className={`absolute top-full left-0 bg-white shadow-lg rounded-md overflow-hidden min-w-max z-10 transition-all duration-300 ${
          isOpen 
            ? "opacity-100 transform translate-y-0 pointer-events-auto" 
            : "opacity-0 transform -translate-y-2 pointer-events-none"
        }`}
      >
        <ul>
          {items.map((item, index) => (
            <li 
              key={index}
              className="px-4 py-2 text-xs hover:bg-indigo-100 hover:text-indigo-600 transition-colors whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}