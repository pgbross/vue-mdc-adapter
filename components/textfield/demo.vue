<template>
  <div class="mdc-demo mdc-demo--container">
    <mdc-layout-grid>
      <mdc-layout-cell span="6">
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          label="textfield"
          helptext="Help text..."
          ><p slot="helpText">Help text 1...</p></mdc-textfield
        >
        <form>
          <mdc-textfield
            v-model="password"
            type="password"
            label="Password"
            minlength="8"
            maxlength="10"
            helptext="passord must be 8 to 10 characters"
            helptext-persistent
            helptext-validation
            autocomplete
          >
            <p slot="helpText">
              password must be 8 to 10 characters.
            </p></mdc-textfield
          >
        </form>

        <p></p>
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          label="outlined"
          outline
        >
          <p slot="helpText">Help text 2...</p>
          <i
            slot="leadingIcon"
            class="material-icons"
            @click="ondelete"
            role="button"
            tabindex="0"
            >delete</i
          >
          <i slot="trailingIcon" class="material-icons">favorite</i>
        </mdc-textfield>
        <mdc-textfield
          :disabled="!enabled"
          v-model="textField"
          :leading-icon="{ className: 'fa fa-font-awesome' }"
          label="in a box"
          helptext="Help text..."
        />
      </mdc-layout-cell>
      <mdc-layout-cell span="6">
        <p>
          <mdc-textfield
            :disabled="!enabled"
            v-model="textField"
            multiline
            rows="15"
            label="multiline"
          />
        </p>
      </mdc-layout-cell>
      <mdc-layout-cell span="12">
        <p>
          <mdc-textfield
            :disabled="!enabled"
            v-model="textField"
            fullwidth
            label="full width"
          />
        </p>
      </mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textField: '',
      enabled: true,
      password: ''
    }
  },
  methods: {
    ondelete() {
      console.log('ondelete')
    }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
