<template>

<h5>add a job posting</h5>

	<form @submit.prevent="addJob()">

                <label for="title">job title</label>
                <input v-model="this.title" type="text" id="title" name="title">

                <label for="location">location</label>
                <input v-model="this.location" type="text" id="location" name="location">

                <label for="description">job description</label>
                <textarea v-model="this.description"  id="description" name="description"/>

		<label for="key_skills">key skills</label>
                <textarea v-model="this.key_skills"  id="key_skills" name="key_skills"/>

                <label for="education">educational requirements</label>
                <textarea v-model="this.education"  id="education" name="education"/>

                <label for="hiring_manager">hiring manager</label>
                <textarea v-model="this.hiring_manager"  id="hiring_manager" name="hiring_manager"/>

                <label for="hiring_manager_contact">hiring manager contact</label>
                <textarea v-model="this.hiring_manager_contact"  id="hiring_manager_contact" name="hiring_manager_contact"/>
                
		<button type="submit">Submit</button>

        </form>	

</template>


<script>
import axios from 'axios'

export default{

        data() {
                return {
                        title: '',
                        location: '',
                       	description: '',
                        key_skills: '',
                        education: '',
                        hiring_manager: '',
                        hiring_manager_contact: '',
			posted_by: this.$store.state.user.username,
			Company: this.$store.state.user.Company

                }
        },
        methods: {
                addJob() {
			axios.post('https://mycivvi.com/login', {
			title: this.title,
			location: this.location,
			description: this.description,
			key_skills: this.key_skills,
			education: this.education,
			hiring_manager: this.hiring_manager,
			hiring_manager_contact: this.hiring_manager_contact,
			posted_by: this.posted_by
			}).then(console.log('we have posted this'))

                }
        }


}
</script>

<style>

</style>

