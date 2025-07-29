import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createEmployee = async (data) => {
  try {
    const res = await axiosInstance.post('/employees', data);
    return res.data;
  } catch (err) {
    console.error('Error creating employee:', err);
    throw err;
  }
};
export const getAllEmployees = async () => {
  try {
    const res = await axiosInstance.get('/employees');
    return res.data;
  } catch (err) {
    console.error('Error creating employee:', err);
    throw err;
  }
};


export const getEmployeeById = async (id) => {
  try {
    const res = await axiosInstance.get(`/employees/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching employee:', err);
    throw err;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const res = await axiosInstance.delete(`/employees/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error deleting employee:', err);
    throw err;
  }
};

export const updateEmployee = async (id, data) => {
  try {
    const res = await axiosInstance.put(`/employees/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Error updating employee:', err);
    throw err;
  }
};

export const toggleEmployeeStatus = async (id, data) => {
  try {
    const res = await axiosInstance.put(`/employees/status/${id}`, data);
    return res.data;
  } catch (err) {
    console.error('Error updating employee:', err);
    throw err;
  }
};