<template>
    <Notification v-if="test" />
    <section class="p-10">
        <div class="bg-White p-5 lg:p-8 rounded-xl lg:">
            <h1 class="text-Grey-900-(darker) font-bold text-[28px] mb-5">Contact Us</h1>
            <form action="" class="text-Grey-900-(darker) space-y-6 lg:flex lg:flex-col justify-center ">
                <fieldset class="lg:flex space-y-5 lg:space-y-0  lg:space-x-5">
                    <label class="flex flex-col">
                        <span class="after:content-['*'] after:text-Green-600-(medium)">First Name </span>
                        <input type="text"
                            class="mt-2 cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:caret-Green-600-(medium) lg:w-[19.2vw]"
                            :class="[error.firstName != '' ? 'border-red-400': '']"
                            v-model="firstName">
                        <!-- Mensagem de erro -->
                        <span class="text-red-400 mt-2">{{ error.firstName }}</span>
                    </label>
                    <label class="flex flex-col">
                        <span class="after:content-['*'] after:text-Green-600-(medium)">Last Name </span>
                        <input type="text"
                            :class="[error.lastName != '' ? 'border-red-400': '']"
                            class="mt-2 cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:caret-Green-600-(medium) lg:w-[19.2vw]"
                            v-model="lastName">
                        <!-- Mensagem de erro -->
                        <span class="text-red-400 mt-2">{{ error.lastName }}</span>
                    </label>
                </fieldset>

                <label class="flex flex-col ">
                    <span class="after:content-['*'] after:text-Green-600-(medium)">Email Address </span>
                    <input type="text"
                    :class="[error.emailAddress != '' ? 'border-red-400': '']"
                        class="mt-2 cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:outline-3 focus:caret-Green-600-(medium)"
                        v-model="emailAddress">
                    <!-- Mensagem de erro -->
                    <span class="text-red-400 mt-2">{{ error.emailAddress }}</span>
                </label>
                <fieldset class="flex flex-col lg:justify-between  lg:flex-row lg:space-y-0 space-y-4">
                    <legend class="mb-3">Query Type <i class="text-Green-600-(medium)">*</i></legend>
                    <label class=" cursor-pointer border border-Grey-900-(darker) p-3 rounded-lg lg:w-[19.2vw]"
                        :class="[queryType == 'generalEnquiry' ? 'bg-Green-200-(lighter)' : '']">
                        <input name="queryType" value="generalEnquiry" type="radio"
                            class="p-2 rounded-lg border border-Grey-900-(darker) accent-Green-600-(medium) "
                            v-model="queryType"> General Enquiry
                    </label>
                    <label class="cursor-pointer border border-Grey-900-(darker) p-3 rounded-lg lg:w-[19.2vw]"
                        :class="[queryType == 'supportRequest' ? 'bg-Green-200-(lighter)' : '']">
                        <input name="queryType" value="supportRequest" type="radio"
                            class="p-2 rounded-lg border border-Grey-900-(darker) accent-Green-600-(medium)"
                            v-model="queryType"> Support Request
                    </label>
                </fieldset>
                <!-- Mesagem de erro do campo radio -->
                <span class="text-red-400 mt-2">{{ error.queryType }}</span>

                <label class="flex flex-col">
                    <span class="after:content-['*'] after:text-Green-600-(medium)">Message </span>
                    <textarea rows="4"
                        :class="[error.message != '' ? 'border-red-400' : '']"
                        class="mt-2 cursor-pointer outline-none focus:caret-Green-600-(medium) p-2 rounded-lg border border-Grey-900-(darker) focus:border-Green-600-(medium) focus:outline-3 "
                        v-model="message"></textarea>
                    <!-- Mensagem de erro -->
                    <span class="text-red-400 mt-2">{{ error.message }}</span>
                </label>
                <label class="flex items-center cursor-pointer">
                    <input type="checkbox" class="cursor-pointer w-5 h-5 p-2 border-2 mr-4 accent-Green-600-(medium)"
                        v-model="checkbox">
                    <span class="after:content-['*'] after:text-Green-600-(medium)">I consent to being contacted by the
                        team </span>
                </label>
                <!-- Erro do campo checkbox -->
                <span class="text-red-400 mt-3">{{ error.checkbox }}</span>

                <button @click.prevent="submit"
                    class="cursor-pointer bg-Green-600-(medium) text-White p-4 rounded-xl font-bold w-[81vw] lg:w-auto checked:bg-Green-600-(medium) hover:bg-Grey-900-(darker)">Submit</button>
            </form>
        </div>
    </section>
</template>

<script>

    import Notification from './Notification.vue'
    
    export default {
        components:{
            Notification
        },
        data() {
            return {
                firstName: "",
                lastName: "",
                emailAddress: "",
                queryType: null,
                message:"",
                checkbox: false,
                error: {
                    firstName: "",
                    lastName:"",
                    emailAddress: "",
                    queryType: "",
                    message: "",
                    checkbox: ""
                },
                test: false

            }
        },
        methods: {
            checkFirstName() {
                if (this.firstName == "" || isNaN(this.firstName) == false) {
                    this.error.firstName = "This field is required"
                    return false
                } else {
                    this.error.firstName = ""
                }
            },
            checkLastName() {
                if (this.lastName == "" || isNaN(this.lastName) == false) {
                    this.error.lastName = "This field is required"
                } else {
                    this.error.lastName = ""
                }
            },
            checkEmail(){
                if(this.emailAddress == "" || this.emailAddress.includes("@") == false || this.emailAddress.includes(".com") == false){
                    this.error.emailAddress = "Please enter a valid email address"
                } else {
                    this.error.emailAddress = ""
                }
            },
            checkQueryType(){
                if(this.queryType == "" || this.queryType == null ){
                    this.error.queryType = "Place select a query type"
                } else {
                    this.error.queryType = ""
                }
            },
            checkMessage(){
                if(this.message == ""){
                    this.error.message = "This field is required"
                } else {
                    this.error.message = ""
                }
            },
            checkCheckbox(){
                if(this.checkbox == false){
                    this.error.checkbox = "To submit this form, place consent to being contacted"
                }else {
                    this.error.checkbox = ""
                }
            },
            submit() {
                this.checkLastName();
                this.checkFirstName();
                this.checkEmail();
                this.checkQueryType();
                this.checkMessage()
                this.checkCheckbox()

                console.log(this.checkLastName(),
                this.checkFirstName(),
                this.checkEmail(),
                this.checkQueryType(),
                this.checkMessage(),
                this.checkCheckbox())
                
                this.test = !this.test
            }
        }

    }
</script>

<!-- 
    error: {
        checkbox: "To submit this form, place consent to being contacted",
        message: "This field is required",
        queryType: "Place select a query type",
        emailAddress: "Please enter a valid email address",
        name: "This field is required"
    },
 -->