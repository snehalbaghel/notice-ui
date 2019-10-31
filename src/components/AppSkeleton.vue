<template>
	<v-app id="toolbar">
		<v-app-bar
			app
			light
			clipped-left
			color="teal"
			elevate-on-scroll>
			<v-app-bar-nav-icon @click="drawer = !drawer" />
			<span class="title ml-3 mr-5">E&nbsp;<span class="font-weight-light">Notice</span></span>
			<v-text-field 
				solo-inverted
				flat`
				light
				hide-details
				label="Search"
				prepend-inner-icon="search"
			/>
			<div class="flex-grow-1"></div>
			<v-menu v-model="menu" :close-on-content-click="false"
				:nudge-width="200" offset-x>
      	<template v-slot:activator="{ on }">
        <v-btn outlined color="black" dark v-on="on">
          Login
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"> -->
              <v-avatar color="primary" size="42">
                <span class="white--text headline">UN</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>User Name</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <br>
        <v-list>
          <v-list-item>
            <v-text-field v-model="email" label="Username/Email" outlined></v-text-field>
          </v-list-item>

          <v-list-item>
            <v-text-field v-model="password" type="password" label="Password" outlined></v-text-field>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn text @click="menu = false">Sign-Up</v-btn>
          <v-btn color="primary" text @click="login()" :disabled="invalid">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
			
		</v-app-bar>

		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			subheader
			width="290"
			color="gray lighten-4">
			<slot name="nav-content">
				<!-- Output filters -->
			</slot>
		</v-navigation-drawer>
		<!--Main Contents -->
    <v-content
      class="grey lighten-4 fill-height">
        <slot name="main-content">
        </slot>
    </v-content>
	</v-app>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import user from '../store/modules/user';

  @Component
  export default class AppSkeleton extends Vue {
    private drawer: boolean = true;
    private menu: boolean = false;
    email = '';
    password = '';
    
    get invalid () {
      if(this.email && this.password) {
        return false
      }
        return true
    }

    login() {
      user.loginUser({
				email: this.email,
				password: this.password,
			})
    }
  }
</script>


<style lang="scss">

</style>