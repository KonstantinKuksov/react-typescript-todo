import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        consectetur in eum eveniet ducimus repudiandae quo quae a et facere.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Назад к списку дел
      </button>
    </>
  );
};

export default AboutPage;
