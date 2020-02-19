<template>
  <v-app>
  <v-container class="signup fill-height" fluid>
    <v-row align="center" justify="center">
      <v-card  class="mx-auto" max-width="344">
      <v-list-item three-line>
      <v-list-item-content>

        <v-list-item-title class="headline pa-4 px-2">Welcome to Enotice 🎉</v-list-item-title>
        <v-divider/>
        <v-subheader class="px-2">Let's get started</v-subheader>

        <v-form>
          <v-text-field :error="error.email" class="px-1" value="" v-model="email" label="Email" outlined required/>
          <v-text-field :error="error.username" class="px-1" value="" v-model="username" label="Username" outlined required/>
          <v-text-field :error="error.password" class="px-1" :type="showPass ? 'text' : 'password'" 
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPass = !showPass" required autocomplete="new-password"
            v-model="newPassword" value="" label="Password" outlined/>
        </v-form>
      </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="grey darken-2" text @click="goBack()">Go Back</v-btn>
          <v-spacer></v-spacer>
        <v-btn class="signup_btn" color="red" text @click="signup()"><b>Sign up</b></v-btn>
        <!-- <v-btn class="px-4" color="primary" text @click="signup()">Sign Up</v-btn> -->
      </v-card-actions>
      </v-card>
      </v-row>    
      <v-snackbar v-model="snackbar">
      {{ snackbarMessage }}
      <v-btn text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    </v-container>
  </v-app>
</template>


<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import auth from '../store/modules/auth';

  @Component({
    components: {
    },
  })
  export default class Home extends Vue {
    private newPassword = '';
    private email = '';
    private username = '';
    private showPass = false;
    private snackbar = false;
    private snackbarMessage = '';
    private error = {
      email: false,
      username: false,
      password: false
    };

    private async signup() {

      this.error.email = false;
      this.error.username = false;
      this.error.password = false;

      if (!this.email) {
        this.snackbarMessage = 'Please enter email.';
        this.snackbar = true;
        this.error.email = true;
      } else if (!this.username) {
        this.snackbarMessage = 'Please enter username.';
        this.snackbar = true;
        this.error.username = true;
      } else if (!this.newPassword && this.newPassword.length < 7) {
        this.snackbarMessage = 'Please enter a password of at least 7 characters.';
        this.snackbar = true;
        this.error.password = true;
      } else {
        await auth.signUpUser({
          email: this.email,
          username: this.username,
          password: this.newPassword,
          });
        if (auth.error) {
          this.snackbarMessage = auth.error;
          this.snackbar = true;
        } else if (auth.username) {
          this.snackbarMessage = 'Click on your username to create new events.';
          this.snackbar = true;
          this.$router.push({name: 'home'});
        }
      }
    }

    private goBack() {
      this.$router.push({name: 'home'});
    }
  }
</script>

<style lang="scss" scoped>
  .signup {
    background-color: #ffc320;
  }
</style>