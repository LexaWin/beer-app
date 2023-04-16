import { useContext, useEffect, useState } from 'react';
import { StorageCtx } from '../App';

export const useFavorite = (id: number, name: string) => {
  const storage = useContext(StorageCtx);

  const [isFavorite, setFavorite] = useState(false);
  const [buttonState, setButtonState] = useState('active');

  useEffect(() => {
    (async () => {
      if (!storage) return;

      storage.get({ key: `${id}` }).then(({ value }) => {
        if (value !== null) {
          setFavorite(true);
        }
      });
    })();
  }, []);

  const addToStorage = (id: number, name: string) => {
    if (!storage) return;

    setButtonState('disabled');

    storage.set({ key: `${id}`, value: name }).then(() => {
      setFavorite(true);
      setButtonState('active');
    });
  };

  const removeFromStorage = (id: number) => {
    if (!storage) return;

    setButtonState('disabled');

    storage.remove({ key: `${id}` }).then(() => {
      setFavorite(false);
      setButtonState('active');
    });
  };

  const handleClick = () => {
    if (isFavorite) {
      removeFromStorage(id);
    } else {
      addToStorage(id, name);
    }
  };

  return {
    isFavorite,
    buttonState,
    handleClick,
  };
};
