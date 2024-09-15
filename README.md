# Prep

## Characters

If you wish to add new characters, you can do so by:

**Step 1:** In file `@types.ts`, add First Name to the type `CharacterName` as a possibility in the form of a string.

**Step 2:** In file `constants.ts` add a new character in the following form:
`{name: <First Name>, surname: <Surname>}`

Where

- `<First Name>` must be the same string you added to the `CharacterName` type.
- `<Surname>` is the character's surname, can be any string.

**Note:** If you miss any step or make a mistake, Visual Studio Code should let you know.

## Hints

Hints are stored in `constants.ts` as an array of arrays. Each individual array is the hints linked to a specific act. You can add as many acts as you want.

In each individual array, a list of hints is listed. Individual Hints are objects of type:

```typescript
type Hint = {
  type: HintType;
  name: string;
  hintDependency?: string;
  belongsTo: CharacterName[];
  audio?: string;
};
```

Where:

- `HintType` is one of `'Carta' | 'Postal' | 'Fotografía' | 'Grabación' | 'Poema' | 'Informe' | 'Conversación' | 'Llamada' | 'Misc' | 'Pista Disponible'`

**Note:** You can add types to the list in file `@types.ts` by adding new possible strings.

- `name`: name of hint
- `hintDependency` is an optional property where the name of another hint can be placed. This is to prevent hints from appearing if they depend on another one of the same or previous act.
- `belongseTo` is an array of `CharacterNames`. Check the file `@types.ts` to see possible names.

  **Note:** `belongsTo` is an array as one hint can belong to more than one character. It can also be left empty.

  **Note:** If you add more Characters to the play - by following the steps from the section [Characters](#characters) of this document, more `CharacterName` options will be available.

- audio is an optional property. If the hint has any audio linked, save audio inside `public/sounds/Acto <n>`. `audio` will then be a relative path of the form `"sounds/Acto <n>/<audio_file>"`.

### Extra Hints

A single vector of hints named `extraHints` is also present in the file `constants.ts`. hints can also be added to this vector. These Hints are extra and will appear "characterless" at the end of the play, once all character hints have been cleared.

# Deployment

To test locally run:

`npm run start`

This allows you to preview your changes on the browser.

To deploy to github pages:

**Step One:** Push the `main` branch with all changes.

**Step Two:** run `npm run deploy`

Your deployed webpage will be available at https://github.com/Diana0604/tfm-adri

Enjoy :)
