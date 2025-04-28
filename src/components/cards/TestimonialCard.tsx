import { Quotes } from "@phosphor-icons/react";

interface TestimonialCardProps {
  text: string;
  author: string;
  occupation: string;
  image: string;
}
export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-white border-[1px] border-slate-300 transition-all hover:shadow-lg p-8 rounded-md shadow-md">
        <Quotes color="#03a9f4" weight="fill" size={32} className="mb-4" />
        <p className="leading-relaxed mb-6">{props.text}</p>
        <a className="inline-flex items-center">
          <img
            alt="testimonial"
            src={props.image}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">
              {props.author}
            </span>
            <span className="text-gray-500 text-sm">{props.occupation}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
