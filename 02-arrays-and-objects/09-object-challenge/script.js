// Step 1
const library = [
  {
    title: 'The Road Less Traveled',
    author: 'M. Scott Peck M.D.',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'The Divided Self',
    author: 'R. D. Lang',
    status: {
      own: true,
      reading: false,
      read: true,
    },
  },
  {
    title: 'Principia',
    author: 'Isaac Newton',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Technopoly',
    author: 'Neil Postman',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Mask of Sanity',
    author: 'Harvey M. Cleckley',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];

// Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);