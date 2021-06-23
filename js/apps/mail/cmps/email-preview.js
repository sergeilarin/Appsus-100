

export default {
    props: ['email'],
    template: `
        <router-link class="email-preview" :to="'/mail/'+email.id">
        <div >
        <span>name:{{email.subject}}</span> <span>{{email.body}}</span> <span>{{email.sentAt}}</span> <span>{{readUnread}}</span>
        </div>
     </router-link>
    `,
    computed: {
        readUnread() {
            return (this.email.isRead) ? '✉️' : '💌';
        }
    },

};
