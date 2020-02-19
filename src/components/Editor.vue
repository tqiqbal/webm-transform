<template>
<div class="container is-fluid">
    <div class="notification">
        <strong>XML to IData</strong> Transformation
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    </div>
    <div class="columns">
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea id="codemirrorInput" class="textarea" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field">
                <div class="control">
                    <textarea id="codemirrorOutput" class="textarea" placeholder="Large textarea" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="block">
            <b-radio v-model="radio"
                name="name"
                native-value="xml-idata">
                XML to IData
            </b-radio>
            <b-radio v-model="radio"
                name="name"
                native-value="idata-xml">
                IData to XML
            </b-radio>
            <!-- <b-radio v-model="radio"
                name="name"
                native-value="xml-json">
                XML to JSON
            </b-radio> -->
        </div>
  <b-button type="is-primary" @click="transform">Convert</b-button>
</div>
</template>

<script>
import axios from "axios"
import 'codemirror/lib/codemirror.css'
  // theme css
import 'codemirror/theme/monokai.css'
import CodeMirror from 'codemirror'
    // language
import 'codemirror/mode/xml/xml.js'

// require active-line.js
  import'codemirror/addon/selection/active-line.js'
  // styleSelectedText
  import'codemirror/addon/selection/mark-selection.js'
  import'codemirror/addon/search/searchcursor.js'
  // hint
  import'codemirror/addon/hint/show-hint.js'
  import'codemirror/addon/hint/show-hint.css'
  import'codemirror/addon/hint/javascript-hint.js'
  import'codemirror/addon/selection/active-line.js'
  // highlightSelectionMatches
  import'codemirror/addon/scroll/annotatescrollbar.js'
  import'codemirror/addon/search/matchesonscrollbar.js'
  import'codemirror/addon/search/searchcursor.js'
  import'codemirror/addon/search/match-highlighter.js'
  // keyMap
  import'codemirror/mode/clike/clike.js'
  import'codemirror/addon/edit/matchbrackets.js'
  import'codemirror/addon/comment/comment.js'
  import'codemirror/addon/dialog/dialog.js'
  import'codemirror/addon/dialog/dialog.css'
  import'codemirror/addon/search/searchcursor.js'
  import'codemirror/addon/search/search.js'
  import'codemirror/keymap/sublime.js'
  // foldGutter
  import'codemirror/addon/fold/foldgutter.css'
  import'codemirror/addon/fold/brace-fold.js'
  import'codemirror/addon/fold/comment-fold.js'
  import'codemirror/addon/fold/foldcode.js'
  import'codemirror/addon/fold/foldgutter.js'
  import'codemirror/addon/fold/indent-fold.js'
  import'codemirror/addon/fold/markdown-fold.js'
  import'codemirror/addon/fold/xml-fold.js'
export default {
  data() {
    return {
      codeMirrorInput: "",
      codeMirrorOutput: "",
      isLoading: false,
      isFullPage: true,
      radio: "xml-idata"
    };
  },
  methods: {
       transform() {
      let xmlRequest = this.codeMirrorInput.getValue();
      this.isLoading = true;
        let config = {
            baseURL: 'https://webmapi-u4kuttf3wq-uc.a.run.app',
            headers: { 'Content-Type': 'text/xml', 'x-request-type': this.radio },
            timeout: 60000,
            withCredentials: false,
            auth: {
             username: "Administrator",
             password: "manage"
            }
        }
        axios.post('/rest/TI_DevUtil/api/v2/transform', xmlRequest, config)
         .then( response => {
             this.codeMirrorOutput.setValue(response.data);
             this.isLoading = false;
         })
         .catch( error => console.log(error))
      
      }
  },
  mounted() {
    const cmOption = {
          tabSize: 4,
          styleActiveLine: false,
          lineNumbers: true,
          styleSelectedText: false,
          line: true,
          foldGutter: true,
          gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
          highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
          mode: 'text/xml',
          // hint.js options
          hintOptions:{
            completeSingle: false
          },
          //sublim, emac, vim
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "default",
          extraKeys: { "Ctrl": "autocomplete" }
        }
    this.codeMirrorInput = CodeMirror.fromTextArea(document.getElementById("codemirrorInput"), cmOption);
    this.codeMirrorOutput = CodeMirror.fromTextArea(document.getElementById("codemirrorOutput"), cmOption);

  }
};
</script>

<style scoped>
.CodeMirror {
  border: 1px solid #eee;
  height: auto;
}
</style>
