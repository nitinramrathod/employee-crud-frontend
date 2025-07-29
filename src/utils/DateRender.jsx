export function DateRenderer(dateInput) {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) return ''; // Handle invalid dates

  const day = date.getDate(); // 1 - 31
  const month = date.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, etc.
  const year = date.getFullYear();

  return `${day} ${month} ${year}`; // e.g., 1 Jan 2025
}