<template>
  <div>
    <component v-for="(field, index) in schema" 
    :key="index" :is="field.fieldType" 
    :value="formData[field.name]" 
    @input="updateForm(field.name, $event)"
      v-bind="field">
    </component>
    <div v-if="stepButtons">
      <button @click.prevent="prevStep(currentStep)">Previous</button>
      <button @click.prevent="nextStep(currentStep)">Next</button>
    </div>
    <div v-else>

      <button @click.prevent="prevStep(currentStep)">Previous</button>
      <button class="button" @click.prevent="submitForm">Save</button>
    </div>
  </div>
</template>

<script>
import NumberInput from "@/components/forms/Includes/NumberInput";
import SelectList from "@/components/forms/Includes/SelectList";
import TextInput from "@/components/forms/Includes/TextInput";
export default {
  name: "StepFormGenerator",
  components: { NumberInput, SelectList, TextInput },
  props: ["schema", "value", "stepButtons", "currentStep"],
  data() {
    return {
      formData: this.value || {}
    };
  },
  methods: {
    updateForm(fieldName, value) {
      this.$set(this.formData, fieldName, value);
      this.$emit("input", this.formData);
    },
    nextStep(i) {
      this.$emit("nextStep", i);
    },
    prevStep(i) {
      this.$emit("prevStep", i);
    },
    submitForm() {
      this.$emit("submitForm");
    }
  }
};
</script>
