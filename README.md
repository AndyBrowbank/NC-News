[NC NEWS]

NC-News is a Reddit-like news app, in which you can

== read articles
== leave comments
== vote on both articles and comments.

Hosted version You can find the hosted version of the app [here](https://nc-nooz.netlify.app/).

The homepage contains a list of articles, which you can sort by number of votes, comments, and the date it was published. You can choose to list articles by topic.

Every article has its own comments section, for users to leave their own comment and vote on other user's comments.

The app was built using Node.js/React, and uses a back-end API that was built using Express (see below for the link to this API, as will as its repository).

Installation To install, simply clone the repository using the link above. Then, you can cd into the nc-news folder and use the following scripts to run the project locally:

Available Scripts In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

npm test Launches the test runner in the interactive watch mode. See the section about running tests for more information.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Back-end links This app uses a bespoke api, which you can find [here](https://h-e-r-o-i-k.herokuapp.com/)

You can find the repository for the back-end project [here](https://github.com/northcoders/be-nc-news)

This project was bootstrapped with Create React App.
