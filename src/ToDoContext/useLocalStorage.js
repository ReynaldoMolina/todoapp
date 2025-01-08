import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItems);
          setItem(parsedItem);
        }
        setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  }

  return {item, saveItem, loading, error};
}

export { useLocalStorage };

// const defaultToDos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cocinar', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Barrer la casa', completed: false },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Visitar a la Jahaira', completed: true },
//   { text: 'Mimir', completed: false },
//   { text: 'Volver a visitar a la Jahaira', completed: true },
//   { text: 'Beber pastilla', completed: false }
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));

// localStorage.removeItem('TODOS_V1');