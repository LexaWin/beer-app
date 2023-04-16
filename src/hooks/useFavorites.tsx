import { useContext, useEffect, useState } from 'react';
import { StorageCtx } from '../App';

export const useFavorites = (isOpen: boolean) => {
  const storage = useContext(StorageCtx);

  const [favoritesList, setFavoritesList] = useState<(string | null)[]>([]);

  useEffect(() => {
    if (!storage || !isOpen) return;

    storage
      .keys()
      .then(({ keys }) => Promise.all(keys.map((key) => storage.get({ key }))))
      .then((values) => setFavoritesList(values.map(({ value }) => value)));
  }, [isOpen]);

  return {
    favoritesList,
  };
};
