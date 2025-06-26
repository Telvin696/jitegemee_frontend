<script setup>
import { useCoursesStore } from '../stores/courses'
import {ref} from 'vue'

const coursesStore=useCoursesStore()
const courses=coursesStore.courses

const selectedCourse = courses.find(course => course.id == coursesStore.selectedCourse);
//models (to uniquely identify each text field)
const firstName = defineModel('firstName')
const middleName = defineModel('middleName')
const lastName = defineModel('lastName')
const emailAddress = defineModel('emailAddress')
const phoneNumber = defineModel('phoneNumber')
const physicalAddress = defineModel('physicalAddress')
const gender = defineModel('gender')
const dob = defineModel('dob')
const nationality = defineModel('nationality')

//object to hold form data
const applicationFormDetails =ref({
    firsName:firstName,
     middleName:middleName,
     lastName:lastName,
     emailAddress:emailAddress,
     phoneNumber:phoneNumber,
     physicalAddress:physicalAddress,
     gender:gender,
     dob:dob,
     nationality:nationality,
     course:selectedCourse
      
})

//funtion to save data
function saveData(){
    for(let item in applicationFormDetails.value){
        console.log(applicationFormDetails.valus[item])
}
}
</script>

 
<template>
    <v-container>
        <v-row>
            <p>You are applying for {{ selectedCourse.name }} , 
                the next course intake is in {{ selectedCourse.intake }}</p>
        </v-row>
    </v-container>

    <!--Apply form-->
    <v-container>
    
        <!--FIrst name, Middle name, Last name-->
        <v-row>
            <v-col md="4">
            <v-text-field label="First name" v-model="firstName"> </v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Middle name"v-model="middleName"></v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Last name"v-model="lastName"></v-text-field>
            </v-col>

        </v-row>
        <!--email,phone, physical address-->
        <v-row>
         <v-col md="4">
            <v-text-field label="Email address"></v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Phone number"></v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Pysical address"></v-text-field>
            </v-col>

            </v-row>
         <!--gender ,date of birth,nationality-->
         <v-row>
         <v-col md="4">
            <v-text-field label="Gender"></v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Date of birth"></v-text-field>
            </v-col>
            <v-col md="4">
            <v-text-field label="Nationality"></v-text-field>
            </v-col>

            </v-row>
             <v-row>
                <v-btn block color="orange">Submit</v-btn>
             </v-row>

        
     </v-container>
</template>