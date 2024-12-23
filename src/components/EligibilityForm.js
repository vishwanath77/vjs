// import React, { useState } from "react";
// import Stepper from "./Stepper";

// const EligibilityForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [score, setScore] = useState(0);
//   const [formData, setFormData] = useState({
//     country: "",
//     age: "",
//     qualification: "",
//     experience: "",
//     english: "",
//   });

//   const stepsData = {
//     1: {
//       label: "Country Preference",
//       options: ["UK", "Canada", "Germany", "Australia", "Quebec"],
//       field: "country",
//       points: 10, // Points for this step
//     },
//     2: {
//       label: "Age Preference",
//       options: ["18-20", "21-25", "26-30", "31-40"],
//       field: "age",
//       points: 5,
//     },
//     3: {
//       label: "Highest Qualification",
//       options: ["BE", "BSc", "PhD", "MBA"],
//       field: "qualification",
//       points: 15,
//     },
//     4: {
//       label: "Total Experience",
//       options: ["1 year", "2 years", "3-5 years", "5+ years"],
//       field: "experience",
//       points: 20,
//     },
//     5: {
//       label: "English Proficiency",
//       options: ["Basic Proficiency", "Moderate", "Fluent", "Native"],
//       field: "english",
//       points: 10,
//     },
//     6: {
//       label: "Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?",
//       options:  [ "Yes", "NO"],
//       field: "english",
//       points: 10,
//     },
//     7: {
//       label: "Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?",
//       options:  [ "Yes", "NO"],
//       field: "english",
//       points: 10,
//     },
//     8: {
//       label: "Do you hold a job offer from UK and an approved sponsor, and is at an appropraite skill level?",
//       options:  [ "Yes", "NO"],
//       field: "english",
//       points: 10,
//     },
//   };

//   const totalSteps = Object.keys(stepsData).length;

//   const handleSelect = (value) => {
//     const field = stepsData[currentStep].field;
//     const points = stepsData[currentStep].points;

//     // Update formData and add points
//     setFormData({ ...formData, [field]: value });
//     if (!formData[field]) {
//       setScore(score + points); // Only add points if this step hasn't already been selected
//     }
//   };

//   const handleNext = () => {
//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       console.log("Form Data Submitted:", formData);
//       alert("Form Submitted! Check console for details.");
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       const field = stepsData[currentStep].field;
//       const points = stepsData[currentStep].points;

//       // Reduce score if going back and the field was already selected
//       if (formData[field]) {
//         setScore(score - points);
//         setFormData({ ...formData, [field]: "" });
//       }

//       setCurrentStep(currentStep - 1);
//     }
//   };

//   return (
//     <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "solid gray 1px" }}>
//       <h1>Welcome to Your Free and Quick Wizard</h1>
//       <p>Check your Eligibility</p>

//       {/* Stepper */}
//       <Stepper step={currentStep} totalSteps={totalSteps} />

