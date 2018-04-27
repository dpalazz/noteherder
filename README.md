# NOTEHERDER

/                 => when signed in
                    => /notes
                  => when signed out
                    => /sign-in 
/sign-in          => SignIn
/notes            => Main
/notes/:noteId    => Main with a specific note loaded
404?

## Getting Started

Copy `src/base.example.js` to `src/base.js` and fill in your firebase config details

Run `yarn install` (or `npm install`) and `yarn start` (or `npm start`)