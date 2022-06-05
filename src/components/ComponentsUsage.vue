<template>
	<div class="demos">
		<div class="demos__input demo">
			<div class="demo__active-element">
				<span class="demo__tip">Input</span>
				<my-input type="text" placeholder="Text-input" v-model="inputModel"></my-input>
			</div>
			<div class="demo__result">
				<span class="demo__tip">Input result:</span>
				<p>{{inputModel}}</p>
			</div>
		</div>

		<div class="demos__select demo">
			<div class="demo__active-element">
				<span class="demo__tip">Select</span>
				<my-select v-model="selectModel" :options="selectOptions" :titleOption="selectTitle"/>
			</div>
			<div class="demo__result">
				<span class="demo__tip">Select result:</span>
				<p>{{selectModel}}</p>
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
	data(){
		return {
			inputModel: '',
			selectModel: '',
			selectOptions: [
				{value: 'Demo option 1', name: 'Demo option 1'},
				{value: 'Demo option 2', name: 'Demo option 2'},
				{value: 'Demo option 3', name: 'Demo option 3'},
				{value: 'Demo option 4', name: 'Demo option 4'},
			],
			selectTitle: "Choose from list",
		}	
	}
}
</script>

<style lang="scss">

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.demos {
		margin: 30px 0 0 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 16px;
		line-height: 1.3em;
		color: #000000;

		input,
		select {
			min-width: 150px;
		}
	}

	.demo {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0 30px 0;

		&__tip {
			background-color: rgba(47, 187, 112, 0.7);
			margin: 0 0 7px 0;
			min-width: 150px;
		}

		&__active-element {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 0 0 20px 0;
		}

		&__result {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 150px;
			border-bottom: 1px solid black;
		}
	}

</style>
