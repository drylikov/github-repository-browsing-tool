<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <div class="avatar" :style="getAvatarStyles"></div>
        <h1>{{ getUser.name }}</h1>
        <div>{{ getUser.alias }}</div>
      </div>
      <div class="col-lg-8 offset-lg-1">
        <div class="row no-gutters">
          <div class="col-lg-6" v-for="repo in getRepos" :key="repo.id">
            <div class="repo-card">
              <a class="app-link" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
              <div class="repo-card__footer">
                <span class="repo-card__lang">{{ repo.language }}</span>
                <span v-if="repo.private" class="repo-card__status">Privat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['getAuth','getUser', 'getRepos']),
    getAvatarStyles() {
      return {
        background: 'url(' + this.getUser.avatar  + ') no-repeat center center',
        backgroundSize: 'contain'
      }
    }
  },
  
}
</script>
