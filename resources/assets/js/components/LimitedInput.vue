<template>
    <div v-if="inputType === 'input'">
        <div ref="fakeInput" contenteditable="true" type="text" class="form-control fakeInput" style="margin-bottom: 10px;" v-on:keyup="checkInput">{{ inputValue }}</div>
        <input :name="name" type="text" style="display: none;" v-bind:value="inputValue" />
        <p class="text-right" v-if="hasMax">{{ charCount }} / {{ max }}</p>
    </div>
</template>

<script>
    export default {
      name: 'limited-input',
      props: ['max', 'type', 'name', 'value'],

      data() {
        return {
          charCount: 0,
        }
      },

      mounted() {
        this.checkInput();
      },

      beforeMount() {
        this.inputValue = (this.value === undefined ? "" : this.value)
        this.name = (this.name === undefined ? '' : this.name);
        this.hasMax = this.max;
        this.inputType = (this.type === undefined ? 'input' : this.type);
      },

      methods: {
        setEndOfContenteditable(contentEditableElement)
        {
          var range,selection;

          if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
          {
            range = document.createRange();//Create a range (a range is a like the selection but invisible)
            range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            selection = window.getSelection();//get the selection object (allows you to change selection)
            selection.removeAllRanges();//remove any selections already made
            selection.addRange(range);//make the range you have just created the visible selection
          }
          else if(document.selection)//IE 8 and lower
          {
            range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
            range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
            range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
            range.select();//Select the range (make it the visible selection
          }
        },

        checkInput() {
          this.inputValue = this.$refs.fakeInput.innerText;
          this.charCount = this.$refs.fakeInput.innerText.length;

          $(this.$refs.fakeInput).append(this.highlightBadChars());
          this.setEndOfContenteditable(this.$refs.fakeInput);

          this.$emit('input', this.$refs.fakeInput.innerText);
        },

        highlightBadChars() {
          const okayChars = this.$refs.fakeInput.innerText.substring(0, this.max);
          const badChars = this.$refs.fakeInput.innerText.substring(this.max, this.$refs.fakeInput.innerText.length);

          $(this.$refs.fakeInput).empty();

          if (badChars.length) {
            this.$emit('hasBadChars', true);
          } else {
            this.$emit('hasBadChars', false);
          }

          return okayChars + '<span class="badChars">' + badChars + '</span>';
        }
      },
    }
</script>

<style>
    .badChars {
        background: rgba(255, 0, 0, 0.35);
    }

    .fakeInput {
        max-height: 45px;
        overflow: auto;
        white-space: nowrap;
    }
</style>