<!-- <template>
  <p ref="helptextEl" :class="classes" aria-hidden="true"><slot /></p>
</template> -->

<script>
import MDCTextFieldHelperTextFoundation from '@material/textfield/helper-text/foundation'
import * as classnames_ from 'classnames'

let classnames = classnames_

export default {
  name: 'textfield-helper-text',

  // functional: true,
  props: {
    persistent: Boolean,
    validation: Boolean
  },
  data() {
    const node = this.$slots.default[0]
    return {
      classes: {
        'mdc-text-field-helper-text': true,
        'mdc-text-field-helper-text--persistent': node.data.attrs.persistent,
        'mdc-text-field-helper-text--validation-msg': node.data.attrs.validation
      }
    }
  },

  render(h) {
    const node = this.$slots.default[0]
    node.data.class = classnames(this.classes)
    return node
  },
  watch: {
    persistent() {
      this.foundation.setPersistent(this.persistent)
    },
    validation() {
      this.foundation.setValidation(this.validation)
    }
  },
  mounted() {
    this.foundation = new MDCTextFieldHelperTextFoundation({
      addClass: className => this.$set(this.classes, className, true),
      removeClass: className => this.$delete(this.classes, className),

      hasClass: className => Boolean(this.classes[className]),

      setAttr: (attr, value) => {
        this.$el.setAttribute(attr, value)
      },
      removeAttr: attr => {
        this.$el.removeAttribute(attr)
      },
      setContent: (/*content*/) => {
        // help text get's updated from {{helptext}}
        // cf. this.$el.textContent = content
      }
    })

    this.foundation.init()
  },

  beforeDestroy() {
    this.foundation.destroy()
  }
}
</script>
