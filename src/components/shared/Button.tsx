import { ReactElement } from "react";

interface ButtonProps {
  text: string;
  withIcon?: ReactElement;
  className?: string;
}
export default function Button(props: ButtonProps) {
  return (
    <button
      className={`
      cursor-pointer
        relative z-0 flex items-center gap-2 overflow-hidden rounded-full border-[2px] 
         ${props.className} px-4 py-2 font-semibold
         text-white transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] 
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      {props.withIcon}
      <span>{props.text}</span>
    </button>
  );
}
