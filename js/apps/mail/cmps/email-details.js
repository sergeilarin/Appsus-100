import { emailService } from '../services/email-services.js';


export default {
    props: ['email'],
    template: `
    <section>
        <div>
            <h3>{{email.subject}}</h3>
             <button>x</button>
        </div>
        <p>name: <span>imeailFrom</span></p>
        <p>{{email.body}}</p>
    </section>
    `,
    created() {
    },
};

