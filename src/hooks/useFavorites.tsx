import { useContext, useEffect, useState } from 'react';
import { StorageCtx } from '../App';

export const useFavorites = (isOpen: boolean) => {
  const storage = useContext(StorageCtx);

  const [favoritesList, setFavoritesList] = useState<string[]>([]);

  useEffect(() => {
    if (!storage || !isOpen) return;

    const list: string[] = [];

    storage
      .forEach((value) => {
        list.push(value);
      })
      .then(() => {
        setFavoritesList([...list]);
      });
  });

  return {
    favoritesList,
  };
};
