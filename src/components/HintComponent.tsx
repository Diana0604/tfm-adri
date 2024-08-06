const HintComponent = (hint: Hint) => {
  return (
    <div>
      <div>type: {hint.type}</div>
      <div>name: {hint.name}</div>
      <button>Give Hint</button>
    </div>
  );
};

export default HintComponent;
