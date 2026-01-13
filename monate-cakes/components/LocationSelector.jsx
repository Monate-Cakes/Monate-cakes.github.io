import { useState } from 'react';

const provinces = ['KwaZulu-Natal', 'Gauteng' /* Add all */];
const cities = {
  'KwaZulu-Natal': ['Durban', 'Pietermaritzburg'],
  'Gauteng': ['Johannesburg', 'Pretoria'],
};

export default function LocationSelector({ onChange }) {
  const [province, setProvince] = useState(provinces[0]);
  const [city, setCity] = useState(cities[provinces[0]][0]);

  const handleProvinceChange = (e) => {
    const p = e.target.value;
    setProvince(p);
    setCity(cities[p][0]);
    onChange?.({ province: p, city: cities[p][0] });
  };

  return (
    <>
      <div className="location-selector-container">
        <div className="location-input-group">
          <label htmlFor="province-select">
            <i className="bi bi-map"></i>
            Province
          </label>
          <select
            id="province-select"
            value={province}
            onChange={handleProvinceChange}
          >
            {provinces.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className="location-input-group">
          <label htmlFor="city-select">
            <i className="bi bi-geo-alt"></i>
            City
          </label>
          <select
            id="city-select"
            value={city}
            onChange={(e) => { setCity(e.target.value); onChange?.({ province, city: e.target.value }); }}
          >
            {cities[province].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <style jsx>{`
        .location-selector-container {
          display: flex;
          gap: 16px;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
        }

        .location-input-group {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .location-input-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .location-input-group label i {
          color: #D4A574;
          font-size: 1rem;
        }

        .location-input-group select {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23D4A574' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 44px;
        }

        .location-input-group select:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(212, 165, 116, 0.3);
        }

        .location-input-group select:focus {
          outline: none;
          border-color: #D4A574;
          box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
        }

        .location-input-group select option {
          background: #1a1a1a;
          color: #ffffff;
          padding: 12px;
        }

        @media (max-width: 640px) {
          .location-selector-container {
            flex-direction: column;
            gap: 12px;
          }

          .location-input-group select {
            padding: 16px;
            font-size: 1.05rem;
            border-radius: 14px;
          }

          .location-input-group label {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .location-input-group select {
            padding: 18px 16px;
            font-size: 16px;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
        }
      `}</style>
    </>
  );
}
