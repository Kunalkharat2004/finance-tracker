import  { useState } from "react";
import axios from "axios";
import Modal from "react-modal"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteClient = () => {
  const [clientId, setClientId] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState("");


  const openModal = () =>{
    setModalIsOpen(true);
  }

  const closeModal = () =>{
    setModalIsOpen(false);
  }
  // Handle deletion
  const handleDelete = async () => {

    setModalIsOpen(false);
    if (!clientId) {
      setMessage("Please enter a valid Client ID.");
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:2145/api/clients/${clientId}`);
      if (response.status === 200) {
        toast.success("Client deleted successfully.");
      }
      setClientId(""); // Clear input field after deletion
    } catch (error) {
      setMessage("Error deleting client. Please ensure the Client ID is correct.");
      console.error("Error deleting client:", error);
    }
  };

return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <ToastContainer/>
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Delete Client</h1>
        <div className="mb-6">
            <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">
                Enter Client ID
            </label>
            <input
                type="text"
                id="clientId"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                placeholder="Enter Client ID"
            />
        </div>
        <button
            onClick={openModal}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
        >
            Delete Client
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Confirm Delete"
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
               <div className="flex flex-col items-center space-y-6">
               <h2 className="text-xl font-semibold text-white mb-4">Are you sure you want to delete this client?</h2>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Yes
                    </button>
                    <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                    >
                        No
                    </button>
                </div>
               </div>
        </Modal>
        {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
    </div>
);
};

export default DeleteClient;
