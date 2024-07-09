// frontend/src/pages/CardsTab.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardsTab = () => {
  const data = [
    {
      id: 1,
      action: 'Install',
      title: 'Installation Actions',
      totalMarkers: 10,
      totalRoutes: 5,
      mangasCreated: 2,
      reservesCreated: 1,
      totalDistance: '15 km',
      nap1: 'N/A',
      nap2: 'N/A',
      ont: 'ONT123',
      createdDate: '2024-07-01',
      createdBy: 'Admin',
    },
    {
      id: 2,
      action: 'Repair',
      title: 'Repair Actions',
      totalMarkers: 8,
      totalRoutes: 4,
      mangasCreated: 1,
      reservesCreated: 2,
      totalDistance: '10 km',
      nap1: 'N/A',
      nap2: 'N/A',
      ont: 'ONT456',
      createdDate: '2024-07-02',
      createdBy: 'User1',
    },
    // More data...
  ];

  return (
    <div className="container">
      <h2>Actions Overview</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Action</th>
              <th>Title</th>
              <th>Total Markers</th>
              <th>Total Routes</th>
              <th>Mangas Created</th>
              <th>Reserves Created</th>
              <th>Total Distance</th>
              <th>NAP 1</th>
              <th>NAP 2</th>
              <th>ONT</th>
              <th>Created Date</th>
              <th>Created By</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.action}</td>
                <td>{item.title}</td>
                <td>{item.totalMarkers}</td>
                <td>{item.totalRoutes}</td>
                <td>{item.mangasCreated}</td>
                <td>{item.reservesCreated}</td>
                <td>{item.totalDistance}</td>
                <td>{item.nap1}</td>
                <td>{item.nap2}</td>
                <td>{item.ont}</td>
                <td>{item.createdDate}</td>
                <td>{item.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardsTab;
