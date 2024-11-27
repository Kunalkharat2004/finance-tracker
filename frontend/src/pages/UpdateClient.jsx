import  { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateClient = () => {
  const [clientId, setClientId] = useState("");
  const [clientData, setClientData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    income: "",
    maritalStatus: "",
    dependents: "",
    financialGoal: "",
  });
  const [message, setMessage] = useState("");

  // Fetch client details by ID
  const fetchClient = async () => {
    try {
      const response = await axios.get(`http://localhost:2145/api/clients/${clientId}`);
      setClientData(response.data);
      setFormData(response.data); // Pre-fill form with client data
      setMessage("");
    } catch (error) {
      setMessage("Client not found. Please check the ID.");
      console.error("Error fetching client:", error);
    }
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2145/api/clients/${clientId}`, formData);
      toast.success("Client details updated successfully.");
      setClientData(null);
      setClientId("");
    } catch (error) {
      setMessage("Error updating client details.");
      console.error("Error updating client:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Update Client Details</h1>
      <ToastContainer/>
      {/* Search for client */}
      <div className="mb-4">
        <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">
          Enter Client ID
        </label>
        <input
          type="text"
          id="clientId"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-4"
          placeholder="Enter Client ID"
        />
        <button
          onClick={fetchClient}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fetch Client
        </button>
      </div>

      {message && <p className="text-red-500 mb-4">{message}</p>}

      {/* Update client form */}
      {clientData && (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Income</label>
              <input
                type="number"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Marital Status</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Dependents</label>
              <input
                type="number"
                name="dependents"
                value={formData.dependents}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Financial Goal</label>
              <input
                type="text"
                name="financialGoal"
                value={formData.financialGoal}
                onChange={handleChange}
                className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Update Client
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateClient;
