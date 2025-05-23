import React, { useState, useEffect } from "react";

function MedicationReminderApp() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      medications.forEach((med) => {
        if (med.time === currentTime && !med.notified) {
          alert(`Time to take your medication: ${med.name}`);
          med.notified = true;
        }
      });
    }, 60000);
    return () => clearInterval(interval);
  }, [medications]);

  const addMedication = () => {
    if (name && time) {
      setMedications([...medications, { name, time, notified: false }]);
      setName("");
      setTime("");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Medication Reminder</h2>
      <input
        placeholder="Medication Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={addMedication}>Add Reminder</button>

      <ul>
        {medications.map((med, index) => (
          <li key={index}>
            {med.name} at {med.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicationReminderApp;
