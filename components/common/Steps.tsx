import Image from "next/image";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}
interface StepsProps {
  title: string;
  steps: Step[];
}
export default function Steps({ title, steps }: StepsProps) {
  return (
    <div className="flex flex-col items-center gap-8 bg-primary-50 dark:bg-primary-900 px-6 py-12 lg:px-8 lg:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-ibrand">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center">
            <Image
              src={step.icon || "/placeholder.svg"}
              alt={step.title}
              width={200}
              height={200}
              className="object-contain w-40 h-40 lg:w-52 lg:h-52"
            />
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
