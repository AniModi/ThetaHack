export default function ContextBridge<T>({
  Context,
  children,
  render,
}: {
  children: React.ReactNode;
  Context: React.Context<T>;
  render: (children: React.ReactNode) => JSX.Element;
}) {
  return (
    <Context.Consumer>
      {(value) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
}
