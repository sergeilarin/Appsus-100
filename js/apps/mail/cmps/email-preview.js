import emailDetails from '../cmps/email-details.js';

export default {
    props: ['email'],
    template: `
            <div class="email-container">
                <div @click="openDetails">
                    <span>name:{{email.subject}}</span> <span>{{email.body}}</span>
                </div>
                <div>
                    <span class="date">{{setDate}}</span> 
                    <span @click.stop="set">{{readUnread}}</span>
                </div>
                <email-details v-if="isclicked" :email="this.email"  @onClick="setClick"></email-details> 
            </div>

    `,
    data() {
        return {
            isclicked: false
        };
    },
    methods: {
        openDetails() {
            this.isclicked = !this.isclicked
        },
        set() {
            this.email.isRead = !this.email.isRead
        },
        setClick(is) {
            this.isclicked = is
        }
    },
    computed: {
        readUnread() {
            return (this.email.isRead) ? '✉️' : '💌';
        },
        setDate() {
            return new Date(this.email.sentAt).toLocaleDateString();
        },
    },
    components: {
        emailDetails

    }

};
