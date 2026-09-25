import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface BtnProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center justify-center gap-3 label-caps px-8 py-4 min-h-[48px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

export function PrimaryButton({ to, href, onClick, children, className, type = "button" }: BtnProps) {
  const cls = cn(base, "bg-forest text-ivory hover:bg-gold hover:text-forest-deep", className);
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function SecondaryButton({ to, href, onClick, children, className, type = "button" }: BtnProps) {
  const cls = cn(
    base,
    "border border-current bg-transparent hover:bg-current/[0.06]",
    className
  );
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
