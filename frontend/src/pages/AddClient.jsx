import axios from "axios";
import  { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
    income: "",
    maritalStatus: "Single",
    dependents: 0,
    financialGoal: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Client Data:", formData);
    const response  = await axios.post("http://localhost:2145/api/clients",formData)
    if(response.data){
        toast.success("Client Added Successfully");
        setFormData({
            name: "",
            age: "",
            occupation: "",
            income: "",
            maritalStatus: "Single",
            dependents: 0,
            financialGoal: "",
        })
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Add Client Information</h1>
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border rounded w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Age"
            className="p-2 border rounded w-full"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <input
            type="text"
            placeholder="Occupation"
            className="p-2 border rounded w-full"
            value={formData.occupation}
            onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
          />
          <input
            type="number"
            placeholder="Income"
            className="p-2 border rounded w-full"
            value={formData.income}
            onChange={(e) => setFormData({ ...formData, income: e.target.value })}
          />
          <select
            className="p-2 border rounded w-full"
            value={formData.maritalStatus}
            onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
          <input
            type="number"
            placeholder="Dependents"
            className="p-2 border rounded w-full"
            value={formData.dependents}
            onChange={(e) => setFormData({ ...formData, dependents: e.target.value })}
          />
          <input
            type="text"
            placeholder="Financial Goal"
            className="p-2 border rounded w-full"
            value={formData.financialGoal}
            onChange={(e) => setFormData({ ...formData, financialGoal: e.target.value })}
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Client
        </button>
      </form>
    </div>
  );
};

export default AddClient;
