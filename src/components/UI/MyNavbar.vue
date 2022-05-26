<template>
	<nav class="navbar">
		<custom-button v-if="!this.$store.state.isHomePage" tabindex="1" class="navbar__home" title="Home page" @click="$router.push('/')">Home page</custom-button>
		<div class="navbar__wrapper">
			<custom-button tabindex="2" v-if="!this.$store.state.isListPage" class="navbar__button" title="Note list" @click="$router.push('/notes')">Note list</custom-button>
			<custom-button tabindex="3" v-if="!this.$store.state.isInfoPage" class="navbar__button" title="Information" @click="$router.push('/about')">Information</custom-button>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "my-navbar",
	}
</script>

<style lang="scss">

</style>
