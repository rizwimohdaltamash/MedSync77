// import React from 'react';
// import { Form, Button } from 'react-bootstrap';

// const VaccineReminder = () => {
//     function calculateDueDate(lastDueDate, interval) {
//         if (!lastDueDate) {
//           return "N/A";
//         }
    
//         if (!interval || interval === "Not applicable for this vaccine") {
//           return "Not applicable for this vaccine";
//         }
    
//         if (
//           interval === "At birth" ||
//           interval === "Within 24 hours of birth"
//         ) {
//           return lastDueDate;
//         }
    
//         const [weeks, months, years] = interval.split("-").map(Number);
//         const dueDate = new Date(lastDueDate);
    
        
//         dueDate.setDate(
//           dueDate.getDate() + weeks * 7 + months * 30 + years * 365
//         );
    
       
//         const options = { year: "numeric", month: "2-digit", day: "2-digit" };
//         const formattedDate = dueDate.toLocaleDateString("en-US", options);
    
//         return formattedDate;
//       }
    
//       function predictDueDates() {
//         const dob = document.getElementById("dob").value;
//         const dobDate = new Date(dob);
    
//         if (isNaN(dobDate.getTime())) {
//           alert("Please enter a valid Date of Birth.");
//           return;
//         }
    
//         const vaccinationSchedule = {
//           vaccination_schedule: [
//             {
//               age: "0-0-0",
//               vaccine: "BCG dose 1",
//               doses: 1,
//               interval: "At birth",
//               notes: "Bacillus Calmette-Guérin vaccine for Tuberculosis",
//             },
//             {
//               age: "0-0-0",
//               vaccine: "Hepatitis B - Birth Dose (HepB-BD)",
//               doses: 1,
//               interval: "Within 24 hours of birth",
//               notes: "",
//             },
//             {
//               age: "0-6-0",
//               vaccine:
//                 "OPV (Oral Polio Vaccine) - 1st Dose,Pentavalent vaccine 1st dose,...Rotavirus vaccine 1st Dose(administered orally),DTaP-IPV 1st Dose ",
//               doses: 1,
//               interval: "6-0-0",
//               notes: "",
//             },
    
//             {
//               age: "0-10-0",
//               vaccine: "Pentavalent vaccine 2nd Dose ,...Rotavirus vaccine 2nd Dose,Hib-IPV 1st Dose ",
//               doses: 2,
//               interval: "4-0-0",
//               notes: "",
//             },
//             {
//               age: "0-14-0",
//               vaccine: "Pentavalent vaccine 3rd Dose,... Rotavirus Vaccine 3rd Dose,...Inactivated Polio Vaccine (IPV) 1st Dose",
//               doses: 3,
//               interval: "4-0-0",
//               notes: "",
//             },
   
//             {
//               age: "1-0-0",
//               vaccine: "Measles, Mumps, Rubella (MMR)",
//               doses: 1,
//               interval: "38-0-0",
//               notes: "",
//             },
//             {
//               age: "1-3-0",
//               vaccine: "DTap-IPV",
//               doses: 2,
//               interval: "12-0-0",
//               notes: "",
//             },
//             {
//               age: "2-0-0",
//               vaccine: "Hepatitis A",
//               doses: 1,
//               interval: "0-9-0",
//               notes: "",
//             },
//             {
//               age: "4-0-0",
//               vaccine: "DTap-IPV 3rd Dose, MMR 2nd Dose",
//               doses: 3,
//               interval: "0-0-2",
//               notes: "",
//             },
//             {
//       age: "5-0-0",
//       vaccine: "Influenza vaccine (yearly)",
//       doses: 1,
//       interval: "0-0-1",
//       notes: ""
//     },
//     {
//       age: "10-0-0",
//       vaccine: "Meningococcal Conjugate (MCV4) booster",
//       doses: 1,
//       interval: "0-0-5",
//       notes: ""
//     },
//     {
//       age: "10-0-0",
//       vaccine: "Pneumococcal 13-valent Conjugate Vaccine (PCV13) booster",
//       doses: 1,
//       interval: "0-0-0",
//       notes: ""
//     },
//     {
//       age: "11-0-0",
//       vaccine: "Tdap (Tetanus, diphtheria, and acellular pertussis) booster",
//       doses: 1,
//       interval: "0-0-1",
//       notes: ""
//     },
//     {
//       age: "11-0-0",
//       vaccine: "HPV 1st Dose (Males)",
//       doses: 1,
//       interval: "0-0-0",
//       notes: ""
//     },
//     {
//       age: "14-0-0",
//       vaccine: "HPV 1st Dose (Females)",
//       doses: 1,
//       interval: "0-0-3",
//       notes: ""
//     },
//     {
//       age: "15-0-0",
//       vaccine: "Meningococcal Conjugate (MCV4) 1st Dose",
//       doses: 1,
//       interval: "0-0-1",
//       notes: ""
//     },
//     {
//       age: "16-0-0",
//       vaccine: "HPV 1st Dose (Males)",
//       doses: 1,
//       interval: "0-0-1",
//       notes: ""
//     }
//           ],
//         };
    
    
//         const dueDatesDiv = document.getElementById("dueDates");
//         dueDatesDiv.innerHTML = "<h3>Predicted Due Dates:</h3>";
    
