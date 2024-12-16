
import React from 'react';
import '../consultants/consultantCard.css';

const ConsultantCard = () => {
  return (
    <div className="consultant-card">
      {/* Title */}
      <h1 className="title">CiviLink</h1>
      <h3 className="subtitle">Sri Lankan Largest Construction Network</h3>

      {/* Content Section */}
      <div className="content">
        <div className="info">
          <p>Name: <span className="bold-text">Mr. Gunapala Samarasinghe</span></p>
          <p>Specialization: <span className="bold-text">Electrical Engineering</span></p>
          <p>Location:<span className="bold-text">Kaduwela</span></p> <br />
          <p>Qualifications: <span className="bold-text">Bsc in Electrical Engineering / Chartered Engineer</span></p>
          <p>Services: <span className="bold-text">Electrical Consultant / System Auditor / System Designer</span></p>
          <p>Minimum Project Value: <span className="bold-text">Rs. 5 Mn</span></p>
          <p>Professional Fee: <span className="bold-text">5% of Total Project Cost</span></p>
          <p>Platform Fee: <span className="bold-text">Rs. 3500.00</span></p>
        </div>

        {/* Extras Section */}
        <div className="extras">
          {/* Search Input */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search text here..."
              className="search-input"
            />
          </div>

          {/* Enlarged Consultant Image */}
          <img
            src="/image 1.png"
            alt="Consultant Profile"
            className="profile-image"
          />

          {/* Calendar */}
          <div className="calendar">
            <p>February</p>
            <table>
              <thead>
                <tr>
                  <th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th><th>Su</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="highlighted">29</td><td>30</td><td>31</td>
                  <td className="highlighted">1</td><td>2</td>
                  <td className="weekend">3</td><td className="weekend">4</td>
                </tr>
                <tr>
                  <td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td>
                </tr>
                <tr>
                  <td>12</td><td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td>
                </tr>
                <tr>
                  <td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>
                </tr>
                <tr>
                  <td>26</td><td>27</td><td>28</td><td>1</td><td>2</td><td>3</td><td>4</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Request Button */}
          <button className="request-button">Request Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;