import Link from "next/link";

export const ButtonLink = ({
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

export const Button = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="border border-slate-500 bg-gradient-to-b from-slate-800 to-slate-950 px-4 py-1 hover:bg-gradient-to-b hover:from-slate-800 hover:to-slate-900"
      {...props}
    >
      <p>{children}</p>
    </button>
  );
};
