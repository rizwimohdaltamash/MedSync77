import React, { useState, useEffect } from "react";
import { fireDB } from "../firebase/Firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const Generic = () => {
  const [companies, setCompanies] = useState([]); // List of companies
  const [selectedCompany, setSelectedCompany] = useState(""); // Selected company
  const [products, setProducts] = useState([]); // Products from Firestore
  const [selectedProduct, setSelectedProduct] = useState(null); // Selected product (object)
  const [quantity, setQuantity] = useState(1); // User input quantity

  const navigate = useNavigate();
  // Logout function
  const logout = () => {
    localStorage.removeItem("users");
    navigate("/");
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // 🔥 Fetch companies from Firestore
  const fetchCompanies = async () => {
    try {
      const querySnapshot = await getDocs(collection(fireDB, "sellers"));
      const companyList = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.companyName && !companyList.includes(data.companyName)) {
          companyList.push(data.companyName);
        }
      });
      setCompanies(companyList);
    } catch (error) {
      console.error("Error fetching companies:", error);
      toast.error("Failed to load companies.");
    }
  };

  // 🔥 Fetch products of the selected company
  const fetchProducts = async (company) => {
    setProducts([]);
    setSelectedProduct(null);

    try {
      const q = query(collection(fireDB, "sellers"), where("companyName", "==", company));
      const querySnapshot = await getDocs(q);
      let productsList = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.brandName) {
          productsList.push({
            id: doc.id,
            brandName: data.brandName,
            price: data.price,
          });
        }
      });

      setProducts(productsList);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products.");
    }
  };

  // 🔥 Calculate total price dynamically
  const totalPrice = selectedProduct ? selectedProduct.price * quantity : 0;

  // 🔥 Handle placing an order
  const handleOrder = async () => {
    if (!selectedCompany || !selectedProduct || quantity < 1) {
      toast.error("Please select a company, product, and enter a valid quantity.");
      return;
    }

    try {
      // Add order to Firestore with companyName, ensuring only that company can access the order
      await addDoc(collection(fireDB, "orders"), {
        companyName: selectedCompany,
        productName: selectedProduct.brandName,
        quantity,
        totalPrice,
        status: "Pending",
        timestamp: new Date(),
      });

      toast.success("Order placed successfully!");
      setSelectedCompany("");
      setSelectedProduct(null);
      setQuantity(1);
      setProducts([]);
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", backgroundColor: "#f7f7f7" }}>
     
      
      
      <div style={{ backgroundColor: "#fff", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px", width: "100%", maxWidth: "400px", padding: "24px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: "24px" }}>
        <button onClick={logout} style={{display:"flex",justifyItems:"center" ,alignItems:"center",color:"darkblue"}}><CiLogout /> Logout</button>  Order Medicine
          </h1>

        {/* 🔻 Company Selection */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Select Company</label>
          <select
            value={selectedCompany}
            onChange={(e) => {
              setSelectedCompany(e.target.value);
              fetchProducts(e.target.value);
            }}
            style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#fff", cursor: "pointer" }}
          >
            <option value="">Select a company</option>
            {companies.map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* 🔻 Product Selection */}
        {products.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Select Product</label>
            <select
              value={selectedProduct ? selectedProduct.brandName : ""}
              onChange={(e) => {
                const selected = products.find((product) => product.brandName === e.target.value);
                setSelectedProduct(selected);
              }}
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", backgroundColor: "#fff", cursor: "pointer" }}
            >
              <option value="">Select a product</option>
              {products.map((product, index) => (
                <option key={index} value={product.brandName}>
                  {product.brandName} - ₹{product.price}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 🔻 Quantity Selection */}
        {selectedProduct && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              style={{ width: "100%", padding: "12px", border: "1px solid #ccc", borderRadius: "4px", boxSizing: "border-box" }}
            />
          </div>
        )}

        {/* 🔻 Total Price */}
        {selectedProduct && (
          <div style={{ fontWeight: "600", fontSize: "18px", color: "#333", marginBottom: "16px", textAlign: "center" }}>
            Total Price: ₹{totalPrice}
          </div>
        )}

        {/* 🔥 Order Button */}
        <button
          onClick={handleOrder}
          style={{ width: "100%", backgroundColor: "darkblue", color: "#fff", padding: "12px", border: "none", borderRadius: "4px", fontWeight: "600", cursor: "pointer", textAlign: "center" }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "blue")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "darkblue")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Generic;
