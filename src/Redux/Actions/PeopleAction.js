// import axios from 'axios'
// import { PeopleReducer } from '../Reducers/Reducer'


export const storePeopleApi=(title,Content)=>{
  return {
     type: "ADD_PERSON",
     data: {title:title,Content:Content}
  }

} 