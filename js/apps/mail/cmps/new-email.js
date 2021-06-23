import { emailService } from '../services/email-services.js';

export default {
	template: `
    <section class="new-email">
        <h2>New Message</h2>
        <label >To: </label>
        <input v-model="searchBy.title" @input.lazy="getSearchResults" type="text" placeholder="Search by Name...">
        <!-- <section  v-if="searchResults">{{searchResults}}</section> -->
        <search-list @addBook="addBook" v-if="searchResults" :searchResults="searchResults" />  
        
    </section>`,
	data() {
		return {
			searchBy: {
				title: '',
			},
			searchResults: null,
			book: null,
		};
	},
	methods: {
		
	},
};
