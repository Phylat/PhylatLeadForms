<template>
  <div>
    <component v-for="(field, index) in schema" 
    :key="index" :is="field.fieldType" 
    :value="formData[field.name]" 
    @input="updateForm(field.name, $event)"
      v-bind="field">
    </component>
     <button v-for="item in currentOptions" :key="item.id" @click.prevent="optionAction(item.action)">{{item.text}}</button>

  </div>
</template>

<script>
import NumberInput from "@/components/forms/Includes/NumberInput";
import SelectList from "@/components/forms/Includes/SelectList";
import TextInput from "@/components/forms/Includes/TextInput";
export default {
  name: "StepFormGenerator",
  components: { NumberInput, SelectList, TextInput },
  props: ["schema", "value", "stepButtons", "currentStep", "currentOptions"],
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
    optionAction(i) {
      this.$emit("clickAction", i);
    },
    submitForm() {
      this.$emit("submitForm");
    }
  }
};
</script>
