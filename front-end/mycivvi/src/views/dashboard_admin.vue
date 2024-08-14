<template>
	<h6>{{this.$store.state.user.company}}</h6><p @click="editCompany()">edit company details</p>
	<h6>{{this.$store.state.user.username}}</h6>
	<p>actions</p>
	<ul>
		<li @click="addJob()">post a job</li>
		<li @click="">view posted jobs</li>
	</ul>
</template>


<script>

export default {


methods: {
	addJob() {
               this.$router.push({name: 'add_job'})

	}                                       

}

}

</script>

<style>

</style>
