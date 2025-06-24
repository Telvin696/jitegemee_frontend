import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', () => {
    const courses = ref([
    {
        name:"Computer Science",
        school:"School of computing and Engineering",
        description:"Best course for computer enthusiasists",
        intake:"july 2025"

    },
    {
         name:"Medicine",
        school:"School of Medicine and Surgery",
        description:"Best course for learning the Human anatomy",
        intake:"September 2025"
    },
    {  
         name:"Data Science and Statistics",
        school:"Institute of Mathematics",
        description:"Makes data make sense",
        intake:"July 2025"

    },
    {
         name:"Mechanical Engineering",
        school:"School of Computing and Engineering",
        description:"Best course for learning about construction",
        intake:"September 2025"
    },
    {
         name:"Business and IT",
        school:"School of Business",
        description:"Best course for Business enthusiasists in IT",
        intake:"March 2025"
    },
    {
         name:"Architecture",
        school:"school of Engineering and Sciences",
        description:"Best course for people with a passion for drawing up buildings",
        intake:"September 2025"
    },
    {
         name:"Communication",
        school:"School of Journalism and Mass media",
        description:"Best course for pursuing media",
        intake:"March 2025"
    }




])
 

  return { courses }
})

