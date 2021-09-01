<template>
  <div style="display: flex; flex-wrap: wrap; gap: 5px">
    <div v-for="icon in icons" :key="icon" style="flex: 1; max-width: 100px ">
      <component :is="icon"/>
    </div>
  </div>
</template>

<script src="./App.js"/>
