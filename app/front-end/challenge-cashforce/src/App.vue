<script setup>
import Header from './components/Header.vue';
import Table from './components/Table.vue';
import Aside from './components/Aside.vue';
</script>

<template>
  <header>
  </header>

  <main>
    <Aside />
    <Header />
    <Table />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  border: 0;
  padding: 0;
  font-family: sans-serif
}
</style>
