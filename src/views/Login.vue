<template>
  <div class="login">
    <button class="login-btn" @click="login" :disabled="loading">
      <div v-if="loading">Loading...</div>
      <div v-else>Sign in with GitHub <i class="login-icon"></i></div>
    </button>

    <div class="error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import { OAuth } from 'oauthio-web'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      error: ''
    }
  },
  methods: {
    ...mapActions(['setAuth', 'setUser', 'setRepos']),
    login() {
      this.loading = true
      this.error = ''

      OAuth.initialize('iKkw0c-dbam7dKKAWMSmFI9EG74');

      // Use popup for oauth
      OAuth.popup('github').then(result => {
        //console.log('github:', result);
        this.setAuth(result.token_type + ' ' + result.access_token)

        let promises = []

        promises.push(
          // Retrieves user data from oauth provider
          result.me().then(user => {
            //console.log('me data:', data);
            this.setUser(user)
          })
        )

        promises.push(
          result.get('/user/repos').then(repos => {
            //console.log('repos data:', data);
            this.setRepos(repos)
          })
        )

        Promise.all(promises)
          .then(() => this.$router.push({name: 'home'}))
      })
        .fail(e => {
          console.log(e.message)
          this.error = e.message
          this.loading = false
        })
    }
  }

}
</script>
