<template>
    <Transition>
        <div class="absolute top-0 left-0 lg:left-[33.5%] p-5 m-3 bg-Grey-900-(darker) rounded-xl space-y-3 ">
            <div class="flex space-x-2 font-[800]">
                <!-- <img src="./src/assets/images/icon-success-check.svg" alt="icon of success"> -->
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21">
                    <path fill="#fff"
                        d="M14.28 7.72a.748.748 0 0 1 0 1.06l-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.75.75 0 0 1 1.06 0Zm5.47 2.78A9.75 9.75 0 1 1 10 .75a9.76 9.76 0 0 1 9.75 9.75Zm-1.5 0A8.25 8.25 0 1 0 10 18.75a8.26 8.26 0 0 0 8.25-8.25Z" />
                </svg>
                <h3>Message Sent!</h3>
            </div>
            <p>Thanks for completing the form. We'll be in touch soon!</p>
        </div>
    </Transition>
</template>

<style>
    .v-enter-from {
        opacity: 0;
        translate: -100px 0;
    }
    
    .v-enter-to {
        opacity: 1;
        translate: 0 0;
    }
    
    .v-leave-from {
        opacity: 1;
        translate: 0 0;
    }
    
    .v-leave-to {
        opacity: 0;
        translate: 100px 0;
    }
</style>