<template>
  <v-list
		dense
		class="grey lighten-4 fill-height">
			<v-list-item class="headline">Filters</v-list-item>
			<div class="filter-name">Calendar</div>
			<v-list-item>
				<vc-date-picker
					mode="range"
					:value="null"
					color="red"
					is-inline/>
			</v-list-item>
			<div class="filter-name">Department</div>
			<v-list-item>
				<v-chip-group
					v-model="departments" column multiple>
					<v-chip filter outlined>Computer Science</v-chip>
					<v-chip filter outlined>Law</v-chip>
					<v-chip filter outlined>Psycology</v-chip>
					<v-chip filter outlined>Business</v-chip>
					<v-chip filter outlined>Math</v-chip>
					<v-chip filter outlined>Chemistry</v-chip>
				</v-chip-group>
			</v-list-item>
			<div class="filter-name">Tags</div>
			<v-list-item>
				<v-chip-group
					v-model="tags" column multiple>
					<v-chip filter outlined>Music</v-chip>
					<v-chip filter outlined>Film</v-chip>
					<v-chip filter outlined>Debating</v-chip>
					<v-chip filter outlined>Coding</v-chip>
					<v-chip filter outlined>Football</v-chip>
				</v-chip-group>
			</v-list-item>
	</v-list>
</template>
<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class NavFilters extends Vue {
		private departments: number[] = [];
		private tags: number[] = [];
	}
</script>

<style lang="scss">
	.filter-name {
		padding: 12px 16px;
		font-size: 0.75rem;
		color: rgba(0,0,0,.54);
		height: 40px;
		font-weight: bold;
	}
</style>