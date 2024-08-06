interface HintProps {
  hint?: Hint;
}

const HintComponent = (props: HintProps) => {
  const { hint } = props;
  return (
    <div>
      {hint ? <div>type: {hint.type}</div> : undefined}
      {hint ? <div>type: {hint.name}</div> : undefined}
      <div className="container">
        {hint ? <div className="button">Give Hint</div> : undefined}
      </div>
    </div>
  );
};

export default HintComponent;
