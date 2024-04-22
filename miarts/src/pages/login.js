import React, { useState } from 'react';

const LoginForm = () => {
  // Utilisation de useState pour gérer l'état du formulaire
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Fonction de gestion des changements de champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    // Mise à jour de l'état du formulaire en utilisant la fonction de mise à jour

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez des actions avec les données du formulaire (par exemple, envoyez à un backend)
    console.log('Formulaire soumis avec les données :', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom dutilisateur
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mot de passe:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default LoginForm;
