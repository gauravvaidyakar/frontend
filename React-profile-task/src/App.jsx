import { useState } from "react";
import "./App.css";
import StudentCart from "./components/studentCart";

function App() {
  const [students, setStudents] = useState([
    {
      img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyZvNLQC-bdb4KEUt7we_r87XmeH8XhZtJg&s",
      id: 1,
      name: "aqib",
      age: "👤age:22",
      course: "📖course:react",
      isOnline: true,
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmavdLZMpW1GLcq8gconrrzZ2VHTbAgpwIg&s",
      id: 2,
      name: "pankya",
      age: "👤age:25",
      course: "📖course:Backend",
      isOnline: false,
    },
    {
      id: 3,
      name: "sir",
      age: "👤age:27",
      course: "📖course:frontend",
      isOnline: true,
    },
  ]);
  return (
    <>
    <h1>Student Profile App 🎓</h1>
    <div id="main">
      {students.map((item, index) => {
        return (
          <div key={item.id + index} className="page">
            <StudentCart
              img={item.img}
              name={item.name}
              age={item.age}
              course={item.course}
              isOnline={item.isOnline}
              details={`This student is learning ${item.course}`} 
            />
          </div>
        );
      })}
    </div>
    </>
  );
}

export default App;

