import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}
export default function MainContainer(props: MainContainerProps) {
  return <main className="container mx-auto relative md:px-0 px-4">{props.children}</main>;
}
