<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			light
			clipped-left
			color="teal">
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			
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
			<div class="flex-grow-1"></div><v-divider vertical></v-divider>
			<v-btn
              class="button" dark v-on="on" text icon color="white"
              @click="drawer1 = !drawer1"
            >
            <v-icon large>mdi-account-circle</v-icon>
        </v-btn>
		</v-app-bar>
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			subheader
			width="290"
			color="white">
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
				<div class="filter-name">Tags</div>
				<v-list-item>
  						<v-combobox
  						  color="teal"
  						  v-model="chips"
  						  :items="itm"
  						  chips
  						  clearable
  						  label="Tags"
  						  multiple
  						  prepend-icon="filter_list"
  						  solo
  						>
   						 <template v-slot:selection="{ attrs, item, select, selected }">
   						   <v-chip
   						     color="teal"
   						     v-bind="attrs"
   						     :input-value="selected"
   						     close
   						     @click="select"
   						     @click:close="remove(item)"
   						   >
   						     <font color="white"><strong>{{ item }}</strong>&nbsp;</font>

   						   </v-chip>
					   		</template>
					  </v-combobox>
					</v-list-item>
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




    <v-navigation-drawer
    v-model="drawer1"
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
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
			<v-text-field align-center
      			v-model="name"
      			label="Username"
				  name='username'
      			required
      			color="teal"
    		></v-text-field>
			<v-text-field align-center
      			v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
			color="teal"
            @click:append="show1 = !show1"
    		></v-text-field>
          </v-list-item-content>
		  </v-list-item>
		  <v-list-item>
		  <v-btn color="teal" dark ><font color="white">Submit</font></v-btn>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
	
    <!--v-navigation-drawer
    v-model="drawer1"
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
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
			<v-text-field align-center
      			v-model="name"
      			label="Username"
				  name='username'
      			required
      			color="teal"
    		></v-text-field>
			<v-text-field align-center
      			v-model="password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
			color="teal"
            @click:append="show1 = !show1"
    		></v-text-field>
          </v-list-item-content>
		  </v-list-item>
		  <v-list-item>
		  <v-btn color="teal" dark ><font color="white">Submit</font></v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer-->
	
		<!--Navigation drawer for logged in users -->
    <!--v-navigation-drawer
    v-model="drawer1"
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



    </v-navigation-drawer-->



		<!--Page Contents -->
    <v-content>
    <v-container
        fluid>
	  
        <v-row
          justify="center"
        >
          <v-col class="shrink">
            <v-carousel>
    <!--v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    -->
	<v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
	<v-card
	height="1800"
	width="500">
	<v-img
		src="./poster.jpg"
		aspect-ratio="1"
        class="card"
        max-height="1800"
        max-width="500"
		align-center
        ></v-img>
		
	</v-card>
	</v-carousel-item>
	<v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
	<v-card
	height="1800"
	width="500">
	<v-img
		src="./cap.jpg"
		aspect-ratio="1"
        class="card"
        max-height="1800"
        max-width="500"
		align-center
        ></v-img>
		
	</v-card>
	</v-carousel-item>
	<v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
	<v-card
	height="1800"
	width="500">
	<v-img
		src="./poster1.png"
		aspect-ratio="1"
        class="card"
        max-height="1800"
        max-width="500"
		align-center
        ></v-img>
		
	</v-card>
	</v-carousel-item>
	<v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
	<v-card
	height="1800"
	width="500">
	<v-img
		src="./poster2.jpg"
		aspect-ratio="1"
        class="card"
        max-height="1800"
        max-width="500"
		align-center
        ></v-img>
		
	</v-card>
	</v-carousel-item><v-carousel-item
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
	<v-card
	height="1800"
	width="500">
	<v-img
		src="./poster3.png"
		aspect-ratio="1"
        class="card"
        max-height="1800"
        max-width="500"
		align-center
        ></v-img>
		
	</v-card>
	</v-carousel-item>
  </v-carousel>

  <!--v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >

	</v-carousel-item>
  </v-carousel-->
          </v-col>
        </v-row>
		<v-divider horizontal>
		</v-divider>
		<div
		
		  v-for="(item,i) in 2" :key="i">
		
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
					<h3>ARTHAYUDH</h3>
        			<p>20-09-2019</p>
        			<p>9:00AM</p>
        			<p>Main Auditorium (on 20 September) and Campus View (on 21 September), Main Campus, CHRIST (Deemed to be University)</p>
					<p>The Department of Management Studies provides a plethora of opportunities to the students for honing their managerial skills and to channel their passion with their interpersonal goals, through the fervent Association of the Department, Christ University Management Association (CUMA).

 

CUMA proudly presents its flagship event ‘ARTHAYUDH’, the Annual National Level Intercollegiate Post-Graduate Management Fest, conducted by the Department of Management Studies, CHRIST (Deemed to be University). The theme for ‘Arthayudh 2019’ is ‘Geniokratio' which will be organised on 20 and 21 September 2019.

It is a rigorous and intense two days of festing for the students of various Colleges and Universities across the nation, with various rounds conducted on 20 and 21 of September 2019, which will then culminate into the finale to be held on 21September 2019. The finale rounds will definitely push the finalists to put up their best and win the coveted titles in various events of ARTHAYUDH 2019.    

 

The theme of this year ‘Genokratio', provides the participants with the opportunity to develop their expertise in copious industries. In the current times, it has become prevalent that having a holistic understanding and vast knowledge in a variety of business sectors is a major factor that differentiates the extraordinary from the ordinary.

We hereby extend a hearty welcome to each one of you to ARTHAYUDH  2019.</p>
        
					</v-card-text>
					</v-row>	
						<v-btn class="button" rounded color="teal" dark ><font color="white">Bookmark</font></v-btn>
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
                  		src="./poster.jpg"
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
                  		src="./cap.jpg"
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
					<h3>GUIDANCE ON EXAM PREPARATION </h3>
        			<p>26-09-2019</p>
        			<p>4:15PM</p>
        			<p>Sky View, Main Campus, CHRIST (Deemed to be University)</p>
					<p>Exam anxiety is a battle that a lot of us go through, and it can be particularly nerve-wracking for first timers. Centre for Academic & Professional Support (CAPS) is pleased to bring you "GET EXAM-READY", exclusive training sessions on exam preparations. Tomorrow's session will be on- 

Handling Stress and Examination Tips: Handling stressful environments is a necessary skill to attempt examinations. Gain few tips on writing examinations for optimal performance. </p>
					</v-card-text>
					</v-row>	
						<v-btn class="button" rounded color="teal" dark ><font color="white">Bookmark</font></v-btn>
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
		private drawer: boolean = false;
		private drawer1: boolean = false;
		private show1: boolean=false;
		private check: boolean=false;
	data () {
      return {
        show1: false,
        show2: true,
        show3: false,
        show4: false,
		password: '',
		username: '',
        rules: {
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        items: [
          {
            src: "./poster.jpg",
          },
          {
            src: "./poster1.png",
          },
          {
            src: "./poster2.jpg",
          },
          {
            src: "./poster3.jpg",
          },
		],
		items1: [
          { title: 'Sign Out', icon: 'mdi-account-off' },
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
.card1
{
  margin: 20px 20px 20px 20px;
}
.button
{
  margin: 10px 8px;
}
</style>