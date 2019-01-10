# Notes app using nodejs

This project allows you to create, read, remove and list notes.
All notes must have a title and a body

## Getting Started

Use command line to run this project.

### Prerequisites

You must have nodejs installed.


### Installing

To use this app you need to install all node modules required.
Open the terminal inside the project folder and run the following command:

```
npm install
```


## Running the project. 

All this commands should be executed on the terminal, inside the folder.

To create a note:

```
node app.js add --title "Note 1" --body "My first note"
```

To read a note:

```
node app.js read --title "Note 1"
```

To remove a note:

```
node app.js remove --title "Note 1"
```

To list all notes:

```
node app.js list"
```

## Built With

* [Nodejs](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) 
* [lodash](https://www.npmjs.com/package/lodash)
* [yargs](https://www.npmjs.com/package/yargs)

## Acknowledgments

* This project was created based on Andrew Mead nodejs course.
* Link: https://www.udemy.com/the-complete-nodejs-developer-course-2/