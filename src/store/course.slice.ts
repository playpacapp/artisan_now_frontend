import { courseInfo, localeState } from '@/src/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initCourses: courseInfo[] = [{
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Title of experiences",
    hostName: "Name of hostess or artisan",
    destination: "Destination",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  },
  {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Title of experiences",
    hostName: "Name of hostess or artisan",
    destination: "Destination",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",
  }, {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Title of experiences",
    hostName: "Name of hostess or artisan",
    destination: "Destination",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",
  }, {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Title of experiences",
    hostName: "Name of hostess or artisan",
    destination: "Destination",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",
  }, {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Title of experiences",
    hostName: "Name of hostess or artisan",
    destination: "Destination",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",
  },]

const initState = {
    courses: initCourses,
}

export const courseSlice = createSlice({
    name: "course",
    initialState: initState,
    reducers: {
        "setCourse": (state, action:PayloadAction<courseInfo[]>) => {
            state.courses = action.payload;
        }
    }
})

export const {setCourse} = courseSlice.actions;
export default courseSlice.reducer
