import  { useState } from "react";

const SalarySlip = () => {
  const [clientData, setClientData] = useState({
    name: "",
    occupation: "",
    income: "",
    tax: "",
    deductions: "",
  });

  const [salarySlip, setSalarySlip] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleGenerateSlip = () => {
    const { name, occupation, income, tax, deductions } = clientData;

    if (!name || !occupation || !income || !tax || !deductions) {
      setMessage("Please fill in all fields.");
      return;
    }

    const netSalary = parseFloat(income) - parseFloat(tax) - parseFloat(deductions);

    setSalarySlip({
      name,
      occupation,
      income,
      tax,
      deductions,
      netSalary: netSalary.toFixed(2),
    });

    setMessage("");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Generate Salary Slip</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={clientData.name}
            onChange={handleChange}
            className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter client's name"
          />
        </div>
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={clientData.occupation}
            onChange={handleChange}
            className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter occupation"
          />
        </div>
        <div>
          <label htmlFor="income" className="block text-sm font-medium text-gray-700">
            Income
          </label>
          <input
            type="number"
            id="income"
            name="income"
            value={clientData.income}
            onChange={handleChange}
            className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter total income"
          />
        </div>
        <div>
          <label htmlFor="tax" className="block text-sm font-medium text-gray-700">
            Tax
          </label>
          <input
            type="number"
            id="tax"
            name="tax"
            value={clientData.tax}
            onChange={handleChange}
            className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter tax amount"
          />
        </div>
        <div>
          <label htmlFor="deductions" className="block text-sm font-medium text-gray-700">
            Deductions
          </label>
          <input
            type="number"
            id="deductions"
            name="deductions"
            value={clientData.deductions}
            onChange={handleChange}
            className="mt-1 block p-4 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Enter deductions"
          />
        </div>
      </div>
      <button
        onClick={handleGenerateSlip}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Generate Salary Slip
      </button>
      {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
      {salarySlip && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Salary Slip</h2>
          <p><strong>Name:</strong> {salarySlip.name}</p>
          <p><strong>Occupation:</strong> {salarySlip.occupation}</p>
          <p><strong>Total Income:</strong> ₹{salarySlip.income}</p>
          <p><strong>Tax:</strong> ₹{salarySlip.tax}</p>
          <p><strong>Deductions:</strong> ₹{salarySlip.deductions}</p>
          <p className="font-bold"><strong>Net Salary:</strong> ₹{salarySlip.netSalary}</p>
        </div>
      )}
    </div>
  );
};

export default SalarySlip;
