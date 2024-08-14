<template>

        <form @submit.prevent="login()">


                <label for="email">Email</label>
                <input v-model="this.email" type="text" id="email" name="email">

                <label for="password">Password</label>
                <input v-model="this.password" type="text" id="password" name="password">

                <button type="submit">Submit</button>

        </form>

</template>


<script>

export default{
        data() {
                return {
                        email: '',
                        password: '',
                }
        },
        methods: {
                login() {
			console.log('hit');
                        this.$store.dispatch('login',{
                        email: this.email,
                        password: this.password
                        })
	
			.then( () => {
			console.log(this.$store.state.user);
				if (this.$store.state.user.role == 'User'){
					this.$router.push({name: 'dashboard'})
				} else if (this.$store.state.user.role == 'Admin'){
					this.$router.push({name: 'dashboard_admin'})
				} 
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
