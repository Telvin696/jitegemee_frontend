import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
    const events = ref([
    {
        name:"Community Outreach at Northern Kenya",
        image:"public/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg",
        date:"July 6th 2025",
        location:"Northern Kenya School",
        


    },
    {
        name:"Food Festvial",
        image:"public/joseph-gonzalez-fdlZBWIP0aM-unsplash (1).jpg",
        date:"July 1st 2025",
        location:"Jamuhuri Sports Grounds",
        


    },
    {
        name:"Sports Day",
        image:"public/frankie-lopez-jI3PmZZscBs-unsplash.jpg.crdownload",
        date:"July 14th 2025",
        location:"Ulinzi Sports Complex",
        

    },
    {
        name:"Software Development Bootcamp",
        image:"public/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash.jpg.crdownload",
        date:"August 1st 2025",
        location:"Jitegemee University",
        


    }

])

 

  return { events }
})
