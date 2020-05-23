import React, { useState, useEffect } from "react";

const LogOut = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked); //true = déconnexion

  useEffect(() => {
    if (checked) {
      console.log("Déconnexion");
      //fonction déconnexion
    }
  }, [checked]);

  const handleChange = (event) => {
    //vérification du check
    setChecked(event.target.checked);
  };

  return (
    <div className="LogOutContainer">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className="slider round"></span>
        <label className="etatConnexion">état de connexion</label>
      </label>
    </div>
  );
};

export default LogOut;
