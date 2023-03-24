import { courseInfo, localeState } from '@/src/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initCourses: courseInfo[] = [{
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Name of Course",
    destination: "destination, Chile",
    artisanName: "artisan",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  },
  {
    imageUrl: "/image/card/sea.webp",
    courseName: "Name of Course",
    destination: "destination, Chile",
    artisanName: "artisan",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  },
  {
    imageUrl: "/image/card/5043-original.jpg",
    courseName: "Name of Course",
    destination: "destination, Chile",
    artisanName: "artisan",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  },
  {
    imageUrl: "/image/card/sea.webp",
    courseName: "Name of Course",
    destination: "destination, Chile",
    artisanName: "artisan",
    episode: 0,
    duration: 0,
    categories: ["category1", "category2"],
    price: "20",    
  }]

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
