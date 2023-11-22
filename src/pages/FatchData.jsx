import { useState, useEffect } from "react"
import axios from 'axios'
// import DisplayData from "./DisplayData"

const FetchData = () => {
  let [students, setStudents] = useState([])

  const searchData = async() => {
    const url = "../portfolio.json"
    axios.get(url).then((response) => {
      let fetchData = response.data.results
      setStudents(fetchData)
    }).catch((error)=>{
      alert("Error" + error)
    })
  }

  useEffect(()=>{
    searchData()
  })
  let count = 1
  

  return(
    <>
    <div>
    {students.map(student => (
      <>
        <div
        style={{
          margin: 8,
          padding: 8,
          borderRadius: 8,
        }}
      >
          <p>학번 : {student.code}</p>
          <p>성명 : {student.name}</p>
          <p>전공 : {student.dept}</p>
          <p>전화번호 : {student.phone}</p>
        </div>
      </>
    ))}
    </div>
    </>
  )
}

export default FetchData