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
			
        <!--v-btn class="butt" color="teal" dark text><font color="white">Upcoming</font></v-btn><v-divider vertical></v-divider-->
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


<style lang="scss">
.filter-name {
	padding: 12px 16px;
	font-size: 0.75rem;
	color: rgba(0,0,0,.54);
	height: 40px;
	font-weight: bold;
}
</style>