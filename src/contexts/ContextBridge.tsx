export default function ContextBridge<T1, T2>(props: {
  children: React.ReactNode;
  Context1: React.Context<T1>;
  Context2: React.Context<T2>;
  render: (children: React.ReactNode, value1: T1, value2: T2) => JSX.Element;
}) {
  const Context1 = props.Context1;
  const Context2 = props.Context2;

  const result = (
    <Context1.Consumer>
      {(value1) => (
        <Context2.Consumer>
          {(value2) =>
            props.render(
              <Context1.Provider value={value1}>
                <Context2.Provider value={value2}>
                  {props.children}
                </Context2.Provider>
              </Context1.Provider>,
              value1,
              value2,
            )
          }
        </Context2.Consumer>
      )}
    </Context1.Consumer>
  );

  return result;
}
