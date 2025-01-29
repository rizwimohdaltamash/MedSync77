// import React, { useState } from "react";

// import Lottie from "lottie-react";
// import axios from "axios";

// const Bot = () => {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

  

//   const generateAnswer = async () => {
   
//     setLoading(true);

//     try {
//       const response = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCvZCloLPAWjCqsbiJrYm-Itm8Bd-ldBF4",
//         method: "post",
//         data: {
//           contents: [{ parts: [{ text: question }] }],
//         },
//       });

//       const rawAnswer = response["data"]["candidates"][0]["content"][
//         "parts"
//       ][0]["text"].replace(/\*/g, "");

//       // Combine all lines into a single paragraph without trimming
//       const paragraph = rawAnswer
//         .split("\n")
//         .filter((line) => line.trim() !== "")
//         .join(" ");

//       setAnswer(paragraph);
//     } catch (error) {
//       setAnswer("Error fetching the answer. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-green-300 flex flex-col lg:flex-row justify-center items-center p-4">

//         <div className="lg:w-1/2 flex flex-col justify-center items-center">
//           <Lottie animationData={Bot} />
//           <h1 className="text-2xl font-bold text-green-700">"Hey, I am Green Genie, ask me any of your doubt about waste management."</h1>
          
//         </div>

//         <div className=" w-full lg:w-1/2 mt-4 lg:mt-0 flex flex-col justify-center items-center">
//           <h1 className=" text-xl lg:text-4xl font-bold text-white mb-6">
//             Green Genie AI Chatbot
//           </h1>
//           <textarea
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             cols="30"
//             rows="5"
//             placeholder="Ask a question related to waste management..."
//             className="border-2 border-gray-300 rounded-lg p-4 w-full max-w-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
//           ></textarea>

//           <button
//             className="mt-4 bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 transition font-semibold"
//             onClick={generateAnswer}
//           >
//             Generate Answer
//           </button>

//           {loading ? (
//             <div className="mt-6">
//               <div
//                 className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"
//                 style={{ borderTopColor: "green" }}
//               ></div>
//             </div>
//           ) : (
//             <div
//               className="mt-6 bg-gray-300 p-4 rounded-lg shadow-lg w-full max-w-lg text-gray-800 text-lg overflow-y-auto"
//               style={{ maxHeight: "300px" }}
//             >
//               <p>{answer}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Bot;

import React, { useState } from "react";
import axios from "axios";

const Bot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    setLoading(true);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCvZCloLPAWjCqsbiJrYm-Itm8Bd-ldBF4",
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const rawAnswer = response["data"]["candidates"][0]["content"]["parts"][0]["text"].replace(/\*/g, "");

      const paragraph = rawAnswer
        .split("\n")
        .filter((line) => line.trim() !== "")
        .join(" ");

      setAnswer(paragraph);
    } catch (error) {
      setAnswer("Error fetching the answer. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
     

      <div style={styles.right}>
        <h1 style={styles.chatHeading}>Green Genie AI Chatbot</h1>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question related to health care..."
          style={styles.textarea}
        ></textarea>

        <button style={styles.button} onClick={generateAnswer}>
          Generate Answer
        </button>

        {loading ? (
          <div style={styles.loadingSpinner}></div>
        ) : (
          <div style={styles.answerContainer}>
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to right, #4caf50, #2196f3, #4caf50)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    flexDirection: 'column',
    textAlign: 'center',
  },
  left: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#388e3c',
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '16px',
  },
  chatHeading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '24px',
  },
  textarea: {
    width: '100%',
    maxWidth: '600px',
    padding: '16px',
    borderRadius: '8px',
    border: '2px solid #ccc',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
    fontSize: '16px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '12px 24px',
    backgroundColor: '#388e3c',
    color: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  loadingSpinner: {
    width: '64px',
    height: '64px',
    border: '4px solid #f0f0f0',
    borderTop: '4px solid #4caf50',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  answerContainer: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#f0f0f0',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    marginTop: '24px',
    color: '#333',
    fontSize: '18px',
    overflowY: 'auto',
    maxHeight: '300px',
  },
};

export default Bot;
