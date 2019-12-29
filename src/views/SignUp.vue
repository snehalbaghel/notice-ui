<template>
  <v-app>
  <v-container class="signup fill-height" fluid>
    <v-row align="center" justify="center">
      <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Sign-Up</v-list-item-title>
        <v-text-field
            value=""
            label="Email"
            outlined
            readonly
          ></v-text-field>
          <v-text-field
            value=""
            label="Username"
            outlined
            readonly
          ></v-text-field>
          <v-text-field
            v-model="password"
            value=""
            label="Password"
            outlined
            readonly
          ></v-text-field>
          <v-text-field
            v-model="password"
            value=""
            label="Confirm Password"
            outlined
            readonly
          ></v-text-field>
      </v-list-item-content>

      </v-list-item>
      <v-card-actions>
        <v-btn color="primary" text @click="signup()">Sign Up</v-btn>
      </v-card-actions>
      </v-card>
      </v-row>    
    </v-container>
  </v-app>
</template>


<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class Home extends Vue {
      private signup() {
      this.$router.push({name:'home'});
    }
  }
</script>

<style lang="scss" scoped>
  .signup {
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }

</style>