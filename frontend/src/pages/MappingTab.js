import React, { useState } from 'react';
import MapComponent from '../components/MapComponent';
import AddMarkerPopup from './AddMarkerPopup';
import AddPolylinePopup from './AddPolylinePopup';

const MappingTab = () => {
  const [showAddMarkerPopup, setShowAddMarkerPopup] = useState(false);
  const [showAddPolylinePopup, setShowAddPolylinePopup] = useState(false);

  const handleAddMarker = () => {
    setShowAddMarkerPopup(true);
  };

  const handleAddPolyline = () => {
    setShowAddPolylinePopup(true);
  };

  return (
    <div className="mapping-tab">
      <MapComponent 
        handleAddMarker={handleAddMarker} 
        handleAddPolyline={handleAddPolyline} 
      />
      {showAddMarkerPopup && (
        <AddMarkerPopup
          setShowAddMarkerPopup={setShowAddMarkerPopup}
        />
      )}
      {showAddPolylinePopup && (
        <AddPolylinePopup
          setShowAddPolylinePopup={setShowAddPolylinePopup}
        />
      )}
    </div>
  );
};

export default MappingTab;



