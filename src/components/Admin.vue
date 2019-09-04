<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			light
			clipped-left
			color="teal">
			<span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Notice</span></span>
			<v-text-field 
				solo-inverted
				flat
				light
				hide-details
				label="Search"
				prepend-inner-icon="search"
			/>
			<div class="flex-grow-1"></div>
			
		</v-app-bar>


		<!--Page Contents -->
    <v-content>
    <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
	  <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
		Requests
		<br>
		<v-card cols="12" sm="6" class="mb-5" height="1000px" width="900px" clipped-left> 
			<v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 1"
      :key="i"
    >
      <v-expansion-panel-header>Event Name</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <br>
	  <br>
	  <v-btn rounded color="teal" dark><font color="white">Show</font></v-btn>
	  </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
     	 </v-card>
        </v-card>
      </v-col>
	  <v-col
        cols="12"
        sm="6"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
		<v-card cols="12" sm="6" class="mb-5" height="1000px" width="900px" clipped-left> 
          <p>DETAILS</p>
     	 </v-card>
        </v-card>
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