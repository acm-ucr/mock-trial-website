export default function RightAch({
  image,
  text,
}: {
  image: string;
  text: string;
}) {
  // hidden md:block
  return (
    <section className="hidden md:block">
      <div className="grid h-130 grid-cols-1 md:grid-cols-2">
        <div className="bg-mocktrial-blue flex items-center justify-center text-white">
          <h2 className="px-6 text-center text-4xl leading-tight font-semibold tracking-wide">
            {text}
          </h2>
        </div>

        <div className="relative">
          <img
            src={image}
            alt="Achievement Image"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
