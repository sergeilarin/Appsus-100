import emailDetails from '../cmps/email-details.js';
import { emailService } from '../services/email-services.js';


export default {
    props: ['email'],
    template: `
            <div @mouseenter="ishover=false" @mouseleave="ishover=true" class="email-container"  >
                <div @click="openDetails" class="openDetails">
                   <span class="mail-from">{{email.from}}</span> <span class="mail-subject">{{email.subject}}</span> <span>{{email.body}}</span>
                </div>
                <div v-if="ishover">
                    <span class="date">{{setDate}}</span>   
                </div>
                <div class="prev-btn" v-if="!ishover">
                    <button @click.stop="onstar" v-if="!email.isStarred"> <img src="./imgs/icons8-christmas-star-24.png" alt=""></button>
                    <button @click.stop="onstar" v-if="email.isStarred">  <img src="./imgs/icons8-star-filled-24.png" alt=""></button>
                    <button @click.stop="set" v-if="email.isRead"><img src="./imgs/icons8-mail-50.png" alt=""></button>
                    <button @click.stop="set" v-if="!email.isRead"><img src="./imgs/icons8-email-open-50.png" alt=""></button>
                    <button @click.stop="onremove(email.id)"> <img src="./imgs/icons8-remove-30.png" alt=""></button>
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
            return (this.email.isRead) ? './imgs/icons8-mail-50.png' : "./imgs/icons8-email-open-50.png";
        },
        setDate() {
            return new Date(this.email.sentAt).toLocaleDateString();
        },
    },
    components: {
        emailDetails

    }

};
