<template>
<form >
<component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               v-bind="field">
</component>  
</form>
</template>

<script>
import TextInput from "@/components/UI/Forms/Inputs/TextInput.vue";
import SelectList from "@/components/UI/Forms/Inputs/SelectList.vue";
import NumberInput from "@/components/UI/Forms/Inputs/NumberInput.vue";
export default {
  data() {
    return {
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["Ms", "Mr", "Mx", "Dr", "Madam", "Lord"]
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName"
        },
        {
          fieldType: "TextInput",
          placeholder: "Last Name",
          label: "Last Name",
          name: "lastName"
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          name: "age",
          label: "Age",
          minValue: 0
        }
      ]
    };
  },
  components: {
    TextInput,
    SelectList,
    NumberInput
  }
};
</script>
