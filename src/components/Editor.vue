<template>
<div class="container">
    <div class="notification">
        This container is
        <strong>centered</strong> on desktop.
    </div>
    <div class="columns is-desktop">
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea v-model="inputTxt" class="textarea" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea v-model="outputTxt" class="textarea" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
  <b-button type="is-primary" @click="transform">Primary</b-button>
</div>
</template>

<script>
//import axios from "axios"
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
       transform() {
        //  let url = "https://piktl7s9ae.execute-api.us-east-1.amazonaws.com/prod/transform";
        //let username = this.username;
        //let password = this.password;
        //const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    //     axios.post(url, {
    //        headers: {
    //            'Content-Type': 'application/xml',
    //            'x-request-type': 'xml-idata',
    //            //'Authorization': `Basic ${token}`
    //        },
    //        body: this.inputTxt
    //     })
    //    .then(function (response) {
    //     console.log(response);
    //     })
    //    .catch(function (error) {
    //     console.log(error);
    //     });
      this.outputTxt = `<?xml version="1.0" encoding="UTF-8"?>
<IDataXMLCoder version="1.0">
    <record javaclass="com.wm.util.Values">
        <record name="note" javaclass="com.wm.data.BasicData">
            <value name="to">Tanveer</value>
            <value name="from">Jani</value>
            <value name="heading">Reminder</value>
            <value name="body">Don't forget me this weekend!</value>
        </record>
    </record>
</IDataXMLCoder>`
      }
  }
};
</script>