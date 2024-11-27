import  { useState, useEffect } from "react";
import axios from "axios";

const ShowFinanceDetails = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch financial details from the backend
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:2145/api/clients");
        setClients(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Financial Details</h1>
      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : clients.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow rounded">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-2">Name</th>
                <th className="p-2">Age</th>
                <th className="p-2">Occupation</th>
                <th className="p-2">Income</th>
                <th className="p-2">Marital Status</th>
                <th className="p-2">Dependents</th>
                <th className="p-2">Financial Goal</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, index) => (
                <tr
                  key={index}
                  className={`text-center ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                >
                  <td className="p-2">{client.name}</td>
                  <td className="p-2">{client.age}</td>
                  <td className="p-2">{client.occupation}</td>
                  <td className="p-2">{client.income}</td>
                  <td className="p-2">{client.maritalStatus}</td>
                  <td className="p-2">{client.dependents}</td>
                  <td className="p-2">{client.financialGoal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No clients found.</p>
      )}
    </div>
  );
};

export default ShowFinanceDetails;