//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
//         {/* Left Section */}
//         <div style={{ flex: 2 }}>
//           <h2>{stepsData[currentStep].label}</h2>
//           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0" }}>
//             {stepsData[currentStep].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleSelect(option)}
//                 style={{
//                   padding: "10px 20px",
//                   background: formData[stepsData[currentStep].field] === option ? "black" : "#f0f0f0",
//                   color: formData[stepsData[currentStep].field] === option ? "white" : "black",
//                   border: "1px solid #ddd",
//                   cursor: "pointer",
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 1}
//               style={{
//                 padding: "10px 20px",
//                 marginRight: "10px",
//                 background: "#ddd",
//                 border: "none",
//                 cursor: currentStep === 1 ? "not-allowed" : "pointer",
//               }}
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               style={{
//                 padding: "10px 20px",
//                 background: "#f04f23",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               {currentStep === totalSteps ? "Submit" : "Next"}
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div
//           style={{
//             flex: 1,
//             border: "1px solid #ddd",
//             padding: "20px",
//             textAlign: "center",
//             alignSelf: "flex-start",
//           }}
//         >
//           <p>Help us understand your goal so we can recommend the right solution</p>
//           <h2 style={{ margin: "10px 0" }}>Your Score</h2>
//           <div
//             style={{
//               background: "#f04f23",
//               color: "white",
//               borderRadius: "50%",
//               width: "80px",
//               height: "80px",
//               lineHeight: "80px",
//               margin: "10px auto",
//               fontSize: "24px",
//               fontWeight: "bold",
//             }}
//           >
//             {score}
//           </div>
//           <p>
//             Talk to an Expert
//             <br />
//             Call: +91-7670800000
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EligibilityForm;


// import React, { useState } from "react";
// import Stepper from "./Stepper";

// const EligibilityForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [score, setScore] = useState(0);
//   const [formData, setFormData] = useState({
//     country: "",
//     age: "",
//     qualification: "",
//     experience: "",
//     english: "",
//     jobOffer: "",
//   });
//   const [showRemainingSteps, setShowRemainingSteps] = useState(true); // Control visibility of steps 7 & 8

//   const stepsData = {
//     1: {
//       label: "Country Preference",
//       options: ["UK", "Canada", "Germany", "Australia", "Quebec"],
//       field: "country",
//       points: 10,
//     },
//     2: {
//       label: "Age Preference",
//       options: ["18-20", "21-25", "26-30", "31-40"],
//       field: "age",
//       points: 5,
//     },
//     3: {
//       label: "Highest Qualification",
//       options: ["BE", "BSc", "PhD", "MBA"],
//       field: "qualification",
//       points: 15,
//     },
//     4: {
//       label: "Total Experience",
//       options: ["1 year", "2 years", "3-5 years", "5+ years"],
//       field: "experience",
//       points: 20,
//     },
//     5: {
//       label: "English Proficiency",
//       options: ["Basic Proficiency", "Moderate", "Fluent", "Native"],
//       field: "english",
//       points: 10,
//     },
//     6: {
//       label: "Do you hold a job offer from the UK with an approved sponsor at an appropriate skill level?",
//       options: ["Yes", "No"],
//       field: "jobOffer",
//       points: 10,
//     },
//     7: {
//       label: "If Yes(have offer from UK)- Is salary offered is £ 25600 and above the minimum going rate of your occupation?",
//       options: ["Yes", "No"],
//       field: "Joboffers",
//       points: 10,
//     },
//     8: {
//       label: "Your Job in UK is one among the UK skilled worker shortage occupations list ?",
//       options: ["Yes", "No"],
//       field: "additional2",
//       points: 10,
//     },
//   };

//   const totalSteps = Object.keys(stepsData).length;

//   const handleSelect = (value) => {
//     const field = stepsData[currentStep].field;
//     const points = stepsData[currentStep].points;

//     // Update formData and add points
//     setFormData({ ...formData, [field]: value });

//     // Check condition for step 6
//     if (currentStep === 6) {
//       setShowRemainingSteps(value === "Yes");
//     }

//     if (!formData[field]) {
//       setScore(score + points); // Only add points if this step hasn't already been selected
//     }
//   };

//   const handleNext = () => {
//     if (currentStep === 6 && !showRemainingSteps) {
//       // Skip steps 7 & 8 if "No" was selected in step 6
//       console.log("Form Data Submitted:", formData);
//       alert("Form Submitted! Check console for details.");
//       return;
//     }

//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       console.log("Form Data Submitted:", formData);
//       alert("Form Submitted! Check console for details.");
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       const field = stepsData[currentStep].field;
//       const points = stepsData[currentStep].points;

//       // Reduce score if going back and the field was already selected
//       if (formData[field]) {
//         setScore(score - points);
//         setFormData({ ...formData, [field]: "" });
//       }

//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Calculate total steps dynamically based on condition
//   const effectiveSteps = showRemainingSteps ? totalSteps : 6;

//   return (
//     <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "solid gray 1px" }}>
//       <h1>Welcome to Your Free and Quick Wizard</h1>
//       <p>Check your Eligibility</p>

//       {/* Stepper */}
//       <Stepper step={currentStep} totalSteps={effectiveSteps} />

//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
//         {/* Left Section */}
//         <div style={{ flex: 2 }}>
//           <h2>{stepsData[currentStep].label}</h2>
//           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0" }}>
//             {stepsData[currentStep].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleSelect(option)}
//                 style={{
//                   padding: "10px 20px",
//                   background: formData[stepsData[currentStep].field] === option ? "black" : "#f0f0f0",
//                   color: formData[stepsData[currentStep].field] === option ? "white" : "black",
//                   border: "1px solid #ddd",
//                   cursor: "pointer",
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 1}
//               style={{
//                 padding: "10px 20px",
//                 marginRight: "10px",
//                 background: "#ddd",
//                 border: "none",
//                 cursor: currentStep === 1 ? "not-allowed" : "pointer",
//               }}
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               style={{
//                 padding: "10px 20px",
//                 background: "#f04f23",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//               }}
//             >
//               {currentStep === effectiveSteps ? "Submit" : "Next"}
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div
//           style={{
//             flex: 1,
//             border: "1px solid #ddd",
//             padding: "20px",
//             textAlign: "center",
//             alignSelf: "flex-start",
//           }}
//         >
//           <p>Help us understand your goal so we can recommend the right solution</p>
//           <h2 style={{ margin: "10px 0" }}>Your Score</h2>
//           <div
//             style={{
//               background: "#f04f23",
//               color: "white",
//               borderRadius: "50%",
//               width: "80px",
//               height: "80px",
//               lineHeight: "80px",
//               margin: "10px auto",
//               fontSize: "24px",
//               fontWeight: "bold",
//             }}
//           >
//             {score}
//           </div>
//           <p>
//             Talk to an Expert
//             <br />
//             Call: +91-7670800000
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EligibilityForm;





// import React, { useState } from "react";
// import Stepper from "./Stepper";

// const EligibilityForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [score, setScore] = useState(0);
//   const [formData, setFormData] = useState({
//     country: "",
//     age: "",
//     qualification: "",
//     experience: "",
//     english: "",
//     jobOffer: "",
//     jobOfferSalary: "",
//     shortageOccupation: "",
//   });
//   const [showRemainingSteps, setShowRemainingSteps] = useState(true); // Control visibility of steps 7 & 8

//   const stepsData = {
//     1: {
//       label: "Country Preference",
//       options: ["UK", "Canada", "Germany", "Australia", "Quebec"],
//       field: "country",
//       points: 10,
//     },
//     2: {
//       label: "Age Preference",
//       options: ["18-20", "21-25", "26-30", "31-40"],
//       field: "age",
//       points: 5,
//     },
//     3: {
//       label: "Highest Qualification",
//       options: ["BE", "BSc", "PhD", "MBA"],
//       field: "qualification",
//       points: 15,
//     },
//     4: {
//       label: "Total Experience",
//       options: ["1 year", "2 years", "3-5 years", "5+ years"],
//       field: "experience",
//       points: 20,
//     },
//     5: {
//       label: "English Proficiency",
//       options: ["Basic Proficiency", "Moderate", "Fluent", "Native"],
//       field: "english",
//       points: 10,
//     },
//     6: {
//       label: "Do you hold a job offer from the UK with an approved sponsor at an appropriate skill level?",
//       options: ["Yes", "No"],
//       field: "jobOffer",
//       points: 10,
//     },
//     7: {
//       label: "If Yes (job offer from the UK) - Is the salary offered £25,600 or above the minimum going rate of your occupation?",
//       options: ["Yes", "No"],
//       field: "jobOfferSalary",
//       points: 10,
//     },
//     8: {
//       label: "Is your job in the UK among the skilled worker shortage occupations list?",
//       options: ["Yes", "No"],
//       field: "shortageOccupation",
//       points: 10,
//     },
//   };

//   const totalSteps = Object.keys(stepsData).length;

//   const handleSelect = (value) => {
//     const field = stepsData[currentStep].field;
//     const points = stepsData[currentStep].points;

//     // Update formData
//     setFormData({ ...formData, [field]: value });

//     // Update the score only if this step hasn't already been selected
//     if (!formData[field]) {
//       setScore(score + points);
//     }

//     // If step 6 is "No", skip steps 7 and 8
//     if (currentStep === 6) {
//       setShowRemainingSteps(value === "Yes");
//     }
//   };

//   const handleNext = () => {
//     // Validation: Ensure user selects an option before proceeding
//     if (!formData[stepsData[currentStep].field]) {
//       alert("Please select an option before proceeding.");
//       return;
//     }

//     // Skip steps 7 & 8 if "No" was selected in step 6
//     if (currentStep === 6 && !showRemainingSteps) {
//       console.log("Form Data Submitted:", formData);
//       alert("Form Submitted! Check console for details.");
//       return;
//     }

//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       console.log("Form Data Submitted:", formData);
//       alert("Form Submitted! Check console for details.");
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       const field = stepsData[currentStep].field;
//       const points = stepsData[currentStep].points;

//       // Reduce score if going back and the field was already selected
//       if (formData[field]) {
//         setScore(score - points);
//         setFormData({ ...formData, [field]: "" });
//       }

//       setCurrentStep(currentStep - 1);
//     }
//   };

//   // Calculate total steps dynamically based on condition
//   const effectiveSteps = showRemainingSteps ? totalSteps : 6;

//   // Centralized button styles
//   const buttonStyles = {
//     padding: "10px 20px",
//     border: "1px solid #ddd",
//     cursor: "pointer",
//     background: "#f0f0f0",
//     margin: "5px",
//   };

//   return (
//     <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "solid gray 1px" }}>
//       <h1>Welcome to Your Free and Quick Wizard</h1>
//       <p>Check your Eligibility</p>

//       {/* Stepper */}
//       <Stepper step={currentStep} totalSteps={effectiveSteps} />

//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
//         {/* Left Section */}
//         <div style={{ flex: 2 }}>
//           <h2>{stepsData[currentStep].label}</h2>
//           <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0" }}>
//             {stepsData[currentStep].options.map((option) => (
//               <button
//                 key={option}
//                 onClick={() => handleSelect(option)}
//                 style={{
//                   ...buttonStyles,
//                   background: formData[stepsData[currentStep].field] === option ? "black" : "#f0f0f0",
//                   color: formData[stepsData[currentStep].field] === option ? "white" : "black",
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>

//           <div style={{ marginTop: "20px" }}>
//             <button
//               onClick={handleBack}
//               disabled={currentStep === 1}
//               style={{
//                 ...buttonStyles,
//                 background: currentStep === 1 ? "#ddd" : "#f0f0f0",
//                 cursor: currentStep === 1 ? "not-allowed" : "pointer",
//               }}
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               style={{
//                 ...buttonStyles,
//                 background: "#f04f23",
//                 color: "white",
//               }}
//             >
//               {currentStep === effectiveSteps ? "Submit" : "Next"}
//             </button>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div
//           style={{
//             flex: 1,
//             border: "1px solid #ddd",
//             padding: "20px",
//             textAlign: "center",
//             alignSelf: "flex-start",
//           }}
//         >
//           <p>Help us understand your goal so we can recommend the right solution</p>
//           <h2 style={{ margin: "10px 0" }}>Your Score</h2>
//           <div
//             style={{
//               background: "#f04f23",
//               color: "white",
//               borderRadius: "50%",
//               width: "80px",
//               height: "80px",
//               lineHeight: "80px",
//               margin: "10px auto",
//               fontSize: "24px",
//               fontWeight: "bold",
//             }}
//           >
//             {score}
//           </div>
//           <p>
//             Talk to an Expert
//             <br />
//             Call: +91-7670800000
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EligibilityForm;




// import React, { useState } from "react";
// import Stepper from "./Stepper";

// const EligibilityForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [score, setScore] = useState(0);
//   const [formData, setFormData] = useState({
//     country: "",
//     age: "",
//     qualification: "",
//     experience: "",
//     english: "",
//     jobOffer: "",
//     jobOfferSalary: "",
//     shortageOccupation: "",
//   });
//   const [showEvaluationForm, setShowEvaluationForm] = useState(false); // New state for EvaluationForm
//   const [showRemainingSteps, setShowRemainingSteps] = useState(true);

//   const stepsData = {
//     1: { label: "Country Preference", options: ["UK", "Canada", "Germany", "Australia", "Quebec"], field: "country", points: 10 },
//     2: { label: "Age Preference", options: ["18-20", "21-25", "26-30", "31-40"], field: "age", points: 5 },
//     3: { label: "Highest Qualification", options: ["BE", "BSc", "PhD", "MBA"], field: "qualification", points: 15 },
//     4: { label: "Total Experience", options: ["1 year", "2 years", "3-5 years", "5+ years"], field: "experience", points: 20 },
//     5: { label: "English Proficiency", options: ["Basic Proficiency", "Moderate", "Fluent", "Native"], field: "english", points: 10 },
//     6: { label: "Do you hold a job offer from the UK with an approved sponsor at an appropriate skill level?", options: ["Yes", "No"], field: "jobOffer", points: 10 },
//     7: { label: "If Yes (job offer from the UK) - Is the salary offered £25,600 or above the minimum going rate of your occupation?", options: ["Yes", "No"], field: "jobOfferSalary", points: 10 },
//     8: { label: "Is your job in the UK among the skilled worker shortage occupations list?", options: ["Yes", "No"], field: "shortageOccupation", points: 10 },
//   };

//   const totalSteps = Object.keys(stepsData).length;

//   const handleSelect = (value) => {
//     const field = stepsData[currentStep].field;
//     const points = stepsData[currentStep].points;

//     setFormData({ ...formData, [field]: value });

//     if (!formData[field]) {
//       setScore(score + points);
//     }

//     if (currentStep === 6) {
//       setShowRemainingSteps(value === "Yes");
//     }
//   };

//   const handleNext = () => {
//     if (!formData[stepsData[currentStep].field]) {
//       alert("Please select an option before proceeding.");
//       return;
//     }

//     if (currentStep === 6 && !showRemainingSteps) {
//       setShowEvaluationForm(true); // Show EvaluationForm
//       return;
//     }

//     if (currentStep < totalSteps) {
//       setCurrentStep(currentStep + 1);
//     } else {
//       setShowEvaluationForm(true); // Show EvaluationForm after final step
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       const field = stepsData[currentStep].field;
//       const points = stepsData[currentStep].points;

//       if (formData[field]) {
//         setScore(score - points);
//         setFormData({ ...formData, [field]: "" });
//       }

//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const effectiveSteps = showRemainingSteps ? totalSteps : 6;

//   const buttonStyles = {
//     padding: "10px 20px",
//     border: "1px solid #ddd",
//     cursor: "pointer",
//     background: "#f0f0f0",
//     margin: "5px",
//   };

//   return (
//     <div style={{ position: "relative", padding: "50px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "solid gray 1px" }}>
//       {showEvaluationForm && (
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 10,
//           }}
//         >
//           <div
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//               maxWidth: "500px",
//               textAlign: "center",
//             }}
//           >
//             <h2>Evaluation Form</h2>
//             <p>Your total score is {score}.</p>
//             <p>Please proceed to complete your evaluation.</p>
            
//           </div>
//         </div>
//       )}

//       {/* Main content with blur effect when EvaluationForm is shown */}
//       <div style={{ filter: showEvaluationForm ? "blur(5px)" : "none" }}>
//         <h1>Welcome to Your Free and Quick Wizard</h1>
//         <p>Check your Eligibility</p>

//         {/* Stepper */}
//         <Stepper step={currentStep} totalSteps={effectiveSteps} />

//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>
//           {/* Left Section */}
//           <div style={{ flex: 2 }}>
//             <h2>{stepsData[currentStep].label}</h2>
//             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0" }}>
//               {stepsData[currentStep].options.map((option) => (
//                 <button
//                   key={option}
//                   onClick={() => handleSelect(option)}
//                   style={{
//                     ...buttonStyles,
//                     background: formData[stepsData[currentStep].field] === option ? "black" : "#f0f0f0",
//                     color: formData[stepsData[currentStep].field] === option ? "white" : "black",
//                   }}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>

//             <div style={{ marginTop: "20px" }}>
//               <button
//                 onClick={handleBack}
//                 disabled={currentStep === 1}
//                 style={{
//                   ...buttonStyles,
//                   background: currentStep === 1 ? "#ddd" : "#f0f0f0",
//                   cursor: currentStep === 1 ? "not-allowed" : "pointer",
//                 }}
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleNext}
//                 style={{
//                   ...buttonStyles,
//                   background: "#f04f23",
//                   color: "white",
//                 }}
//               >
//                 {currentStep === effectiveSteps ? "Submit" : "Next"}
//               </button>
//             </div>
//           </div>

//           {/* Right Section */}
//           <div
//             style={{
//               flex: 1,
//               border: "1px solid #ddd",
//               padding: "20px",
//               textAlign: "center",
//               alignSelf: "flex-start",
//             }}
//           >
//             <p>Help us understand your goal so we can recommend the right solution</p>
//             <h2 style={{ margin: "10px 0" }}>Your Score</h2>
//             <div
//               style={{
//                 background: "#f04f23",
//                 color: "white",
//                 borderRadius: "50%",
//                 width: "80px",
//                 height: "80px",
//                 lineHeight: "80px",
//                 margin: "10px auto",
//                 fontSize: "24px",
//                 fontWeight: "bold",
//               }}
//             >
//               {score}
//             </div>
//             <p>
//               Talk to an Expert
//               <br />
//               Call: +91-7670800000
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EligibilityForm;







import React, { useState } from "react";
import Stepper from "./Stepper";

const EligibilityForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    country: "",
    age: "",
    qualification: "",
    experience: "",
    english: "",
    jobOffer: "",
    jobOfferSalary: "",
    shortageOccupation: "",
  });
  const [showRemainingSteps, setShowRemainingSteps] = useState(true); // Control visibility of steps 7 & 8
  const [isEvaluationMode, setIsEvaluationMode] = useState(false); // Controls whether to show the Evaluation Form

  const stepsData = {
    1: {
      label: "Country Preference",
      options: ["UK", "Canada", "Germany", "Australia", "Quebec"],
      field: "country",
      points: 10,
    },
    2: {
      label: "Age Preference",
      options: ["18-20", "21-25", "26-30", "31-40"],
      field: "age",
      points: 5,
    },
    3: {
      label: "Highest Qualification",
      options: ["BE", "BSc", "PhD", "MBA"],
      field: "qualification",
      points: 15,
    },
    4: {
      label: "Total Experience",
      options: ["1 year", "2 years", "3-5 years", "5+ years"],
      field: "experience",
      points: 20,
    },
    5: {
      label: "English Proficiency",
      options: ["Basic Proficiency", "Moderate", "Fluent", "Native"],
      field: "english",
      points: 10,
    },
    6: {
      label: "Do you hold a job offer from the UK with an approved sponsor at an appropriate skill level?",
      options: ["Yes", "No"],
      field: "jobOffer",
      points: 10,
    },
    7: {
      label: "If Yes (job offer from the UK) - Is the salary offered £25,600 or above the minimum going rate of your occupation?",
      options: ["Yes", "No"],
      field: "jobOfferSalary",
      points: 10,
    },
    8: {
      label: "Is your job in the UK among the skilled worker shortage occupations list?",
      options: ["Yes", "No"],
      field: "shortageOccupation",
      points: 10,
    },
  };

  const totalSteps = Object.keys(stepsData).length;

  const handleSelect = (value) => {
    const field = stepsData[currentStep].field;
    const points = stepsData[currentStep].points;

    // Update formData
    setFormData({ ...formData, [field]: value });

    // Update the score only if this step hasn't already been selected
    if (!formData[field]) {
      setScore(score + points);
    }

    // If step 6 is "No", skip steps 7 and 8
    if (currentStep === 6) {
      setShowRemainingSteps(value === "Yes");
    }
  };

  const handleNext = () => {
    // Validation: Ensure user selects an option before proceeding
    if (!formData[stepsData[currentStep].field]) {
      alert("Please select an option before proceeding.");
      return;
    }

    // Skip steps 7 & 8 if "No" was selected in step 6
    if (currentStep === 6 && !showRemainingSteps) {
      setIsEvaluationMode(true);
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsEvaluationMode(true); // Show Evaluation Form after the final step
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const field = stepsData[currentStep].field;
      const points = stepsData[currentStep].points;

      // Reduce score if going back and the field was already selected
      if (formData[field]) {
        setScore(score - points);
        setFormData({ ...formData, [field]: "" });
      }

      setCurrentStep(currentStep - 1);
    }
  };

  // Centralized button styles
  const buttonStyles = {
    padding: "10px 20px",
    border: "1px solid #ddd",
    cursor: "pointer",
    background: "#f0f0f0",
    margin: "5px",
  };

  return (
    <div style={{ padding: "50px", maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", border: "solid gray 1px" }}>
      <h1>Welcome to Your Free and Quick Wizard</h1>
      <p>Check your Eligibility</p>

      {!isEvaluationMode ? (
        <>
          {/* Stepper */}
          <Stepper step={currentStep} totalSteps={totalSteps} />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px" }}>

            {/* Left Section */}
            <div style={{ flex: 2 }}>
              <h2>{stepsData[currentStep].label}</h2>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "20px 0" }}>
                {stepsData[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    style={{
                      ...buttonStyles,
                      background: formData[stepsData[currentStep].field] === option ? "black" : "#f0f0f0",
                      color: formData[stepsData[currentStep].field] === option ? "white" : "black",
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  style={{
                    ...buttonStyles,
                    background: currentStep === 1 ? "#ddd" : "#f0f0f0",
                    cursor: currentStep === 1 ? "not-allowed" : "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  style={{
                    ...buttonStyles,
                    background: "#f04f23",
                    color: "white",
                  }}
                >
                  {currentStep === totalSteps ? "Submit" : "Next"}
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div
              style={{
                flex: 1,
                border: "1px solid #ddd",
                padding: "20px",
                textAlign: "center",
                alignSelf: "flex-start",
              }}
            >
              <p>Help us understand your goal so we can recommend the right solution</p>
              <h2 style={{ margin: "10px 0" }}>Your Score</h2>
              <div
                style={{
                  background: "#f04f23",
                  color: "white",
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  lineHeight: "80px",
                  margin: "10px auto",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                {score}
              </div>
              <p>
                Talk to an Expert
                <br />
                Call: +91-7670800000
              </p>
            </div>
          </div>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>


     {/* Left Panel */}
          <div style={{
              flex: 2,
              filter: "blur(5px)", // Apply blur effect
             opacity: 0.6,        // Reduce visibility (optional)
              pointerEvents: "none", // Disable interactions
         }}
     >
            <h2 >Evaluation Form</h2>
            <p>Your total score: {score}</p>
            <p>Remaining steps are blurred out.</p>
          </div>

        {/* Right Panel */}
    <div style={{ flex: 1, paddingLeft: "20px" }}>
        <form style={{ maxWidth: "400px" }}>
        <h3>Please fill in the form to continue</h3>

    {/* First and Last Name */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        // onChange={handleInputChange}
        required
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name*"
        value={formData.lastName}
        // onChange={handleInputChange}
        required
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
    </div>

    {/* Email */}
    <div style={{ marginBottom: "15px" }}>
      <input
        type="email"
        name="email"
        placeholder="E-mail*"
        value={formData.email}
        // onChange={handleInputChange}
        required
        style={{
          width: "95%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
    </div>

    {/* Country Code and Phone Number */}
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <select
        name="countryCode"
        style={{
          flex: "0 0 25%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <option value="IND">IND +91</option>
        <option value="US">US +1</option>
        <option value="UK">UK +44</option>
      </select>
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number*"
        value={formData.phone}
        // onChange={handleInputChange}
        required
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      />
    </div>

    {/* Terms & Conditions and Toggle */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "15px",
      }}
    >
     

      {/* Toggle Button for WhatsApp */}
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          fontSize:"smaller",
          fontWeight:"bold",
        }}
      >
        <span>Use this as WhatsApp number</span>
        <div
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              isWhatsApp: !prev.isWhatsApp,
            }))
          }
          style={{
            width: "40px",
            height: "20px",
            borderRadius: "15px",
            backgroundColor: formData.isWhatsApp ? "#4caf50" : "#ddd",
            position: "relative",
            transition: "background-color 0.3s",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              backgroundColor: "white",
              position: "absolute",
              top: "1px",
              left: formData.isWhatsApp ? "20px" : "2px",
              transition: "left 0.3s",
            }}
          ></div>
        </div>
      </label>
    </div>


     {/* Terms & Conditions */}
    <label style={{ display: "flex", alignItems: "center", gap: "5px", padding:"5px", fontSize:"smaller"}}>
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          // onChange={handleCheckboxChange}
          required
        />
        <span>
          I accept the{" "}
          <a href="/" style={{ color: "#007BFF", textDecoration: "none" }}>
            Terms & Conditions
          </a>
        </span>
      </label>

    {/* Submit Button */}
    <button
      type="submit"
      style={{
        width: "100%",
        padding: "15px",
        backgroundColor: "#f04f23",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Do I Qualify
    </button>
  </form>
</div>

        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
