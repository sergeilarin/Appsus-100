import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    template: `
    <ul class="email-list">
        <li v-for="email in emails" :key="email.id" class="email-preview-container">
            <email-preview @click.native="select(email.id)" :email="email" />
            <div class="actions">
                <button @click="remove(email.id)">x</button>
            </div>
        </li>
    </ul>
    `,
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId);
        },
        select(emailId) {
            this.$emit('selected', emailId);
        },
    },
    components: {
        emailPreview
    }

};