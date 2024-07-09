import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles.css'; // Archivo de estilos para MapComponent

const MapComponent = ({ handleAddMarker, handleAddPolyline }) => {
  const [markers, setMarkers] = useState([]);
  const [polylines, setPolylines] = useState([]);
  const [drawingPolyline, setDrawingPolyline] = useState(false);
  const [polylinePoints, setPolylinePoints] = useState([]);

  const handleMapClick = (e) => {
    if (drawingPolyline) {
      setPolylinePoints([...polylinePoints, e.latlng]);
    } else {
      handleAddMarker(e.latlng);
    }
  };

  const startDrawingPolyline = () => {
    setDrawingPolyline(true);
  };

  const finishDrawingPolyline = () => {
    setDrawingPolyline(false);
    handleAddPolyline(polylinePoints);
    setPolylinePoints([]);
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[-1.831239, -78.183406]}
        zoom={6}
        style={{ height: '100vh', width: '100%' }}
        whenCreated={(map) => map.on('click', handleMapClick)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={[marker.lat, marker.lng]}>
            <Popup>
              <div>
                <h3>{marker.title}</h3>
                <p>{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {polylines.map((line, idx) => (
          <Polyline key={idx} positions={line} color="red" />
        ))}
        {drawingPolyline && (
          <Polyline positions={polylinePoints} color="red" />
        )}
      </MapContainer>

      <div className="map-controls">
        <button className="map-control-btn" onClick={handleAddMarker}>
          Add Marker
        </button>
        <button
          className="map-control-btn"
          onClick={startDrawingPolyline}
        >
          Start Drawing Polyline
        </button>
        {drawingPolyline && (
          <button
            className="map-control-btn"
            onClick={finishDrawingPolyline}
          >
            Finish Drawing Polyline
          </button>
        )}
      </div>
    </div>
  );
};

export default MapComponent;