//         let previousDueDate = dobDate; 
//         vaccinationSchedule.vaccination_schedule.forEach((vaccine) => {
//           const dueDate = calculateDueDate(previousDueDate, vaccine.interval);
//           previousDueDate = dueDate; 
    
//           const vaccineInfo = `${vaccine.vaccine} - Due on ${dueDate}`;
//           const dueDateElement = document.createElement("p");
//           dueDateElement.textContent = vaccineInfo;
//           dueDatesDiv.appendChild(dueDateElement);
//         });
//       }
  

//   return (
//     <div style={{
//       display: "flex",
//       flexDirection: "row",
//       width: "100%",
//       height: "92vh"
//     }}>

//       <div style={{ width: "35%", justifyContent: "center", alignItems: "center", marginTop: "13%", marginLeft: "10%" }}>
//         <h6>Vaccine Due Date Predictor</h6>
//         <Form id="dobForm" style={{ width: '35%', border: "1px solid black", padding: "2%", borderRadius: "10px" }}>
//           <Form.Group controlId="dob">
//             <Form.Label>Date of Birth:</Form.Label>
//             <Form.Control type="date" required style={{ width: "100%" }} />
//           </Form.Group>
//           <br />
//           <Button className="button-reminder" style={{ width: "100%" }} type="button" onClick={predictDueDates}>
//             Predict Due Dates
//           </Button>
//         </Form>
//       </div>

//       <div className="col-md-6 right-box" style={{ width: "50%", borderLeft: "1px solid black" }}>
//         <h4 style={{ marginLeft: "30%", background: "#fff0e6", width: "45%" }}>Your dates will be shown here</h4>
//         <div className="row align-items-center">
//           <div id="dueDates" style={{ backgroundColor: "black", color: "white",marginLeft:"6%" }}></div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default VaccineReminder;


import React from 'react';

