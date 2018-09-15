<template>
  <div>
    <label>
      <slot />
    </label>
    <!-- NOTE: Conditionally choose which type of 'input' to render between either input or text area based on the controlType propety input, than uses two way binding to check for type, binds the value with :value, and also passes a custom event listener on the js input event  -->
    <input :class="inputClass" v-if="controlType === 'input'" v-bind="$attrs" :data-lead-score="leadscore" :value="value" @input="$emit('input', $event.target.value, $event.target.dataset.leadScore)">
    <textarea :class="inputClass" v-if="controlType === 'textarea'" rows="10" :data-lead-score="leadscore" :value="value" @input="$emit('input', $event.target.value, $event.target.dataset.leadScore)" />
    <input :class="inputClass" v-if="controlType === 'radio'" v-bind="$attrs" :data-lead-score="leadscore" :value="value" @input="$emit('input', $event.target.value, $event.target.dataset.leadScore)">
    
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
    inputClass: {
      type: String,
      default: "input"
    },
    leadscore: {
      type: String,
      default: ""
    }
    /*options: {
      type: Array,
      default: function() {
        return { options: "" };
      }
    }*/
  }
};
</script>

<style>
</style>
