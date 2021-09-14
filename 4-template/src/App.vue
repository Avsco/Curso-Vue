<template>
	<div>
		<!-- <VFor /> -->
		<!-- <VIf /> -->
		<!-- <VShow /> -->
		<!-- <vslot>click me</vslot> -->
		<card-slot>
			<template v-slot:header>
				<h1>Aquí podría ir un título de página</h1>
			</template>

			<p>Un párrafo para el contenido principal.</p>
			<p>Y otro más.</p>

			<template v-slot:footer>
				<p>Aquí va alguna información de contacto</p>
			</template>
		</card-slot>
		<!-- <vslot name="click me"></vslot> -->
		<!-- <VModel /> -->
	</div>
</template>

<script>
	import VFor from "./components/v-for.vue";
	import VIf from "./components/v-if.vue";
	import VShow from "./components/v-show.vue";
	import CardSlot from "./components/v-slot.vue";
	import VModel from "./components/v-model.vue";

	export default {
		components: {
			VFor,
			VIf,
			VShow,
			CardSlot,
			VModel,
		},
	};
</script>

<style></style>
