// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const Calorimeter = () => {
//     const getNutritionFacts = async () => {
//         const foodInput = document.getElementById('foodInput').value;
//         const foodQuantity = document.getElementById('foodQuantity').value;
//         const apiKey = '49zObNHMsoSl8iXfdsYGCu8mjUA6aG6C4PgSxDma'; 

//         if (!foodInput || !foodQuantity) {
//             alert('Please enter both the food item and quantity.');
//             return;
//         }

//         try {
//             const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(foodInput)}&api_key=${apiKey}`);
//             const data = await response.json();

//             if (data.foods && data.foods.length > 0) {
//                 const foodItem = data.foods[0];
//                 const nutrients = foodItem.foodNutrients;

//                 const resultContainer = document.getElementById('caloriesResultContainer');
//                 resultContainer.innerHTML = `<h2>${foodItem.description} (${foodQuantity} grams)</h2>`;
//                 resultContainer.innerHTML += '<p class="note">.......Your nutrition values will be shown here:.......</p>';

//                 nutrients.forEach(nutrient => {
//                     const nutrientName = nutrient.nutrientName;
//                     const nutrientValue = (nutrient.value / 100) * foodQuantity; 
//                     const unitName = nutrient.unitName;

//                     resultContainer.innerHTML += `<p>${nutrientName}: ${nutrientValue.toFixed(2)} ${unitName}</p>`;
//                 });

//                 resultContainer.scrollIntoView({ behavior: 'smooth' });
//             } else {
//                 document.getElementById('caloriesResultContainer').innerHTML = 'Nutrition facts not found for the entered food item.';
//             }
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             document.getElementById('caloriesResultContainer').innerHTML = 'Error fetching data. Please try again.';
//         }
//     };

//   return (
//     // className="container d-flex  align-items-center vh-100 " 
//     <div style={{ display:"flex",
//     flexDirection:"row",
//      width:"100%",
//      height:"100vh"   }} >
//     <div style={{width:"40%",height:"100vh",justifyContent: "center", alignItems:"center",marginTop:"13%",marginLeft:"10%"}}>
//     <Form style={{ width: '40%',border:"1px solid black", padding:"2%",borderRadius:"10px" }}>
//     <Form.Group className="mb-3" >
//       <Form.Label for="foodInput">Enter Food Item:</Form.Label>
//       <Form.Control type="text" id="foodInput" />
//     </Form.Group>

//     <Form.Group className="mb-3" >
//       <Form.Label for="foodQuantity">Enter Quantity (grams):</Form.Label>
//       <Form.Control type="number" id="foodQuantity" />
//     </Form.Group>

//     <Button onClick={getNutritionFacts} style={{ width: '100%' }}>
//       Get Nutritional Facts
//     </Button>
//   </Form>
//     </div>

//    <div id="caloriesResultContainer" className="col-md-6 right-box" style={{width:"50%"}}>
//    <h4 class="note" style={{ marginLeft: "10%", background: "#fff0e6", width: "80%" }}>.......Your nutrition values will be shown here:........</h4>
//      <div className="row align-items-center"> 
//                <div id="generatedDataSection" style={{ backgroundColor: "black", color: "white",marginLeft:"6%" }}></div>
//     </div>
//    </div>
// </div>



       


      
//   );
// }

// export default Calorimeter;

import React from 'react';

const Calorimeter = () => {
    const getNutritionFacts = async () => {
        const foodInput = document.getElementById('foodInput').value;
        const foodQuantity = document.getElementById('foodQuantity').value;
        const apiKey = '49zObNHMsoSl8iXfdsYGCu8mjUA6aG6C4PgSxDma';

        if (!foodInput || !foodQuantity) {
            alert('Please enter both the food item and quantity.');
            return;
        }

        try {
            const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(foodInput)}&api_key=${apiKey}`);
            const data = await response.json();

            if (data.foods && data.foods.length > 0) {
                const foodItem = data.foods[0];
                const nutrients = foodItem.foodNutrients;

                const resultContainer = document.getElementById('caloriesResultContainer');
                resultContainer.innerHTML = `<h2 class='food-title'>${foodItem.description} (${foodQuantity} grams)</h2>`;
                resultContainer.innerHTML += '<p class="intro-text">.......Your nutrition values will be shown here:.......</p>';

                nutrients.forEach(nutrient => {
                    const nutrientName = nutrient.nutrientName;
                    const nutrientValue = (nutrient.value / 100) * foodQuantity;
                    const unitName = nutrient.unitName;

                    resultContainer.innerHTML += `<p class="nutrient-info">${nutrientName}: ${nutrientValue.toFixed(2)} ${unitName}</p>`;
                });

                resultContainer.scrollIntoView({ behavior: 'smooth' });
            } else {
                document.getElementById('caloriesResultContainer').innerHTML = '<p class="error-text">Nutrition facts not found for the entered food item.</p>';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('caloriesResultContainer').innerHTML = '<p class="error-text">Error fetching data. Please try again.</p>';
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="foodInput">Enter Food Item:</label>
                        <input type="text" id="foodInput" className="input-field" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="foodQuantity">Enter Quantity (grams):</label>
                        <input type="number" id="foodQuantity" className="input-field" />
                    </div>

                    <button type="button" onClick={getNutritionFacts} className="submit-button">
                        Get Nutritional Facts
                    </button>
                </form>
            </div>

            <div id="caloriesResultContainer" className="result-container">
                <p className="intro-text">.......Your nutrition values will be shown here:........</p>
            </div>

            {/* Inline CSS */}
            <style jsx>{`
                /* Global Styles */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9fafb;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    padding: 20px;
                    justify-content: center;
                    align-items: center;
                }

                .form-container {
                    
                    padding: 30px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    width: 100%;
                    max-width: 400px;
                }

                .form-group {
                    margin-bottom: 15px;
                }

                label {
                    font-size: 1rem;
                    color: #4b5563;
                    margin-bottom: 8px;
                    display: block;
                }

                .input-field {
                    width: 100%;
                    padding: 10px;
                    font-size: 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;
                    box-sizing: border-box;
                }

                .submit-button {
                    background-color: darkblue;
                    color: white;
                    font-weight: bold;
                    padding: 12px;
                    width: 100%;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .submit-button:hover {
                    background-color: #2563eb;
                }

                .result-container {
                    background-color: #f3f4f6;
                    padding: 30px;
                    margin-top: 20px;
                    border-radius: 8px;
                    width: 100%;
                    max-width: 500px;
                    overflow-y: auto;
                }

                .food-title {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #111827;
                    margin-bottom: 12px;
                }

                .intro-text {
                    text-align: center;
                    font-size: 0.875rem;
                    color: #6b7280;
                }

                .nutrient-info {
                    color: #374151;
                    font-size: 1rem;
                    margin-bottom: 6px;
                }

                .error-text {
                    color: #ef4444;
                    font-size: 1rem;
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 10px;
                    }

                    .form-container {
                        padding: 20px;
                        width: 100%;
                    }

                    .result-container {
                        padding: 20px;
                    }

                    .submit-button {
                        padding: 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Calorimeter;
