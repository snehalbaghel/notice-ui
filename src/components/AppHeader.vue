<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			light
			clipped-left
			color="teal">
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			<span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Notice</span></span>
			<v-text-field 
				solo-inverted
				flat
				light
				hide-details
				label="Search"
				prepend-inner-icon="search"
			/>
			
        <v-btn class="button" color="teal" dark text><font color="white">Upcoming</font></v-btn><v-divider vertical></v-divider>
			<div class="flex-grow-1"></div>
			
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			subheader
			width="290"
			color="gray lighten-4">
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
						v-model="tags" column multiple>
						<v-chip filter outlined>Computer Science</v-chip>
						<v-chip filter outlined>Law</v-chip>
						<v-chip filter outlined>Psychology</v-chip>
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
		</v-navigation-drawer>



		<!--Page Contents -->
    <v-content>
    <v-container
        fluid>
	  
        <v-row
          justify="center"
        >
          <v-col class="shrink">
            <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
          </v-col>
        </v-row>
		<v-divider horizontal>
		</v-divider>
		<div
		
		  v-for="(item,i) in 5" :key="i">
		
		<v-row justify="center" v-if="i%2==0">
			<v-col class="shrink">
		<v-card
		height="500"
		width="1450"
		class="card"
		>
		<v-row>
			<v-col>
				<v-card height="475" width="892" class="card">
					<v-row>
					<v-card-text>
					<h3>Name</h3>
        			<p>Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        			<p>12-09-2019</p>
        			<p>4:00PM</p>
					</v-card-text>
					</v-row>	
						<v-btn class="button" rounded color="teal" dark ><font color="white">More</font></v-btn>
				</v-card>
			</v-col>
			<v-col>
				<v-card
          		class="pa-2"
          		outline
          		height="475px" width="500px"
          		tile
        		>
                	<v-img
                  		src="https://images.pexels.com/photos/1089280/pexels-photo-1089280.jpeg?auto=compress&cs=tinysrgb&h=1750&w=1260"
                  		aspect-ratio="1"
                  		class="card"
                  		max-width="475"
                  		max-height="450"
                  		align-center
                	></v-img>
      			</v-card>

			</v-col>
		</v-row>
		</v-card>
			</v-col>
		</v-row>

		<v-row justify="center" v-else>
			<v-col class="shrink">
		<v-card
		height="500"
		width="1450"
		class="card"
		>
		<v-row>
			<v-col>
				<v-card
          		class="pa-2"
          		outline
          		height="475px" width="500px"
          		tile
        		>
                	<v-img
                  		src="https://images.pexels.com/photos/1089280/pexels-photo-1089280.jpeg?auto=compress&cs=tinysrgb&h=1750&w=1260"
                  		aspect-ratio="1"
                  		class="card"
                  		max-width="475"
                  		max-height="450"
                  		align-center
                	></v-img>
      			</v-card>


			</v-col>
			<v-col >
				<v-card height="475" width="892" class="card">
					<v-row>
					<v-card-text>
					<h3>Name</h3>
        			<p>Description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        			<p>12-09-2019</p>
        			<p>4:00PM</p>
					</v-card-text>
					</v-row>	
						<v-btn class="button" rounded color="teal" dark ><font color="white">More</font></v-btn>
				</v-card>
			</v-col>
		</v-row>
		</v-card>
			</v-col>
		</v-row>




		</div>
      </v-container>
    </v-content>
	</v-app>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class HelloWorld extends Vue {
	  private overlay: boolean=false;
    private drawer: boolean = true;
	data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
	}
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
.card
{
  margin: 0px 8px 0px 8px;
}
.button
{
  margin: 10px 8px;
}
</style>