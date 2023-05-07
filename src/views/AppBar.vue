<template>

  
  <v-bottom-navigation :elevation="8" grow>

    <v-btn value="nearby" to="/">

<v-icon>mdi-home</v-icon>
Home
</v-btn>

  <v-btn value="recent" to="/Multi">
    <v-icon
      size="large"
      color="green-darken-2"
    >
      mdi-domain


    </v-icon>
    구구단
  </v-btn>

  <v-btn value="favorites" to="/Dividor">
    <v-icon
      size="large"
      color="blue-grey-darken-2"
    >
      mdi-call-split
    </v-icon>

    나눗셈
  </v-btn>


</v-bottom-navigation>

</template>

<script setup>
 

</script>
