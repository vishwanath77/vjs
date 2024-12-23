// import React from "react";

// const Stepper = ({ step }) => {
//   return (
//     <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
//       {Array(8)
//         .fill(0)
//         .map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: "20px",
//               height: "10px",
//               background: index < step ? "black" : "#ddd",
//             }}
//           ></div>
//         ))}
//     </div>
//   );
// };

// export default Stepper;


import React from "react";

const Stepper = ({ step, totalSteps }) => {
  return (
    <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
      {Array(totalSteps)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            style={{
              width: "20px", // Width of each step bar
              height: "10px", // Height of each step bar
              background: index < step ? "black" : "#ddd", // Black for completed steps, gray for pending steps
            //   borderRadius: "5px", // Optional: rounded corners for bars
              transition: "background 0.3s ease", // Smooth transition for step color changes
            }}
          ></div>
        ))}
    </div>
  );
};

export default Stepper;

