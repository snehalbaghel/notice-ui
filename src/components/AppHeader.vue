<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			clipped-left
			color="green lighten-1">
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			<span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Notice</span></span>
			<v-text-field 
				solo-inverted
				flat
				hide-details
				label="Search"
				prepend-inner-icon="search"
			/>
			<div class="flex-grow-1"></div>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			color="gray lighten-4">
			<v-list
				dense
				class="grey lighten-4 fill-height">			
				<!-- Calender and filters -->
			</v-list>
		</v-navigation-drawer>
    <v-content>
    <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <h1>Hello world</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
	</v-app>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class HelloWorld extends Vue {
		private drawer: boolean = true;
	}
</script>


<style>

</style>