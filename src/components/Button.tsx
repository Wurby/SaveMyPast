import Link from "next/link";

const Button = ({
  children,
  href,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className="border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-950 px-4 py-1 hover:bg-gradient-to-b hover:from-slate-800 hover:to-slate-900"
      {...props}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default Button;
