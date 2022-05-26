<template>
	<select @change="changeOption">
		<option disabled selected value="">{{titleOption}}</option>
		<option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
	</select>
</template>

<script>
export default {
	name: "my-select",
	props: {
		titleOption: String,
		modelValue: {
			type: String,
		},
		options: {
			type: Array,
			default: () => [],
		}
	},
	methods: {
		changeOption(event){
			this.$emit('update:modelValue', event.target.value);
		},
	},
}
</script>

<style lang="scss" scoped>

</style>
