<script setup>
import {ref} from 'vue'
import { useCoursesStore } from '../stores/courses'
import { useRouter } from 'vue-router'

const router = useRouter()
const coursesStore = useCoursesStore() //making the courses accessible
const courses= coursesStore.courses

function apply(courseId){
        coursesStore.updateSelectedCourse(courseId) // keep track of the course selected
        router.push('/apply')
}

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="4" v-for="course in courses">
                <v-card color = "orange">
                <v-card-item>
                <v-card-title>{{course.name}}</v-card-title>

                <v-card-subtitle>{{course.school}}</v-card-subtitle>
                </v-card-item>

                <v-card-text>
                {{course.description}}
                </v-card-text>
                <v-card-text>
                    {{course.intake}}
                </v-card-text>
                <v-card-actions>
                    <v-btn color = "black" @click="apply(course.id)"> Apply </v-btn>
                </v-card-actions>
            </v-card>
            
            </v-col>
        </v-row>
    </v-container>
</template>