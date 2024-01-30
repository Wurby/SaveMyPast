export const HorizontalDivider = ({ className = "" }) => {
  return (
    <div
      className={`h-0.5 w-5/6 justify-self-center bg-gradient-to-r from-slate-500/5 via-slate-400 to-slate-500/5 blur-[1px] ${className}`}
    ></div>
  );
};

export const VerticalDivider = ({ className = "" }) => {
  return (
    <div
      className={`h-5/6 w-0.5 self-center bg-gradient-to-b from-slate-500/5 via-slate-400 to-slate-500/5 blur-[1px] ${className}`}
    ></div>
  );
};
