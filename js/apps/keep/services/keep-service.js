import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js'


const KEEPS_KEY = 'notes';
const gNotes = [{
    type: "noteText",
    isPinned: false,
    title: '',
    info: {
        text: ''
    }
    },
    {
    type: "noteToDo",
    isPinned: false,
    title: '',
    info: {
        todo: [
            {
                txt: ''
            }
        ]
    }
    },
    {
    type: "noteImg",
    isPinned: false,
    title: '',
    info: {
       url: ""
    }
    },
];

export const keepService = {
    query,
    addNewNote,
    removeNote
};

function query() {
    return storageService.query(KEEPS_KEY)
        .then(notes => {
            if (notes.length > 0) {
                return notes
            }
            else {
                utilService.saveToStorage(KEEPS_KEY, gNotes);
                return Promise.resolve(gNotes)

            }
        })
}

function addNewNote(note) {
    if (!note) gNote.push(note)
    if (note.id) {
        return storageService.put(KEEPS_KEY, note);
    } else {
        return storageService.post(KEEPS_KEY, note);
    }
    //   else{
    //       this.book.reviews=[review]
    //   }


}
function removeNote(noteId) {
//   const note = getById(noteId)
    // .then(note => {
    //   const Idx = note.findIndex(note => note.id === noteId)
    //   note.splice(Idx, 1)
    //   return storageService.put(KEEPS_KEY, note);
    // })
//   return note
  return storageService.remove(KEEPS_KEY, noteId);
}
// function remove(bookId) {
//   return storageService.remove(BOOKS_KEY, bookId);

//   // const idx = gBooks.findIndex(book => book.id === bookId);
//   // gBooks.splice(idx, 1);
//   // utilService.saveToStorage(BOOKS_KEY, gBooks);
// }

// function save(book) {
//   if (book.id) {
//     return storageService.put(BOOKS_KEY, book);
//   } else {
//     return storageService.post(BOOKS_KEY, book);
//   }
//   // book.id = utilService.makeId();
//   // gBooks.unshift(book);
//   // utilService.saveToStorage(BOOKS_KEY, gBooks);
// }




// function getEmptyBook() {
//   return {
//     id: '',
//     title: '',

//   };
// }

// function getById(bookId) {
//   return storageService.get(BOOKS_KEY, bookId);
// }
