<template>
    <b-card class="mb-4 p-4 m-0 rounded-4" img-src="https://via.placeholder.com/300" img-alt="Card image">
      <p class="card-text p-0 m-0"  style="font-size: 24px; color: #454183">
        {{ description }}
      </p>
      <p class="card-text text-start py-3 "> 

        <small class="text-muted"  style="font-size: 16px; color: #97989F">{{ date }}</small>
      </p>
    </b-card>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      description: String,
      date: String,
      imgsrc: String,
    },
  };
  </script>
  
  <style scoped>
  .card-title {
    font-size: 1.25rem;
    font-weight: 500;
    text-align: right;
  }
  .card-text {
    text-align: right;
  }
  </style>
  