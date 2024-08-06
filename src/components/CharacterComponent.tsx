const CharacterComponent = (character: Character) => {
  return (
    <div className="character">
      {character.title} {character.name} {character.surname}
    </div>
  );
};

export default CharacterComponent;
