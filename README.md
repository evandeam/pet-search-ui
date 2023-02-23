## View the UI
`npm i` dependencies and `npm run dev` to view the app in dev mode on port 3000.

## App structure
- pages/index.tsx
   - SearchContainer
      - SearchBar
      - SearchResultsList
         - ResultListItem
            - ItemDetails

## Quick explanations of some decisions
- I wanted to be able to share state between components that were children of the SearchContainer component, so I used the useState hook and passed the useState-state and -function down to the components that needed them.
- Because of the nature of not having a real backend, I decided to import my JSON database into database.ts and export db.pets as a constant (the only part of the database I was concerned with) so that I could work with it in JavaScript.
- In helperfuncs.tsx, I declared a constant to hold an array of ResultListItems components without any filtering. I then used that constant in a switch statement to be able to parse through the values of specific props. I encountered some eslint/TypeScript errors that I was unable to resolve, but the code still ran in a dev environment.