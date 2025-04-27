import { Icon } from "@phosphor-icons/react";

interface BadgeProps {
  text: string;
  Icon: Icon;
}
export default function Badge({ text, Icon }: BadgeProps) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-sky-100 px-2.5 py-0.5 text-sky-700">
      <Icon className="-ms-1 me-1.5 size-4" />

      <p className="text-sm whitespace-nowrap">| {text}</p>
    </span>
  );
}
