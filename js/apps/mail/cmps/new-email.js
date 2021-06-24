import { emailService } from '../services/email-services.js';

export default {
	template: `
    <section class="new-email">
        <h2>New Message</h2>
		<div class="new-input">
			<label >To: </label>
			<input v-model="newEmail.to"  type="text" placeholder="">
		</div>
		<div class="new-input">
			<label >Topic: </label>
			<input v-model="newEmail.subject"  type="text" placeholder="">
		</div>
		<div class="subject-input">
			<label >Subject: </label>
			<textarea name="" id="" cols="30" rows="10" v-model="newEmail.body"></textarea>
			<!-- <input v-model="newEmail.body"  type="text" placeholder="''"> -->
		</div>
		<div class="new-mail-btn"><button @click="onSendEmail">v</button><button>x</button></div>
        
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
