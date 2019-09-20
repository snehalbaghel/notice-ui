<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			light
			clipped-left
			color="teal">
      <router-link to="homepage">
            <v-btn
              class="button" dark v-on="on" text icon color="white"
            >
            <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
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
      <router-link to="admin">
        <v-btn class="butt" color="teal" dark text><font color="white">Requests</font></v-btn>
      </router-link>
        <v-btn class="butt" color="teal" dark text><font color="white">Upcoming</font></v-btn><v-divider vertical></v-divider>
			<v-btn
              class="button" dark v-on="on" text icon color="white"
              @click="drawer = !drawer"
            >
            <v-icon large>mdi-account-circle</v-icon>
            
        </v-btn>
		</v-app-bar>


    <v-navigation-drawer
    v-model="drawer"
    subheader
      absolute
      right
      clipped
      width="290"
    >
          <template>
        <v-list-item two-line>
          <v-list-item-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
            <v-list-item-subtitle></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>


      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>



    </v-navigation-drawer>
  

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
      <v-expansion-panel-header>ARTHAYUDH</v-expansion-panel-header>
      <v-expansion-panel-content>
        <p>20-09-2019</p>
        <p>9:00AM</p>
        <p>Main Auditorium (on 20 September) and Campus View (on 21 September), Main Campus, CHRIST (Deemed to be University)</p>
        
      <br>
	  <br>
    <div class="action-buttons">
	    <v-btn class="butt" rounded color="teal" dark  v-on:click="check=true"><font color="white">Review</font></v-btn>
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
          height="1050px" width="1205px"
          tile
            v-if="check==true"
        >
		<v-card cols="12" sm="6" class="mb-5" height="1010px" width="1300px" align-center> 
          <p>DETAILS</p>
          <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
      <v-card
          class="pa-2"
          outline
          height="850px" width="800px"
          tile
        >
        <!--src="https://images.pexels.com/photos/1089280/pexels-photo-1089280.jpeg?auto=compress&cs=tinysrgb&h=1750&w=1260"
                  -->
                <v-img
                  src="./poster.jpg"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  width="575"
                  height="800"
                  align-center
                ></v-img>
                <h3>ARTHAYUDH</h3>
      </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
      <v-card
          class="pa-2"
          outline
          height="850px" width="800px"
          tile
          
        >
        <v-row>
        <v-card-text>
        <h3>ARTHAYUDH</h3>
        <p>The Department of Management Studies provides a plethora of opportunities to the students for honing their managerial skills and to channel their passion with their interpersonal goals, through the fervent Association of the Department, Christ University Management Association (CUMA).

 

CUMA proudly presents its flagship event ‘ARTHAYUDH’, the Annual National Level Intercollegiate Post-Graduate Management Fest, conducted by the Department of Management Studies, CHRIST (Deemed to be University). The theme for ‘Arthayudh 2019’ is ‘Geniokratio' which will be organised on 20 and 21 September 2019.

It is a rigorous and intense two days of festing for the students of various Colleges and Universities across the nation, with various rounds conducted on 20 and 21 of September 2019, which will then culminate into the finale to be held on 21September 2019. The finale rounds will definitely push the finalists to put up their best and win the coveted titles in various events of ARTHAYUDH 2019.    

 

The theme of this year ‘Genokratio', provides the participants with the opportunity to develop their expertise in copious industries. In the current times, it has become prevalent that having a holistic understanding and vast knowledge in a variety of business sectors is a major factor that differentiates the extraordinary from the ordinary.

We hereby extend a hearty welcome to each one of you to ARTHAYUDH  2019.</p>
        <p>20-09-2019</p>
        <p>9:00AM</p>
        <p>Main Auditorium (on 20 September) and Campus View (on 21 September), Main Campus, CHRIST (Deemed to be University)</p>
        <p>9987456321</p>
        <p>G-Link</p>
        </v-card-text>
         </v-row>
      </v-card>
      </v-col>
      <v-card
          class="pa-2"
          outline
          height="200px" width="1300px"
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
    private drawer: boolean = false;
    private check: boolean=false;
    data() {
      return{
        items: [
          { title: 'Sign Out', icon: 'mdi-account-off' },
        ],
      }
    }
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