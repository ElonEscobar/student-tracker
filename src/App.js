
import './App.css';
// import  Container from './Container';
import NavBar from './NavBar';
import StudentTable from './StudentTable';
import studentData from "./utility/studentData"

function App() {
  return (
 
   <div>
     <NavBar/>
     <StudentTable studentArr={studentData()}/>
     
   </div>
   
  );
}

export default App;
