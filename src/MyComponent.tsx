import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MyComponent: React.FC = () => {
  const [responseBody, setResponseBody] = useState<string>('');
  const requestBody = {
    action_name: 'add_category',
    payload: {
      name: 'Вкусняшки',
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://functions.yandexcloud.net/d4ev2sbriqado7skklb1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      const data = await response.json();
      setResponseBody(JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Button onClick={fetchData}>Отправить запрос</Button>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Ответ от сервера"
        readOnly
        value={responseBody}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
};

export default MyComponent;

