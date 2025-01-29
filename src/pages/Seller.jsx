import React, { useState, useEffect } from "react";
import { fireDB } from "../firebase/Firebase"; // ✅ Import Firestore instance
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const Seller = () => {
  const [companyName, setCompanyName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [genericAlternatives, setGenericAlternatives] = useState("");
  const [price, setPrice] = useState(""); // ✅ Added price state
  const [sellerData, setSellerData] = useState(null); // ✅ State for fetched seller data
  const [orders, setOrders] = useState([]); // ✅ State for orders

  const storedUser = localStorage.getItem("users");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const navigate = useNavigate();
    // Logout function
    const logout = () => {
      localStorage.removeItem("users");
      navigate("/");
    };

  // ✅ Function to fetch seller data from Firestore
  const fetchSellerData = async () => {
    if (!user) return;

    try {
      const sellerRef = doc(fireDB, "sellers", user.uid);
      const sellerSnap = await getDoc(sellerRef);

      if (sellerSnap.exists()) {
        setSellerData(sellerSnap.data());
      } else {
        setSellerData(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data.");
    }
  };

  // ✅ Function to fetch orders for the current seller
  const fetchOrders = async () => {
    if (!user) return;

    try {
      const ordersRef = collection(fireDB, "orders");
      const q = query(ordersRef, where("companyName", "==", sellerData?.companyName));
      const querySnapshot = await getDocs(q);

      const fetchedOrders = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setOrders(fetchedOrders); // Update state with orders data
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders.");
    }
  };

  useEffect(() => {
    fetchSellerData(); // Fetch data on component mount
  }, []);

  useEffect(() => {
    if (sellerData) {
      fetchOrders(); // Fetch orders whenever seller data is available
    }
  }, [sellerData]);

  const handleSave = async () => {
    if (!user) {
      toast.error("Please log in to save your data.");
      return;
    }

    if (!companyName || !price) {
      toast.error("Company Name and Price are required.");
      return;
    }

    try {
      const newDocRef = doc(fireDB, "sellers", user.uid); // Use Firestore's auto-generated ID
      await setDoc(newDocRef, {
        companyName,
        brandName,
        genericAlternatives: genericAlternatives.split(",").map((alt) => alt.trim()),
        price: parseFloat(price), // ✅ Store price as a number
        timestamp: new Date(),
      });

      toast.success("Company data saved successfully!");
      setCompanyName("");
      setBrandName("");
      setGenericAlternatives("");
      setPrice("");
      fetchSellerData(); // ✅ Refresh displayed data
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data.");
    }
  };

  return (
    <div style={{ backgroundColor: "#f7f7f7", display: "flex", padding: "20px" }}>
      <div
        style={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: "40%",
          padding: "24px",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#333", marginBottom: "24px" }}>
          <button onClick={logout} style={{display:"flex",justifyItems:"center" ,alignItems:"center",color:"darkblue"}}><CiLogout /> Logout</button>  Seller Admin Page
        </h1>

        {/* Company Name Input */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            placeholder="Enter company name"
          />
        </div>

        {/* Brand Name Input */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Brand Name</label>
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            placeholder="Enter brand name"
          />
        </div>

        {/* Generic Alternatives Input */}
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>
            Generic Alternatives (comma-separated)
          </label>
          <input
            type="text"
            value={genericAlternatives}
            onChange={(e) => setGenericAlternatives(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            placeholder="Enter generic alternatives"
          />
        </div>

        {/* Price Input */}
        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontWeight: "600", color: "#555", marginBottom: "8px" }}>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            placeholder="Enter price"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSave}
          style={{
            width: "100%",
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "12px",
            border: "none",
            borderRadius: "4px",
            fontWeight: "600",
            cursor: "pointer",
            textAlign: "center",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "blue")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "darkblue")}
        >
          Submit
        </button>
      </div>

      <div style={{ width: "30%"}}>
        {/* Display Seller Data */}
        {sellerData && (
          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              backgroundColor: "#f9f9f9",
              borderRadius: "6px",
            }}
          >
            <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#333" }}>Stored Data</h2>
            <p>
              <strong>Company Name:</strong> {sellerData.companyName}
            </p>
            <p>
              <strong>Brand Name:</strong> {sellerData.brandName || "N/A"}
            </p>
            <p>
              <strong>Generic Alternatives:</strong>{" "}
              {sellerData.genericAlternatives ? sellerData.genericAlternatives.join(", ") : "N/A"}
            </p>
            <p>
              <strong>Price:</strong> Rs.{sellerData.price || "N/A"}
            </p>
          </div>
        )}
      </div>

      {/* Orders Section */}
      <div style={{ marginTop: "24px",width: "30%"  }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "#333" }}>Orders</h2>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                padding: "12px",
                marginBottom: "12px",
                backgroundColor: "#f9f9f9",
                borderRadius: "6px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p><strong>Product:</strong> {order.productName}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Total Price:</strong> Rs.{order.totalPrice}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Seller;
