import React, { useState } from 'react';

const AddMarkerPopup = ({ setShowAddMarkerPopup }) => {
  const [markerInfo, setMarkerInfo] = useState({
    title: '',
    description: '',
    color: '',
    icon: '',
    type: '',
    nap1_hilo_number: null,
    nap1_buffer_number: null,
    nap1_hilo_color: '',
    nap1_buffer_color: '',
    nap1_ports: null,
    nap2_hilo_number: null,
    nap2_buffer_number: null,
    nap2_hilo_color: '',
    nap2_buffer_color: '',
    nap2_ports: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarkerInfo({
      ...markerInfo,
      [name]: value
    });
  };

  const handleSaveMarker = () => {
    // Save marker logic
    setShowAddMarkerPopup(false);
  };

  return (
    <div className="popup">
      <h2>Add Marker</h2>
      <input
        type="text"
        name="title"
        value={markerInfo.title}
        onChange={handleInputChange}
        placeholder="Marker Title"
      />
      <textarea
        name="description"
        value={markerInfo.description}
        onChange={handleInputChange}
        placeholder="Marker Description"
      />
      <input
        type="text"
        name="color"
        value={markerInfo.color}
        onChange={handleInputChange}
        placeholder="Marker Color"
      />
      <input
        type="text"
        name="icon"
        value={markerInfo.icon}
        onChange={handleInputChange}
        placeholder="Marker Icon"
      />
      <select name="type" value={markerInfo.type} onChange={handleInputChange}>
        <option value="">Select Type</option>
        <option value="manga">Manga</option>
        <option value="reserva">Reserva</option>
        <option value="nap1">Nap 1</option>
        <option value="nap2">Nap 2</option>
        <option value="ont">ONT</option>
      </select>
      {['nap1', 'nap2'].includes(markerInfo.type) && (
        <>
          <input
            type="number"
            name="nap1_hilo_number"
            value={markerInfo.nap1_hilo_number}
            onChange={handleInputChange}
            placeholder="Hilo Number"
          />
          <input
            type="number"
            name="nap1_buffer_number"
            value={markerInfo.nap1_buffer_number}
            onChange={handleInputChange}
            placeholder="Buffer Number"
          />
          <input
            type="text"
            name="nap1_hilo_color"
            value={markerInfo.nap1_hilo_color}
            onChange={handleInputChange}
            placeholder="Hilo Color"
          />
          <input
            type="text"
            name="nap1_buffer_color"
            value={markerInfo.nap1_buffer_color}
            onChange={handleInputChange}
            placeholder="Buffer Color"
          />
          <input
            type="number"
            name="nap1_ports"
            value={markerInfo.nap1_ports}
            onChange={handleInputChange}
            placeholder="Ports Number"
          />
        </>
      )}
      <button onClick={handleSaveMarker}>Save Marker</button>
      <button onClick={() => setShowAddMarkerPopup(false)}>Cancel</button>
    </div>
  );
};

export default AddMarkerPopup;
