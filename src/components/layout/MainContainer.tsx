import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}
export default function MainContainer(props: MainContainerProps) {
  return <main className="container mx-auto">{props.children}</main>;
}
