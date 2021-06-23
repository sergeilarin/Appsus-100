import { storageService } from "../../../services/async-storage-service.js";
import { utilService } from "../../../services/util-service.js";

const EMAILS_KEY = 'emails';
const gMails = [
    {id:utilService.makeId(),subject: 'Wassap?', body: 'Pick up!', isRead: true, sentAt : 1551133930594},
    {id:utilService.makeId(),subject: 'puki', body: 'Present the listed emails as read/unread', isRead: false, sentAt : 1551133930594},
    {id:utilService.makeId(),subject: 'hello', body: 'Create an email client app.', isRead: false, sentAt : 1551133930594},
    {id:utilService.makeId(),subject: 'To do', body: 'List of emails (inbox)', isRead: true, sentAt : 1551133930594},
]

export const emailService = {
    query,
    removeEmail,
    getEmailById,
    // addReview,

};



function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            if (!emails.length) {
                const emails = gMails;
                storageService.postMany(EMAILS_KEY, emails)
                return emails;
            }
            return emails

        })
}
function removeEmail(emailId) {
    console.log('hi');
    return storageService.remove(EMAILS_KEY, emailId);
}

function getEmailById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}

// function addReview(bookId, review) {
//     review.id = utilitiesService.makeId();
//     return getBookById(bookId).then(book => {
//         // return Promise.reject('ERROR GORNISHT')
//         if (!book.reviews) book.reviews = [];
//         book.reviews.push(review);
//         return storageService.put(BOOKS_KEY, book);
//     })
// }


