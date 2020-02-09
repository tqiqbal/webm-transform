<template>
<div class="container is-fluid">
    <div class="notification">
        This container is
        <strong>centered</strong> on desktop.
    </div>
    <div class="columns is-desktop">
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea v-model="inputTxt" class="textarea is-large" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea class="textarea is-large" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
  <b-button type="is-primary" @click="transform">Primary</b-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      inputTxt: "",
      outputTxt: "",
      username: "Adminstrator",
      password: "manage"
    };
  },
  methods: {
      async transform() {
         let url = "https://j559exy6uh.execute-api.us-east-1.amazonaws.com/prod/transform";
         let headers = new Headers();
         headers.set('content-type', 'application/xml');
         headers.set('x-request-type', 'xml-idata');
         headers.set('Authorization', 'Basic ' + btoa(this.username + ":" + this.password));
         let response = await fetch(url, { credentials: 'include', method: 'POST', headers: headers, body: this.inputTxt } )
         console.log(response);
         if ( response.ok == true) {
             let bodyTxt = response.text();
             this.outputTxt = bodyTxt;
         }
      }
  }
};
</script>