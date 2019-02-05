<template>
    <dashboard-layout :full-width="true">
        <div>
            <div style="width: 100%; height: 700px;">
                <iframe src="/" class="col-md-12" style="height: 100%; width: 100%; border: none;" ref="editorFrame"></iframe>
            </div>

            <div>
                <button class="btn btn-success" style="position: fixed; bottom: 10px; right: 10px;"
                        @click="saveModifications">Save Modifications
                </button>
            </div>

            <div id="jw-editor" class="hidden" ref="editor">
                <div class="row">
                    <div class="col-md-12">
                        <div id="innerHTMLPlaceholder"></div>
                    </div>
                </div>
            </div>
        </div>
    </dashboard-layout>
</template>

<script>
  import DashboardLayout from "../../components/DashboardLayout";
  import {_http} from "../../Http";
  import * as Vue from 'vue';

  export default {
    components: {DashboardLayout},

    data() {
      return {
        frameBody: false,
        editType: 0,
        currentSelector: false,
        modification: {
          innerText: ""
        },
        modifications: {},
        originalModifications: {},
        modificationsDirty: false,
        injectedEditor: false,
      }
    },

    beforeMount() {
      jQuery.fn.extend({
        getPath: function () {
          var pathes = [];

          this.each(function (index, element) {
            var path, $node = jQuery(element);

            while ($node.length) {
              var realNode = $node.get(0), name = realNode.localName;
              if (!name) {
                break;
              }

              name = name.toLowerCase();
              var parent = $node.parent();
              var sameTagSiblings = parent.children(name);

              if (sameTagSiblings.length > 1) {
                let allSiblings = parent.children();
                var index = allSiblings.index(realNode) + 1;
                if (index > 0) {
                  name += ':nth-child(' + index + ')';
                }
              }

              path = name + (path ? ' > ' + path : '');
              $node = parent;
            }

            pathes.push(path);
          });

          return pathes.join(',');
        }
      });
    },

    mounted() {
      _http.get('/modifications').then(response => this.modifications = JSON.parse(response.data.config)).catch(e => modifications = true);

      this.originalModifications = Vue.util.extend({}, this.modifications);

      $(this.$refs.editorFrame).on('mouseout', () => {
        this.frameBody.find('#jw-rect').remove();
      });

      this.$refs.editorFrame.onload = () => {
        this.frameBody = $(this.$refs.editorFrame.contentDocument.body);

        this.frameBody.ready(() => {
          $(document).on('keyup', (e) => {
            if (e.keyCode === 27) {
              this.clearEditing();
            }
          });

          this.frameBody.on('keyup', (e) => {
            if (e.keyCode === 27) {
              this.clearEditing();
            }
          });

          this.injectEditor();

          this.frameBody.bind('mouseover mouseout', (event) => {
            if (!this.currentElement) {
              var $tgt = event.target;

              this.addFrameRect($tgt);
            }
          }).click((event) => {
            if (event.target.parentElement.parentElement.parentElement.parentElement.id !== 'jw-editor' || event.target.id === 'jw-editor') {
              event.stopImmediatePropagation();
              event.stopPropagation();
              event.preventDefault();

              this.currentElement = event.target;

              this.currentSelector = $(this.currentElement).getPath();

              if (!this.modifications.hasOwnProperty(this.currentSelector)) {
                this.modifications[this.currentSelector] = Vue.util.extend({}, this.modification);

                //this.modifications[this.currentSelector].innerText = this.currentElement.innerText;
              }

              this.showEditor();

              return false;
            }
          });
        });

        this.addFrameStyles();
      }
    },

    methods: {
      injectEditor() {
        this.injectedEditor = this.$refs.editor.cloneNode('deep');

        this.addEditorInputs();

        this.frameBody.append(this.injectedEditor);
      },

      addEditorInputs() {
        const editor = $(this.injectedEditor);

        this.innerHTMLTextarea = $(`<textarea>`, {
          style: 'width: 100%;'
        });

        this.innerHTMLTextarea.on('keyup', (event) => {
          console.log('hello');
          this.modifications[this.currentSelector].innerText = event.target.value;
          this.updateElementText(event);
        });

        editor.find('#innerHTMLPlaceholder').html(this.innerHTMLTextarea);
      },

      showEditor() {
        const editor = $(this.injectedEditor);

        this.innerHTMLTextarea.val(this.currentElement.innerText);

        editor.removeClass('hidden');
      },

      hideEditor() {
        const editor = $(this.injectedEditor);

        editor.addClass('hidden');
      },

      splitHostname() {
        var result = {};
        var regexParse = new RegExp('([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$');
        var urlParts = regexParse.exec(window.location.hostname);
        result.domain = urlParts[1];
        result.type = urlParts[2];
        result.subdomain = window.location.hostname.replace(result.domain + '.' + result.type, '').slice(0, -1);

        return result;
      },
      saveModifications() {
        _http.post('/modifications/save', {
          domain: this.splitHostname()['subdomain'],
          config: this.modifications
        });
      },

      clearEditing() {
        this.editType = 0;
        this.currentElement = false;
        this.hideEditor();
        this.elementText = "";
      },

      updateElementText() {
        this.currentElement.innerText = this.modifications[this.currentSelector].innerText;
      },

      isTextElement(element) {
        const nodeType = element.nodeName;
        const textTypes = ['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'DIV'];

        return textTypes.indexOf(nodeType) !== -1;
      },

      showTextEdit(element) {
        this.modifications[this.currentSelector].innerText = element.innerText;
        this.editType = 1;
      },

      getCoords(elem) {
        var left = 0,
          top = 0;

        do {
          left += elem.offsetLeft - elem.scrollLeft;
          top += elem.offsetTop - elem.scrollTop;
        } while (elem = elem.offsetParent);

        return {left, top};
      },

      getSize(elem) {
        return {width: elem.offsetWidth, height: elem.offsetHeight};
      },

      createRect(elem, position, size) {
        const div = $('<div />');

        div.css({
          position: 'absolute',
          top: position.top,
          left: position.left,
          width: size.width,
          height: size.height,
          border: '2px solid red',
          zIndex: '9999',
          pointerEvents: 'none'
        });

        div.attr('id', 'jw-rect');

        return div;
      },

      addFrameRect(elem) {
        const position = this.getCoords(elem);
        const size = this.getSize(elem);
        const rect = this.createRect(elem, position, size);

        this.frameBody.find('#jw-rect').remove();

        this.frameBody.append(rect);
      },

      addFrameStyles() {
        const link = document.createElement('link');

        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "/css/framed.css";

        this.frameBody.append(link);
      }
    },

    watch: {
      'modifications': {
        handler() {
          this.modificationsDirty = Object.keys(this.modifications).join('') !== Object.keys(this.originalModifications).join('');
        },

        deep: true
      }
    }

  }
</script>

<style>
    #jw-editor {
        position: fixed;
        width: 350px;
        height: 300px;
        background-color: #2d3e4f;
        color: white;
        padding: 10px;
    }
</style>