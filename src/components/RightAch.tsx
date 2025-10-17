import React from "react";

export default function RightAch({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  return (
    <section className="grid h-100 grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center bg-blue-700 text-white">
        <h2 className="px-6 text-center text-4xl leading-tight font-semibold tracking-wide">
          {text}
        </h2>
      </div>

      <div className="relative">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
