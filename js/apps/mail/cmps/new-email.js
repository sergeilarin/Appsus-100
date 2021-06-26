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
			<label ></label>
			<textarea name="" id="" cols="30" rows="10" v-model="newEmail.body"></textarea>
			<!-- <input v-model="newEmail.body"  type="text" placeholder="''"> -->
		</div>
		<div class="new-mail-btn"><button class="send" @click="onSendEmail">Send</button><button class="delete"><img src="./imgs/icons8-remove-30.png" alt=""></button></div>
        
    </section>`,
	data() {
		return {
			newEmail: {
				from:'Puki',
				subject: '',
				body: '',
				isRead: false,
				isStarred:false,
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
