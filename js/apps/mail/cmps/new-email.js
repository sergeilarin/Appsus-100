import { emailService } from '../services/email-services.js';

export default {
	template: `
    <section class="new-email">
        <h2>New Message</h2>
        <label >To: </label>
        <input v-model="newEmail.to"  type="text" placeholder="''">
        <label >Topic: </label>
        <input v-model="newEmail.subject"  type="text" placeholder="''">
        <label >Subject: </label>
        <input v-model="newEmail.body"  type="text" placeholder="''">
		<div><button @click="onSendEmail">v</button><button>x</button></div>
        
    </section>`,
	data() {
		return {
			newEmail: {
				to: '',
				subject: '',
				body: '',
				isRead: false,
				sentAt: ''
			},
		};
	},
	methods: {
		onSendEmail() {
			this.newEmail.sentAt = Date.now()
			this.$emit('onSendEmail', this.newEmail);
		}
	},
};
