import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] md:min-h-screen flex items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-28 xl:mb-36 scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-24 ${className}`}
    >
      <div className="w-full max-w-full">{children}</div>
    </section>
  );
}