const VaccineReminder = () => {
  function calculateDueDate(lastDueDate, interval) {
    if (!lastDueDate) return "N/A";

    if (!interval || interval === "Not applicable for this vaccine") {
      return "Not applicable for this vaccine";
    }

    if (interval === "At birth" || interval === "Within 24 hours of birth") {
      return lastDueDate;
    }

    const [weeks, months, years] = interval.split("-").map(Number);
    const dueDate = new Date(lastDueDate);

    dueDate.setDate(
      dueDate.getDate() + weeks * 7 + months * 30 + years * 365
    );

    return dueDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  function predictDueDates() {
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);

    if (isNaN(dobDate.getTime())) {
      alert("Please enter a valid Date of Birth.");
      return;
    }

            const vaccinationSchedule = {
          vaccination_schedule: [
            {
              age: "0-0-0",
              vaccine: "BCG dose 1",
              doses: 1,
              interval: "At birth",
              notes: "Bacillus Calmette-Guérin vaccine for Tuberculosis",
            },
            {
              age: "0-0-0",
              vaccine: "Hepatitis B - Birth Dose (HepB-BD)",
              doses: 1,
              interval: "Within 24 hours of birth",
              notes: "",
            },
            {
              age: "0-6-0",
              vaccine:
                "OPV (Oral Polio Vaccine) - 1st Dose,Pentavalent vaccine 1st dose,...Rotavirus vaccine 1st Dose(administered orally),DTaP-IPV 1st Dose ",
              doses: 1,
              interval: "6-0-0",
              notes: "",
            },
    
            {
              age: "0-10-0",
              vaccine: "Pentavalent vaccine 2nd Dose ,...Rotavirus vaccine 2nd Dose,Hib-IPV 1st Dose ",
              doses: 2,
              interval: "4-0-0",
              notes: "",
            },
            {
              age: "0-14-0",
              vaccine: "Pentavalent vaccine 3rd Dose,... Rotavirus Vaccine 3rd Dose,...Inactivated Polio Vaccine (IPV) 1st Dose",
              doses: 3,
              interval: "4-0-0",
              notes: "",
            },
   
            {
              age: "1-0-0",
              vaccine: "Measles, Mumps, Rubella (MMR)",
              doses: 1,
              interval: "38-0-0",
              notes: "",
            },
            {
              age: "1-3-0",
              vaccine: "DTap-IPV",
              doses: 2,
              interval: "12-0-0",
              notes: "",
            },
            {
              age: "2-0-0",
              vaccine: "Hepatitis A",
              doses: 1,
              interval: "0-9-0",
              notes: "",
            },
            {
              age: "4-0-0",
              vaccine: "DTap-IPV 3rd Dose, MMR 2nd Dose",
              doses: 3,
              interval: "0-0-2",
              notes: "",
            },
            {
      age: "5-0-0",
      vaccine: "Influenza vaccine (yearly)",
      doses: 1,
      interval: "0-0-1",
      notes: ""
    },
    {
      age: "10-0-0",
      vaccine: "Meningococcal Conjugate (MCV4) booster",
      doses: 1,
      interval: "0-0-5",
      notes: ""
    },
    {
      age: "10-0-0",
      vaccine: "Pneumococcal 13-valent Conjugate Vaccine (PCV13) booster",
      doses: 1,
      interval: "0-0-0",
      notes: ""
    },
    {
      age: "11-0-0",
      vaccine: "Tdap (Tetanus, diphtheria, and acellular pertussis) booster",
      doses: 1,
      interval: "0-0-1",
      notes: ""
    },
    {
      age: "11-0-0",
      vaccine: "HPV 1st Dose (Males)",
      doses: 1,
      interval: "0-0-0",
      notes: ""
    },
    {
      age: "14-0-0",
      vaccine: "HPV 1st Dose (Females)",
      doses: 1,
      interval: "0-0-3",
      notes: ""
    },
    {
      age: "15-0-0",
      vaccine: "Meningococcal Conjugate (MCV4) 1st Dose",
      doses: 1,
      interval: "0-0-1",
      notes: ""
    },
    {
      age: "16-0-0",
      vaccine: "HPV 1st Dose (Males)",
      doses: 1,
      interval: "0-0-1",
      notes: ""
    }
          ],
        };

    const dueDatesDiv = document.getElementById("dueDates");
    dueDatesDiv.innerHTML = "<h3>Predicted Due Dates:</h3>";

    let previousDueDate = dobDate;

    vaccinationSchedule.vaccination_schedule.forEach((vaccine) => {
      const dueDate = calculateDueDate(previousDueDate, vaccine.interval);
      previousDueDate = dueDate;

      const vaccineInfo = `${vaccine.vaccine} - Due on ${dueDate}`;
      const dueDateElement = document.createElement("p");
      dueDateElement.textContent = vaccineInfo;
      dueDatesDiv.appendChild(dueDateElement);
    });
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "92vh",
      }}
    >
      {/* Left Box */}
      <div
        style={{
          width: "40%",
          marginTop: "10%",
          marginLeft: "5%",
          textAlign: "center",
        }}
      >
        <h2>Vaccine Due Date Predictor</h2>
        <form
          id="dobForm"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <label htmlFor="dob" style={{ fontSize: "16px", fontWeight: "bold" }}>
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            required
          />
          <button
            type="button"
            onClick={predictDueDates}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "darkblue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Predict Due Dates
          </button>
        </form>
      </div>

      {/* Right Box */}
      <div
        style={{
          width: "50%",
          borderLeft: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <h3
          style={{
            textAlign: "center",
            background: "#fff0e6",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Your dates will be shown here
        </h3>
        <div
          id="dueDates"
          style={{
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default VaccineReminder;
