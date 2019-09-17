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
        <router-link to="student">
        <v-divider vertical></v-divider><v-btn class="butt" color="teal" dark text><font color="white">Add</font></v-btn><v-divider vertical></v-divider>
        </router-link>
        <router-link to="status">
        <v-divider vertical></v-divider><v-btn class="butt" color="teal" dark text><font color="white">Status</font></v-btn><v-divider vertical></v-divider>
        </router-link>
        <v-btn class="butt" color="teal" dark text><font color="white">Upcoming</font></v-btn>
        <v-btn class="butt" color="teal" dark text><font color="white">Bookmarks</font></v-btn><v-divider vertical></v-divider>
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

      <v-card
     class="mx-auto"
    width="950"
    height="1000"
    outlined
    align-center

   >
      <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Notice</th>
        <th class="text-left">Status</th>
        <th clas="text-left">Remarks</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,i) in 4"
      :key="i">
        <td>Notice1</td>
        <td>Status1</td>
        <td>Remarks1</td>
      </tr>
      <tr>
        <td>Noticee</td>
        <td>Pending
          <router-link to="student">
          <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        
         <v-btn class="button" dark v-on="on" text icon color="teal">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
        
      </template>
      <span>Resubmit</span>
    </v-tooltip>
    </router-link>
            <!--v-btn class="button" text icon color="teal">
              <v-icon>mdi-cached</v-icon>
            </v-btn-->
          
          <!--v-btn class="butt" rounded color="teal" dark ><font color="white">Resubmit</font></v-btn-->
        </td>
        <td>Remark
          <v-tooltip bottom>
      <template v-slot:activator="{ on }">
          <v-btn
          class="button" dark v-on="on" text icon color="teal"
      @click="overlay = !overlay"
    >
      <v-icon>mdi-comment-text</v-icon>
    </v-btn>
</template>
      <span>Show review</span>
    </v-tooltip>
    <v-overlay :value="overlay">
      
      <v-btn
        icon
        @click="overlay = false"
      >
        <v-icon>mdi-close</v-icon>
        
      </v-btn>
    </v-overlay>
        </td>
      </tr>
    </tbody>
  </v-simple-table>
      </v-card>

      </v-container>
    </v-content>
	</v-app>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class HelloWorld extends Vue {
    private overlay: boolean=false;
    private drawer: boolean=false;
    data() {
      return{
        items: [
          { title: 'Sign Out', icon: 'mdi-account-off' },
        ],

      }
    }
	}
</script>


<style>
.button
{
  margin: 0px 8px;
}
</style>



