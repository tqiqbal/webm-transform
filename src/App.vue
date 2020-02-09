<template>
  <div id="app">
    <Navbar />
    <Editor />
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
import Editor from "./components/Editor"

export default {
  name: 'App',
  components: {
    Navbar,
    Editor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
