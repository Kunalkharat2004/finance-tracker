import  { useState } from "react";
import axios from "axios";

const SearchClient = () => {
  const [clientId, setClientId] = useState("");
  const [clientData, setClientData] = useState(null);
  const [message, setMessage] = useState("");

  // Handle client search
  const handleSearch = async () => {
    if (!clientId) {
      setMessage("Please enter a valid Client ID.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:2145/api/clients/${clientId}`);
      if (response.data) {
        setClientData(response.data); // Update state with fetched client data
        setMessage("");
      }
    } catch (error) {
      setClientData(null); // Clear previous client data if error occurs
      setMessage("Client not found. Please check the ID and try again.");
      console.error("Error fetching client:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Search Client</h1>
      <div className="mb-4">
        <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">
          Enter Client ID
        </label>
        <input
          type="text"
          id="clientId"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Enter Client ID"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Search Client
      </button>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      {clientData && (
        <div className="mt-4 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Client Details</h2>
          <p><strong>Name:</strong> {clientData.name}</p>
          <p><strong>Age:</strong> {clientData.age}</p>
          <p><strong>Occupation:</strong> {clientData.occupation}</p>
          <p><strong>Income:</strong> {clientData.income}</p>
          <p><strong>Marital Status:</strong> {clientData.maritalStatus}</p>
          <p><strong>Dependents:</strong> {clientData.dependents}</p>
          <p><strong>Financial Goal:</strong> {clientData.financialGoal}</p>
        </div>
      )}
    </div>
  );
};

export default SearchClient;
