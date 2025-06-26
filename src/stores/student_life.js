import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStudentLifeStore = defineStore('student_life',  {
    state: () => {
        const student_life = ref([
            {
                id: 1,
                title: "Beyond the Books: A Journey Through Student Life ",
                image: "public/clay-banks-GX8KBbVmC6c-unsplash.jpg",
                description: "Mary has been hitting the books constanatly but has decided to change then way she lives life in University. ",
            },
            {
                id: 2,
                title: "Study,chill,repeat. Life at its best",
                image: "public/sam-jotham-sutharson-QZISBD7Wyhs-unsplash.jpg",
                description: "Creating a mantra to increase your output in class can be bebefitial",
            },
            {
                id: 3,
                title: "Find a away to relax by joining a club",
                image: "public/trung-nhan-tran-Fa-jrM6ANtI-unsplash.jpg",
                description: "One need s to refresh the mind. What better way than to join a club of you liking!",
            },
            {
                id: 4,
                title: "Spirtual life",
                image: "public/joel-muniz-XqXJJhK-c08-unsplash.jpg",
                description: "We all need God. Join us as we worship and seek spiritual nurishment.",
            },
            {
                id: 5,
                title: "Swimming like fish",
                image: "public/maksym-tymchyk-bGOBoZorNoQ-unsplash.jpg",
                description: "Luke with a promising career in professional swimming, shares how he balances his life. ",
            },
            {
                id: 6,
                title: "Breakthroughs in technology",
                image: "public/chandler-revard-ibIDURfbUDs-unsplash.jpg",
                description: "Read about how our students are using there knowledge to change the world",
            },
        
        ])

        return{
            student_life,
        }
    }, 
    actions:{
        
    }
})

