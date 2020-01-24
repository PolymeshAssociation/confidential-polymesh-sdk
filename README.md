[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/standard/semistandard)

# Polymesh SDK

(Insert description here)

**NOTE**: This repo uses `yarn` instead of `npm` for dependencies

Things included in the repo:

- Typescript (duh)
- Absolute imports (allow you to `import { foo } from ~/bar;` instead of `import { foo } from ../../../../bar;`. The default character is `~` but it can be changed in `tsconfig.json`)
- Eslint to enforce code style rules
- Prettier to format code on save
- Semantic release for automatic versioning
- Commitizen
- Husky to enforce conventional commits and format the code using prettier before committing

## Scripts

- `yarn build:ts` compiles typescript files into javascript and type declarations. Outputs to `dist/" directory
- `yarn build:docs` builds a documentation page from tsdoc comments in the code. Outputs to `docs/` directory
- `yarn test` runs tests and outputs the coverage report
- `yarn commit` runs the commit formatting tool (should replace normal commits)
- `yarn semantic-release` runs semantic release to calculate version numbers based on the nature of changes since the last version (used in CI pipelines)
- `yarn lint` runs the linter on all .ts files and outputs all errors
