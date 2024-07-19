type PatternProps = {
  pattern: number[][]
}
export default function Pattern({ pattern }: PatternProps) {
  return (
    <div>
      {pattern.map((row, key) => {
        return (
          <div className="flex" key={key}>
            {row.map((ele, idx) => {
              return (
                <div
                  key={idx}
                  className={`w-4 h-4 ${
                    ele === 0 && "invisible"
                  } bg-gray`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
