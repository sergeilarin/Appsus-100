import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js'


const KEEPS_KEY = 'notes';
const gNotes = [{
    type: "textNote",
    id: utilService.makeId(),
    isPinned: false,
    title: '',
    info: {
        text: ''
    },
    background:''
    },
    {
    type: "todoNote",
    id: utilService.makeId(),
    isPinned: false,
    title: '',
    info: {
        todo: [
            {
                txt: ''
            }
        ]
    },
    background:''
    },
    {
    type: "imagNote",
    id: utilService.makeId(),
    isPinned: false,
    title: '',
    info: {
       url: "https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg"
    },
    background:''
    },
];

export const keepService = {
    query,
    saveNote,
    removeNote,
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

function saveNote(note) {
    if (!note) gNote.push(note)
    if (note.id) {
        return storageService.put(KEEPS_KEY, note);
    } else {
        return storageService.post(KEEPS_KEY, note);
    }
}

function removeNote(noteId) {
  return storageService.remove(KEEPS_KEY, noteId);
}
