import React, { useState, useEffect } from 'react';
import './Dashboard.scss';

const Dashboard: React.FC = () => {

    let [date, setDate] = useState<Date | null>(null);

    useEffect(() => {
        const today = new Date();
        setDate(today);
    }, []);

    let get_formatted_date = (date: Date) => {
        return date.toLocaleDateString(undefined, {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }
    return (
      <div className="dashboard">
        <div className="card">
          <div className="user-meta">
            <div className="date">{date && get_formatted_date(date)}</div>
            <div className="user-icon">
              <i className="bx bx-user"></i>
            </div>

            <div className="card-text">
              <span>Welcome back, username.</span>
              <span>You currently have 2 businesses registered.</span>
            </div>

            <div className="links-sect">
              <button>
                <span className="btn-icon">
                  <i className="bx bx-cog"></i>
                </span>
                <span className="btn-text">Edit profile</span>
              </button>

              <button>
                <span className="btn-icon">
                  <i className="bx bx-plus"></i>
                </span>
                <span className="btn-text">Add business</span>
              </button>

              <button>
                <span className="btn-icon">
                  <i className="bx bx-search"></i>
                </span>
                <span className="btn-text">Search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="user-meta">
            <div className="date"></div>
            {/* Placeholder */}
            <div className="user-icon">
              <i className="bx bx-buildings"></i>
            </div>

            <div className="card-text">
              <div>
                <span>My businesses: 2</span>
              </div>

              <div>
                <span>Orders: 3</span>
              </div>

              <div>
                <span>Appointments: No services offered.</span>
              </div>

              <div>
                <span>Revenue (weekly): Ksh. 1000</span>
              </div>
            </div>

            <div className="links-sect">
              <button>
                <span className="btn-icon">
                  <i className="bx bx-cart"></i>
                </span>
                <span className="btn-text">Orders</span>
              </button>

              <button>
                <span className="btn-icon">
                  <i className="bx bx-male-female"></i>
                </span>
                <span className="btn-text">My employees</span>
              </button>

              <button>
                <span className="btn-icon">
                  <i className="bx bxs-report"></i>
                </span>
                <span className="btn-text">Generate report</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card width-100"></div>
      </div>
    );
}

export default Dashboard;