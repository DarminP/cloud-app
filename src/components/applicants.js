import { useState, useEffect } from "react";
import {db} from "./firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"


function Applicants() {

  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newEmail, setNewEmail] = useState("")

  const [applicants, setApplicants] = useState([]);
  const applicantCollectionRef = collection(db, "applicants")

  const createApplicant = async () => {
    await addDoc(applicantCollectionRef, { Name: newName, Age: newAge, Email: newEmail } )
  }

  useEffect(() => {

    const getApplicants = async () => {
      const data = await getDocs(applicantCollectionRef)
      setApplicants(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getApplicants()
  }, [])


  return (
      <div className="mainContainer">
      <h1>Crud in REACT</h1>
      <input placeholder="Name..."
      onChange={(event) => {
        setNewName(event.target.value);
      }}
      />


      <input type="number" placeholder="Age..."
      onChange={(event) => {
        setNewAge(event.target.value);
      }}
      />


      <input placeholder="Email..." 
      onChange={(event) => {
        setNewEmail(event.target.value);
      }}
      />
      <button onClick={createApplicant}>Create Applicant</button>


        {applicants.map((applicant) => {
          return (
            <div>
              {" "}
              <h1>Name: {applicant.Name}</h1>
              <h1>Age: {applicant.Age}</h1>
              <h1>e-mail: {applicant.Email}</h1>
            </div>
          )
        })}
        
      </div>
      );
    }
    
    export default Applicants;
           
    
   
