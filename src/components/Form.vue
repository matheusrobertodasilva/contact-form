<template>
    <section>
        <div class="bg-White p-5 rounded-xl">
            <h1 class="text-Grey-900-(darker) font-bold text-[28px]">Contact Us</h1>
            <form action="" class="text-Grey-900-(darker) space-y-5">
                <label for="firstName" class="flex flex-col"> First Name 
                    <input id="firstName" type="text" class="cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:caret-Green-600-(medium)" v-model="firstName">
                </label>
                <label for="lastName" class="flex flex-col"> Last Name 
                    <input id="lastName" type="text" class="cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:caret-Green-600-(medium)" v-model="lastName">
                </label>
                <label for="emailAddress" class="flex flex-col"> Email Address 
                    <input id="emailAddress" type="text" class="cursor-pointer p-2 rounded-lg border border-Grey-900-(darker) outline-none focus:border-Green-600-(medium) focus:outline-3 focus:caret-Green-600-(medium)" v-model="emailAddress">
                </label>
                <label for="queryType" class="flex flex-col space-y-4"> Query Type 
                    <label for="generalEnquiry" class="cursor-pointer border border-Green-600-(medium)  p-3 rounded-lg " :class="[queryType == 'generalEnquiry' ? 'bg-Green-200-(lighter)' : '']">
                        <input id="generalEnquiry" name="queryType" value="generalEnquiry" type="radio" class="p-2 rounded-lg border border-Grey-900-(darker) accent-Green-600-(medium) " v-model="queryType"> General Enquiry 
                    </label>
                    <label for="supportRequest" class="cursor-pointer border border-Green-600-(medium) p-3 rounded-lg " :class="[queryType == 'supportRequest' ? 'bg-Green-200-(lighter)' : '']">
                        <input id="supportRequest" name="queryType" value="supportRequest" type="radio" class="p-2 rounded-lg border border-Grey-900-(darker) accent-Green-600-(medium)" v-model="queryType"> Support Request
                    </label>
                </label>
                <label for="message" class="flex flex-col"> Message 
                    <textarea id="message" rows="8" class="cursor-pointer outline-none focus:caret-Green-600-(medium) p-2 rounded-lg border border-Grey-900-(darker) focus:border-Green-600-(medium) focus:outline-3 "></textarea>
                </label>
                <label for="checkbox" class="flex items-center cursor-pointer">  
                    <input id="checkbox" type="checkbox" class="cursor-pointer w-5 h-5 p-2 border-2 mr-4 accent-Green-600-(medium)" v-model="checkbox"> <span>I consent to being contacted by the team <i class="text-Green-600-(medium)">*</i></span>
                </label>
                <input type="submit" value="Submit" class="cursor-pointer bg-Green-600-(medium) text-White p-4 rounded-xl font-bold w-[81vw] checked:bg-Green-600-(medium) hover:bg-Grey-900-(darker)">
            </form>
        </div>
    </section>
</template>

<script>
    export default{
        data(){
            return{
                queryType:null,
                checkbox:""
            }
        },

    }
</script>