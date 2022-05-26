<template>
	<div class="demos">
		<div class="demos__input">
			<span class="demos__tip">Input</span>
			<my-input type="text" placeholder="Text-input" v-model="inputModel"></my-input>
			<p class="demos__result">{{inputModel}}</p>
		</div>
		
	</div>
</template>

<script>

export default {
	data(){
		return {
			inputModel: ''
		}	
	}
}
</script>

<style lang="scss">

</style>
