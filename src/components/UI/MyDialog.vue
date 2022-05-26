<template>
	<div v-if="show" class="dialog" @click="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: "my-dialog",
	props: {
	show: {
		type: Boolean,
		default: false,
	}
	},
	methods: {
		hideDialog(){
			this.$emit('update:show', false) 
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
