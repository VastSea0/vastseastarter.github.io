import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Özel stil dosyasını ekleyin

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="container mt-5">
    
      <div className="centered-buttons">
        <button className="btn btn-dark btn-rounded mr-3" onClick={() => handleButtonClick('Hakkimizda')}>
          Hakkımızda
        </button>
        <button className="btn btn-dark btn-rounded mr-3" onClick={() => handleButtonClick('Projelerimiz')}>
          Projelerimiz
        </button>
        <button className="btn btn-dark btn-rounded" onClick={() => handleButtonClick('Iletisim')}>
          İletişim
        </button>
      </div>

      <div className="Content mt-5">
        {activeSection === 'Hakkimizda' && (
          <div id="Hakkimizda">
            <h2>Hakkımızda</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus faucibus tortor, quis ultrices eros
              posuere et...
            </p>
          </div>
        )}

        {activeSection === 'Projelerimiz' && (
          <div id="Projelerimiz">
            <h2>Projelerimiz</h2>
            <p>Projelerimiz hakkında daha fazla bilgi burada olacak...</p>
          </div>
        )}

        {activeSection === 'Iletisim' && (
          <div id="Iletisim">
            <h2>İletişim</h2>
            <p>E-posta: info@example.com</p>
            <p>Telefon: +01 1234567890</p>
          </div>
        )}
      </div>
      
       <div className="powered">
        <h5>Powered By VastSea</h5>
      </div>
    </div>
  );
}

export default App;
