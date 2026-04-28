import React from "react";
import UserList from "./UserList";

function App() {
  const employees = [
    { name: "Amit", department: "IT" },
    { name: "Sara", department: "HR" },
    { name: "John", department: "Finance" }
  ];

  return (
    <div>
      <UserList users={employees} />
    </div>
  );
}

export default App;