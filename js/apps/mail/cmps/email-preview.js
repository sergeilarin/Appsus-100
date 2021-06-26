import emailDetails from '../cmps/email-details.js';
import { emailService } from '../services/email-services.js';


export default {
    props: ['email'],
    template: `
            <div @mouseenter="ishover=false" @mouseleave="ishover=true" class="email-container"  >
                <div @click="openDetails">
                    <span>name:{{email.subject}}</span> <span>{{email.body}}</span>
                </div>
                <div v-if="ishover">
                    <span class="date">{{setDate}}</span>   
                </div>
                <div class="prev-btn" v-if="!ishover">
                    <button @click.stop="onstar">star</button>
                    <button @click.stop="set">{{readUnread}}</button>
                    <button @click.stop="onremove(email.id)">x</button>
                </div>
                <email-details v-if="isclicked" :email="this.email"  @onClick="setClick"></email-details> 
            </div>

    `,
    data() {
        return {
            isclicked: false,
            ishover:true
        };
    },
    methods: {
        openDetails() {
            console.log('bu');
            this.isclicked = !this.isclicked
        },
        set() {
            this.email.isRead = !this.email.isRead
            emailService.save(this.email)

        },
        setClick(is) {
            this.isclicked = is
        },
        onremove(emailId) {
            this.$emit('onremove', emailId);
        },
        onstar(){
            this.email.isStarred = !this.email.isStarred
            emailService.save(this.email)
            console.log(this.email.isStarred);

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
