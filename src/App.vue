<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <a class="github-icon" href="https://github.com/" target="_blank"></a>
        <span class="header-title">Github repository browsing tool</span>
      </div>
    </header>
    <div class="app-content">
      <router-view/>
    </div>
    <footer class="app-footer">
      Created by &nbsp;  <a href="https://github.com/langald" class="app-link" target="_blank">Larissa Angald</a>, 
      source code &nbsp;  <a href="https://github.com/langald/Browsing-repos" class="app-link" target="_blank">link</a>
    </footer>
  </div>
</template>


<style lang="sass">
  @import "@/assets/css/app.sass"
</style>
