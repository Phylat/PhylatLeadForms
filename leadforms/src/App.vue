<template>
  <div id="app">
    <step-form />
  </div>
</template>

<script>
  import StepForm from "@/components/forms/step_form_placeholder.vue";
  export default {
    name: "Initial",
    components: {
      "step-form": StepForm
    }
  };
</script>
