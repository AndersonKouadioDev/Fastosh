import Image from "next/image";

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}
interface StepsProps {
  title: string;
  description?: string;
  steps: Step[];
}
export default function Steps({ title, description, steps }: StepsProps) {
  return (
    <div className="flex flex-col items-center gap-8 bg-primary-50 dark:bg-primary-900 px-6 py-8 lg:px-8 lg:py-10 rounded-2xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-ibrand">
          {title}
        </h2>
        {description && (
          <p className="text-center text-foreground text-sm md:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col gap-8 items-center text-center"
          >
            <Image
              src={step.icon || "/placeholder.svg"}
              alt={step.title}
              width={200}
              height={200}
              className="object-contain w-40 h-40 lg:w-48 lg:h-48"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-foreground text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
