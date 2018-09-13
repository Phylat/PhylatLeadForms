<template>
    <div>

        <!-- select one     <select v-if="controlType === 'select'" v-bind="$attrs" @input="$emit('change', $event.target.value)">
      <slot name="optionsslot" :value="value"></slot>
    </select>-->

        <select :class="selectInputClass" v-bind="$attrs" @input="$emit('input', $event.target.value)">
            <slot></slot>
        </select>

        <!-- select one-->
    </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    },
    selectInputClass: {
      type: String,
      default: "input"
    }
    /*options: {
      type: Array,
      default: function() {
        return { options: [] };
      }
    }*/
  }
};
</script>

<style>
</style>