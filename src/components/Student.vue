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
   
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1" color="teal">
      Details
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card color="white" class="mb-5" height="750px">
          
          <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <v-col cols="12" sm="6" >
     <v-text-field
      v-model="name"
      label="Title"
      required
      color="teal"
    ></v-text-field>
  </v-col>
  <!--Date Picker-->
    <v-col cols="12" sm="6" >
    <v-text-field
      v-model="name"
      label="Name"
      required
      color="teal"
    ></v-text-field>
    </v-col>
    <v-row>
    <v-col cols="12" sm="6" >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
          color="teal"
            v-model="date"
            label="Date"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <div class="flex-grow-1"></div>
          <v-btn text  color="teal" @click="menu = false">Cancel</v-btn>
          <v-btn text  color="teal" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
    <div class="flex-grow-1"></div>
    </v-row>
     <!--Time selector-->
    <v-row>
    <v-col cols="12" sm="6" >
      <v-menu
        ref="menu"
        color="teal"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }" color="teal">
          <v-text-field
          color="teal"
            v-model="time"
            label="Time"
            prepend-icon="access_time"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
        color="teal"
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
    <div class="flex-grow-1"></div>
    
    </v-row>
     <v-col cols="12" sm="6" >
    <v-textarea
    color="teal"
      label="Description"
    ></v-textarea>
     </v-col>
     <v-col cols="12" sm="6" >
      <v-text-field
      v-model="name"
      label="Location"
      required
      color="teal"
    ></v-text-field>
     </v-col>
     <v-col cols="12" sm="6" >
     <v-text-field
      v-model="name"
      label="Contact"
      required
      color="teal"
    ></v-text-field>
     </v-col>
  </v-form>

      </v-card>
      <v-btn color="teal" @click="e6 = 2" flat><font color="white">Continue</font></v-btn>
    </v-stepper-content>
<!--Uploads-->
    <v-stepper-step :complete="e6 > 2" step="2" color="teal">Upload</v-stepper-step>

    <v-stepper-content step="2">
      <v-card class="mb-5" height="300px">
    <v-col cols="12" sm="6" >
  <v-combobox
    color="teal"
    v-model="chips"
    :items="items"
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
    </v-col>
          <v-col cols="12" sm="6" >
     <v-text-field
      v-model="name"
      label="Google Link"
      required
      color="teal"
    ></v-text-field>
     </v-col>
     <v-col cols="12" sm="6" >
     <v-file-input label="Poster" color="teal"></v-file-input>
     </v-col>

      </v-card>
      <v-btn color="teal" @click="e6 = 3"><font color="white">Continue</font></v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>

    <!--Submission-->
    <v-stepper-step :complete="e6 > 3" step="3" color="teal">Confirm</v-stepper-step>
    <v-stepper-content step="3">
      <v-card  class="mb-5" height="40px">
          <p>Do you want to submit?</p>
      </v-card>
      <v-btn flat color="teal">Yes</v-btn>

      <v-btn flat @click="e6 = 1">Go Back</v-btn>
      
    </v-stepper-content>

  </v-stepper>
    </v-content>
	</v-app>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';

	@Component
	export default class HelloWorld extends Vue {
		//private drawer: boolean = true;
        data () {
      return {
          time: null,
        menu2: false,
        modal2: false,
        e6: 1
      }
    }
	}
</script>


<style>

</style>