import emailDetails from '../cmps/email-details.js';

export default {
    props: ['email'],
    template: `
        <div >
            <div class="email-container">
                <div @click="openDetails">
                    <span>name:{{email.subject}}</span> <span>{{email.body}}</span> <span>{{setDate}}</span> <span>{{readUnread}}</span>
                </div>
                <email-details v-if="isclicked" :email="this.email" ></email-details> 
            </div>
        </div>
    `,
    data() {
        return {
            isclicked: false
        };
    },
    methods: {
        openDetails(){
            this.isclicked=!this.isclicked
        },
    },
    computed: {
        readUnread() {
            return (this.email.isRead) ? '✉️' : '💌';
        },
        setDate(){
         return   new Date(this.email.sentAt).toLocaleDateString();
        }
    },
    components: {
        emailDetails

    }

};
