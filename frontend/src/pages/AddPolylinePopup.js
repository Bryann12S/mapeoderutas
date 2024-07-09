import React from 'react';

const AddPolylinePopup = ({ setShowAddPolylinePopup }) => {
  const handleSavePolyline = () => {
    // Save polyline logic
    setShowAddPolylinePopup(false);
  };

  return (
    <div className="popup">
      <h2>Add Polyline</h2>
      <button onClick={handleSavePolyline}>Save Polyline</button>
      <button onClick={() => setShowAddPolylinePopup(false)}>Cancel</button>
    </div>
  );
};

export default AddPolylinePopup;

