export default function Layout({
  children,
  className,
}: Readonly<{ children: JSX.Element; className?: string }>) {
  return (
    <div className={"  py-8 " + className}>
      <div className="sm:w-5/6 xl:w-3/5 mx-auto">{children}</div>
    </div>
  );
}
