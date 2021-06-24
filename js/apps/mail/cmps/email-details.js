import { emailService } from '../services/email-services.js';


export default {
    props: ['email'],
    template: `
    <section class="mail-detail">
        <div class="detail-headet">
            <h3>{{email.subject}}</h3>
             <button @click="onClick">x</button>
        </div>
        <p>name: <span>imeailFrom</span></p>
        <p>{{email.body}}</p>
    </section>
    `,
    methods:{
        onClick(){
            this.$emit('onClick', false)
        }
    },
    created() {
    },
};

