<template>

	<form @submit.prevent="register()">
	
		<label for="username">Username</label>
		<input v-model="this.username" type="text" id="username" name="username">		
		
		<label for="email">Email</label>
		<input v-model="this.email" type="text" id="email" name="email">		
		
		<label for="password">Password</label>
		<input v-model="this.password" type="text" id="password" name="password">

		
		<label for="role">Role</label>
		<select v-model="this.role" id="role" name="role">
			<option value="Admin">Admin</option>
			<option value="User">User</option>
		</select>	
		
		<div v-if="this.role == 'Admin'">

		                <label for="company">Company Name</label>
                		<input v-model="this.Company" type="text" id="company" name="company">

				<label for="company_details">Company Details</label>
				<textarea v-model="this.company_details" id="company_details" name="company_details"/>

				<label for="company">Company Size</label>
                                <input v-model="this.company_size" type="text" id="company_size" name="company_size" placeholder="ie. 50-100">

		</div>
				
		<button type="submit">Submit</button>	

	</form>

</template>


<script>

export default{
	data() {
		return {
			username: '',
			email: '',
			password: '',
			role: '',
			Company: '',
			company_details: '',
			company_size: ''
		}
	},
	methods: {
		register() {
			this.$store.dispatch('register',{
			username: this.username,
			email: this.email,
			password: this.password,
			role: this.role,
			Company: this.Company,
			company_details: this.company_details,
			company_size: this.company_size
			})
		}
	}
}

</script>


<style>

form{
	display: inline-grid;
}

</style>
