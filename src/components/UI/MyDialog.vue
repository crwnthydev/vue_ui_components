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

.dialog {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;

	&__content {
		border: 1px solid #000000;
		font-size: 16px;
		line-height: 1.3em;
		background: #ffffff;
		color: black;
		padding: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}
</style>
