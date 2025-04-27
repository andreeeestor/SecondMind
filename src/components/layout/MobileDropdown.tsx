import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

interface MobileDropdownProps {
  title: string;
  items: string[];
}

export default function MobileDropdown({ title, items }: MobileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <li className="w-full">
      <div 
        className="flex items-center justify-between w-full py-2 px-4 border-b border-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <CaretDown 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
          size={16} 
        />
      </div>
      
      <div 
        className={`overflow-hidden bg-gray-50 transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul>
          {items.map((item, index) => (
            <li 
              key={index}
              className="py-2 px-8 text-sm border-b border-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}