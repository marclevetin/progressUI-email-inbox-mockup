# ProgressUI Email Mockup
This project is a simple mockup of an Email inbox.  MVP requirements were:

1)  Use the ProgressUI framework
2)  Have an email search that filters the email by subject (or more)
3)  Explore a new https://www.json-generator.com/ just for kicks

## Solution
A quick solution bootstrapped with Create React App.  This project is not currently live.

## Installation

1)  Clone the repo and `cd` into the folder.
2)  `yarn install` will load all dependencies.
3)  `yarn start` will fire up a server.
4)  Navigate to `localhost:3000` if a browser didn't open automatically.


## Known issues as of June 12:
- Avatar in email has a border radius of 50% instead of the overridden 2px.  Not sure why.  Need to investigate.
- Labels are missing color blocks.
- Width of dark sidebar is incorrect.
- Images aren't floating correctly in Email Details
- When an unread email is clicked, the status doesn't change.
- When "no results" for Search appears, the UI should have a more prominent indicator of failure.
- Page is not responsive.
