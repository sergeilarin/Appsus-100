import { emailService } from '../services/email-services.js';


export default {
    template: `
    <footer class="appsus-footer">
        <h3>&copy; Coffeerights</h3>
    </footer>
    `,
    data() {
        return {
            email: null,
           
        };
    },

    created() {
        const { emailId } = this.$route.params;
        console.log(emailId);

        emailService.getEmailById(emailId).then((email) => {
            console.log(email);
            this.email = email;
        });
        // this.vetranBook;
    },
};

