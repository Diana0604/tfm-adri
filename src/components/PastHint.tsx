import PlaySound from "./PlaySound";

interface PastHintProps {
  hint: Hint;
}

const PastHint = (props: PastHintProps) => {
  const { hint } = props;
  return (
    <div className="soft-background margin-20 padding-5">
      <>
        <div>
          Conseguida de&nbsp;
          {hint.belongsTo.map((value, index, row) => {
            return (
              <span key={index}>
                {value}
                {index + 1 < row.length ? "," : undefined}{" "}
              </span>
            );
          })}
        </div>

        <div className="padding-5">{hint.type}</div>

        <div className="padding-5">{hint.name}</div>

        {hint.audio ? <PlaySound src={hint.audio} /> : undefined}
      </>
    </div>
  );
};

export default PastHint;
