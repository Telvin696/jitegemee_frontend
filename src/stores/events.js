import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
    const events = ref([
    {
        name:"Community Outreach at Northern Kenya",
        image:"../../public/Images/daniel-mtombosola-IC36xB8p_iY-unsplash.jpg",
        date:"July 6th 2025",
        location:"Northern Kenya School",
        category:"Community Outreach",


    },
    {
        name:"Food Festvial",
        image:"../../public/Images/victoria-shes-UC0HZdUitWY-unsplash - Copy.jpg",
        date:"July 1st 2025",
        location:"Jamuhuri Sports Grounds",
        category:"Food",


    },
    {
        name:"Sports Day",
        image:"../../public/Images/473404032_1945665719297789_6006268278205799850_n.jpg",
        date:"July 14th 2025",
        location:"Ulinzi Sports Complex",
        category:"Sports",


    },
    {
        name:"Software Development Bootcamp",
        image:"../../public/Images/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg",
        date:"August 1st 2025",
        location:"Jitegemee University",
        category:"Technology and IT",


    }

])

 

  return { events }
})
