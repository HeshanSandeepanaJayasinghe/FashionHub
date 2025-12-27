// src/utils/api.js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const apiFetch = async (path, options = {}) => {
  const token = localStorage.getItem('token');
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });

  // Try to parse JSON response safely
  let data = null;
  try {
    data = await res.json();
  } catch (err) {
    // If no JSON body, fallback
    data = null;
  }

  if (!res.ok) {
    const err = new Error((data && data.message) || 'API error');
    err.response = data;
    throw err;
  }

  return data;
};
