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
				flat
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
          {{ username ? username : "Login" }}
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"> -->
              <v-avatar color="primary">
                <span class="white--text headline">{{ username ? username[0] : "G" }}</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ username ? username : "Guest" }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <br>
        <v-list v-if="!username">
          <v-list-item>
            <v-text-field v-model="email" label="Username/Email" outlined></v-text-field>
          </v-list-item>

          <v-list-item>
            <v-text-field v-model="password" type="password" label="Password" outlined></v-text-field>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <div class="flex-grow-1"></div>
          <div v-if="username">
            <v-btn color="primary" @click="logout()" text>Logout</v-btn>
          </div>
          <div v-else>
            <v-btn text @click="signup()">Sign-Up</v-btn>
            <v-btn color="primary" text @click="login()" :disabled="invalid">Login</v-btn>
          </div>
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
  import auth from '../store/modules/auth';

  @Component
  export default class AppSkeleton extends Vue {
    private drawer: boolean = true;
    private menu: boolean = false;
    private email = '';
    private password = '';
    
    get invalid() {
      if(this.email && this.password) {
        return false
      }
        return true
    }

    get username() {
      return auth.username;
    }

    login() {
      auth.loginUser({
				email: this.email,
				password: this.password,
			})
    }

    signup() {
      console.log("Make signup page")
    }

    logout() {
      auth.logoutUser();
    }

}
</script>


<style lang="scss">

</style>