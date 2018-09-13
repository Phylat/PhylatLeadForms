<template>
    <div class="contact-us-form">
        <form class="form-validation">
            {{step}}
            <div v-if="step === 1" class="wrapper">

                <h1>Step One</h1>

                <label>name</label>
                <AppControlInput :inputClass="inputClass" type="text" placeholder="mame" v-model="name"></AppControlInput>

                <button @click.prevent="next()">Next</button>

            </div>

            <div v-if="step === 2">
                <h1>Step Two</h1>
                <AppControlInput :inputClass="inputClass" type="text" placeholder="Email address" v-model="email"></AppControlInput>

                <legend for="street">Your Street:</legend>
                <input id="street" name="street" v-model="registration.street">

                <legend for="city">Your City:</legend>
                <input id="city" name="city" v-model="registration.city">

                <legend for="state">Your State:</legend>
                <input id="state" name="state" v-model="registration.state">

                <button @click.prevent="prev()">Previous</button>
                <button @click.prevent="next()">Next</button>

            </div>

            <div v-if="step === 3">
                <h1>Step Three</h1>

                <legend for="numtickets">Number of Tickets:</legend>
                <input id="numtickets" name="numtickets" type="number" v-model="registration.numtickets">

                <legend for="shirtsize">Shirt Size:</legend>
                <select id="shirtsize" name="shirtsize" v-model="registration.shirtsize">
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">X-Large</option>
                </select>

                <button @click.prevent="prev()">Previous</button>
                <button class="button" @click.prevent="submit">Save</button>

            </div>
        </form>

    </div>

</template>

<script>
    import AppControlInput from "@/components/UI/Forms/AppControlInput.vue";
    import AppSelectInput from "@/components/UI/Forms/AppSelectInput.vue";
    const fb = require("@/services/firebase/init.js");

    export default {
      name: "home",
      data() {
        return {
          trackVisId: "randomevisitorid",
          step: 1,
          inputClass: "casdasd",
          loading: false,
          name: null,
          email: null,
          registration: {
            name: null,
            email: null,
            street: null,
            city: null,
            state: null,
            numtickets: 0,
            shirtsize: "XL"
          }
        };
      },
      components: {
        AppControlInput,
        AppSelectInput
      },
      methods: {
        prev() {
          this.step--;
        },
        next() {
          this.step++;
        },
        submit() {
          let visSessionId = this.trackVisId;
          if (this.name && this.name) {
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
      }
    };
</script>
