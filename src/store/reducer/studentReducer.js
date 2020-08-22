// // import Student from '../../m'

// // import {
// //     DELETE_STUDENT,
// //     CREATE_STUDENT,
// //     UPDATE_STUDENT,
// //     SET_STUDENT
// //   } from '../action/';
  

//   const initialState = {
//     userStudents: []
//   };
  
//   export default (state = initialState, action) => {
//     switch (action.type) {
//       case SET_STUDENT:
//         return {
//           userStudents: action.students
//         };
//       case CREATE_STUDENT:
//         // const newStudent = new Student(
//         //   action.studentData.id,
//         //   action.studentData.firstName,
//         //   action.studentData.lastName,
//         //   action.studentData.fatherName,
//         //   action.studentData.emailID,
//         //   action.studentData.address,
//         //   action.studentData.mobileNum,
//         //   action.studentData.gender,
//         //   action.studentData.dob,
//         //   action.studentData.photo,
//         //   action.studentData.country,
          
//         // );
//         // return {
//         //   ...state,
//         //   userStudents: state.userStudents.concat(newStudent)
//         // };
//       case UPDATE_STUDENT:
//         // const studentIndex = state.userStudents.findIndex(
//         //   stud => stud.id === action.studentId
//         // );
//         // const updatedStudent = new Student(
//         //   action.studentId,
//         //   action.studentData.firstName,
//         //   action.studentData.lastName,
//         //   action.studentData.fatherName,
//         //   action.studentData.emailID,
//         //   action.studentData.address,
//         //   action.studentData.mobileNum,
//         //   action.studentData.gender,
//         //   action.studentData.dob,
//         //   action.studentData.photo,
//         //   action.studentData.country,
//         // );
//         // const updatedUserStudent = [...state.userStudents];
//         // updatedUserStudent[studentIndex] = updatedStudent;
//         // return {
//         //   ...state,
//         //   userStudents: updatedUserStudent
//         // };
//       case DELETE_STUDENT:
//         // return {
//         //   ...state,
//         //   userStudents: state.userStudents.filter(
//         //     stud => stud.id !== action.studentId
//         //   )
//         // };
//     }
//     return state;
//   };
  