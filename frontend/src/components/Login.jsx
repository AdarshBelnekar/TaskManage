// import { useState } from "react";
// import { toast } from "react-toastify";

// export function Login() {
//   const [employeeNumber, setEmployeeNumber] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ employeeNumber }),
//       });

//       if (response.ok) {
//         toast.success("Login successful!");
//       } else {
//         toast.error("Invalid employee number!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred!");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 border shadow">
//       <h2 className="text-xl font-bold mb-4">Employee Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Employee Number</label>
//           <input
//             type="number"
//             value={employeeNumber}
//             onChange={(e) => setEmployeeNumber(e.target.value)}
//             className="w-full border px-3 py-2 rounded"
//             required
//           />
//         </div>

//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }