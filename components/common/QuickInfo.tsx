interface QuickInfoProps {
  title: string;
  description: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}
export default function QuickInfo({
  title,
  description,
  items,
}: QuickInfoProps) {
  return (
    <section>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1 font-ibrand">
        {title}
      </h1>
      <p className="text-foreground mb-8">{description}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div className="flex flex-col items-start gap-2" key={index}>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white">
              {item.icon}
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm md:text-base text-foreground">
                {item.title}
              </p>
              <p className="text-lg md:text-xl font-bold hover:underline cursor-pointer transition-all duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
