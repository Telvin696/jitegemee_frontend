import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLibraryStore = defineStore('library',  {
    state: () => {
        const library = ref([
             {
        id: 1,
        title: "Introduction to Algorithms",
        image: "public/markus-spiske-iar-afB0QQw-unsplash.jpg",
        description: "A comprehensive guide to modern algorithms, covering theory, analysis, and real-world applications.",
      },
      {
        id: 2,
        title: "Clean Code",
        image: "public/thought-catalog-55zeav3ZdyQ-unsplash.jpg",
        description: "A handbook of agile software craftsmanship, teaching how to write readable, maintainable code.",
      },
      {
        id: 3,
        title: "Atomic Habits",
        image: "public/lala-azizli-4SutVTJ6Rv4-unsplash.jpg",
        description: "A practical book on building good habits and breaking bad ones with small daily changes.",
      },
      {
        id: 4,
        title: "Deep Work",
        image: "",
        description: "Explores the benefits of deep focus in a distracted world to produce better work in less time.",
      },
      {
        id: 5,
        title: "Design Patterns",
        image: "public/sam-jotham-sutharson-QZISBD7Wyhs-unsplash.jpg",
        description: "A catalog of common software design patterns and solutions to recurring problems in code structure.",
      },
      {
        id: 6,
        title: "The Pragmatic Programmer",
        image: "public/bernd-dittrich-mNnP9e1wROc-unsplash.jpg",
        description: "Classic advice and practices for becoming a better, more effective software developer.",
      },
      {
        id: 7,
        title: "Rich Dad Poor Dad",
        image: "",
        description: "A personal finance book comparing two approaches to money: one from a rich perspective and one from a poor one.",
      },
      {
        id: 8,
        title: "Sapiens: A Brief History of Humankind",
        image: "public/yasser-mokhtarzadeh-pFNzOEak33M-unsplash.jpg",
        description: "Traces the evolution of Homo sapiens from ancient ancestors to the modern age, exploring history and culture.",
      },
      {
        id: 9,
        title: "You Don’t Know JS",
        image: "public/van-tay-media--S2-AKdWQoQ-unsplash.jpg",
        description: "A deep dive into the core mechanics of JavaScript for developers looking to master the language.",
      },
      {
        id: 10,
        title: "Introduction to Psychology",
        image: "public/abdulai-sayni-1QcLbPi3S7Y-unsplash.jpg",
        description: "A foundational text exploring major psychological concepts, theories, and real-life applications.",
      }
        ])

        return{
            library,
        }
    }, 
    actions:{
        
    }
})
