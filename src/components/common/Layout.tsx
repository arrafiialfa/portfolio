export default function Layout({
  children,
  className,
  style,
}: Readonly<{
  children: JSX.Element;
  className?: string;
  style?: React.CSSProperties;
}>) {
  return (
    <div style={style ?? {}} className={"  py-8 " + className}>
      <div className="px-8 sm:w-5/6 xl:w-3/5 mx-auto">{children}</div>
    </div>
  );
}
