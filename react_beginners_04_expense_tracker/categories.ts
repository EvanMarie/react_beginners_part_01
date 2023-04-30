/* 
- list of categories that all components will utilize
- must be set "as const" so that Zod will accept it for validating input categories
- by creating a unique file for categories, it can be imported into each component
    and does not cause complications by needing to dictate the order in which items
    are called or imported.
*/

const categories = [
  "Groceries",
  "Utilities",
  "Entertainment",
  "Other",
] as const;


export default categories;