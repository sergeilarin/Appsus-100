import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js'


const KEEPS_KEY = 'notes';
const gNotes = [{
    type: "textNote",
    isPinned: false,
    title: '',
    info: {
        text: ''
    },
    background:''
    },
    {
    type: "todoNote",
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
    isPinned: false,
    title: '',
    info: {
       url: ""
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
