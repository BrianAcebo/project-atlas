import type { ReactNode } from "react";

export const Card = ({
  children,
  className,
}: {
  children?: ReactNode | string;
  className?: string | undefined;
}) => {
  return (
    <article
      className={`${className} bg-brand-blue-dark relative overflow-visible rounded-2xl p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_-2px_12px_rgba(233,221,255,0.25),0_-2px_28px_rgba(187,155,255,0.12),0_0.5px_0px_rgba(255,255,255,0.3)]`}
    >
      {/* Background gradient layer */}
      <div className="to-brand-blue-dark pointer-events-none absolute inset-0 z-0 rounded-2xl bg-gradient-to-b from-white/5 via-transparent" />

      {/* Bottom dark gradient overlay */}
      <div className="from-brand-blue-dark bg-brand-blue-dark pointer-events-none absolute right-0 -bottom-[2px] left-0 z-10 h-5 rounded-br-2xl rounded-bl-2xl bg-gradient-to-t via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </article>
  );
};
