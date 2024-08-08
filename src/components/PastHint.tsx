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
          return <span key={index}>{value}{index + 1 < row.length ? "," : undefined} </span>
        })}
        </div>

        <div className="padding-5">{hint.type}</div>

        <div className="padding-5">{hint.name}</div>

        {hint.audio ? (
          <div className="container margin-5">
            <button
              className="button"
              onClick={() => {
                const audioURL = `${window.location.href}/${hint.audio}`;
                console.log(audioURL);
                const audio = new Audio(
                  `${window.location.href}/${hint.audio}`
                );
                audio.play();
              }}
            >
              Play Sound
            </button>
          </div>
        ) : undefined}
      </>
    </div>
  );
};

export default PastHint;
