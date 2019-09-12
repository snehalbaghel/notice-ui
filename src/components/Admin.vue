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
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          height="1000px" width="650px"
          tile
        >
		Requests
		<br>
		<v-card cols="12" sm="6" class="mb-5" height="1000px" width="645px" clipped-left> 
			<v-expansion-panels>
    <v-expansion-panel
      v-for="(item,i) in 4"
      :key="i"
    >
      <v-expansion-panel-header>Event Name</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      <br>
	  <br>
    <div class="action-buttons">
	    <v-btn class="butt" rounded color="teal" dark ><font color="white">Review</font></v-btn>
	    <v-btn class="butt" rounded color="green" dark><font color="white">Approve</font></v-btn>
      <v-btn class="butt" rounded color="red" dark><font color="white">Reject</font></v-btn>
    </div>
    </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
     	 </v-card>
        </v-card>
      </v-col>
	  <v-col
        cols="12"
        sm="8"
      >
        <v-card
          class="pa-2"
          outlined
          height="900px" width="1205px"
          tile
        >
		<v-card cols="12" sm="6" class="mb-5" height="1000px" width="1000px" align-center> 
          <p>DETAILS</p>
          <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
      <v-card
          class="pa-2"
          outline
          height="550px" width="500px"
          tile
        >
                <v-img
                  src="https://images.pexels.com/photos/1089280/pexels-photo-1089280.jpeg?auto=compress&cs=tinysrgb&h=1750&w=1260"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-width="475"
                  max-height="650"
                  align-center
                ></v-img>
                <h3>Event Title</h3>
      </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
      <v-card
          class="pa-2"
          outline
          height="550px" width="500px"
          tile
        >
        <h3>Name</h3>
        <p>Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>12-09-2019</p>
        <p>4:00PM</p>
        <p>Birds Park</p>
        <p>9987456321</p>
        <p>G-Link</p>
      </v-card>
      </v-col>
      <v-card
          class="pa-2"
          outline
          height="200px" width="1000px"
          tile
      >
      <v-col cols="12" >
     <v-text-field align-center
      v-model="name"
      label="Comments"
      required
      color="teal"
    ></v-text-field>
  </v-col>
  
        <v-btn class="butt" rounded color="teal" dark ><font color="white">Submit</font></v-btn>

      </v-card>
          </v-row>
          <!--v-card
                  margin-left="250px"
                  max-width="500"
                  max-height="755"
                  outlined
                  align-right
          >
          </v-card>
          
          <v-card
          height="500"
          width="950"
          outline
          align-center
          >
        hello
          </v-card-->

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


<style scoped>
/*  
.action-buttons {
  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
} 
*/

.butt
{
  margin: 0px 8px;
}
</style>