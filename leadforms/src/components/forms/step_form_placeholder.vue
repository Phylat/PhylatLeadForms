<template>
  <div>
    {{currentTagline}}
    <hr/>>
    <step-form-generator 
    v-model="formData" 
    :schema="currentSchema" 
    :stepButtons="stepButtons" 
    :curStep="currentStep"
    @nextStep="next"
    @prevStep="prev"
    @submitForm="submit">
    </step-form-generator>
   
    <p>
        <hr/>
      {{stepReturn}}
        <hr/>
      {{currentStep}}
        <hr/>
      {{stepsRemaining}}
      <hr/>
      <h2>Hello</h2> {{formData.firstName}} 
      <hr />
      <h2>so you want something developed for</h2>{{formData.platform}}, 
      <hr />
      <h2>Pre-existing software?</h2>{{formData.preexistingSoftware}} 
      <hr />
      <h2>Wow thats a great timeline of</h2>{{formData.timeline}} 
      <hr />
      <h2>Cheepscate your budget is only</h2>{{formData.budget}} 
      <hr />
      <h2>Ok I guess i'll email you at</h2>{{formData.email}}.
    </p>
  </div>
</template>

<script>
import StepFormGenerator from "@/components/forms/Includes/StepFormGenerator.vue";

export default {
  name: "StepForm",
  components: { StepFormGenerator },
  data() {
    return {
      formData: {
        firstName: ""
      },
      currentStep: 1,
      stepButtons: false,
      currentTagline: null,
      currentSchema: null,
      stepSchema: [
        {
          step: 1,
          TagLine: "Tell us about your project",
          schema: [
            {
              fieldType: "TextInput",
              placeholder: "Name",
              label: "What should we call you?",
              name: "firstName"
            }
          ]
        },
        {
          step: 2,
          //Todo
          TagLine: "Thanks now some details about your project",
          schema: [
            {
              fieldType: "SelectList",
              name: "platform",
              multi: false,
              label: "What platform would you like your software to supports",
              options: [
                "Web",
                "Mobile",
                "IOT",
                "Multiple Platforms",
                "Other",
                "Not Sure"
              ]
            },
            {
              fieldType: "SelectList",
              name: "preexistingSoftware",
              multi: false,
              label: "Do you have any preexisting software?",
              options: ["", "Yes", "No"]
            }
          ]
        },
        {
          step: 3,
          TagLine: "",
          schema: [
            {
              fieldType: "SelectList",
              name: "timeline",
              multi: false,
              label: "Do you have a timeline in mind?",
              options: ["", "ASAP", "0-6 Months", "1-2 Years", "Not Sure"]
            },
            {
              fieldType: "SelectList",
              name: "budget",
              multi: false,
              label: "What is your budget?",
              options: ["", "0-5k", "5-20k", "10-25k", "Not Sure"]
            }
          ]
        },
        {
          step: 4,
          schema: [
            {
              fieldType: "TextInput",
              placeholder: "Email Address",
              label: "What is the best way to contact you?",
              name: "email"
            }
          ]
        }
      ]
    };
  },
  methods: {
    prev() {
      this.currentStep--;
    },
    next() {
      this.currentStep++;
    },

    submit() {
      let visSessionId = this.trackVisId;
      if (this.name && this.name && !this.hpotval) {
        const timeCreated = Date.now();

        fb.contactCollection
          .doc()
          .set({
            session_id: visSessionId,
            name: this.name,
            email: this.email,
            addDate: timeCreated
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      } else {
        this.errormsg = "You have to fill out all of the inputs";
        return;
      }
      alert("Submit to blah and show blah and etc.");
    }
  },
  computed: {
    stepReturn() {
      let curStep = this.currentStep;
      let formprocess = this.stepSchema;

      let processedForm = formprocess
        .filter(forminputs => {
          return forminputs.step === curStep;
        })
        .map(function(formins) {
          return formins;
        });
      console.log(processedForm);
      this.currentSchema = processedForm[0].schema;
      this.currentTagline = processedForm[0].TagLine;

      return processedForm[0];
    },

    stepsRemaining() {
      var currentLength = this.currentStep;
      var totalLength = this.stepSchema.length;
      const stepCounter = false;

      if (totalLength > currentLength) {
        stepCounter === true;
        this.stepButtons = true;
        console.log("nomoresteps");
      } else {
        this.stepButtons = false;
        stepCounter == false;
        console.log("moresteps");
      }

      return stepCounter;
    }
  }
};
</script>
