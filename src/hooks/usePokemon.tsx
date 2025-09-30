import { useEffect, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  imgUrl: string;
}

interface PokeProps {
  id: number;
}

export const usePokemon = ({ id }: PokeProps) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPokemonById = async (id: number) => {
    setIsLoading(true);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const capitalize = (str: string) =>
      str.charAt(0).toUpperCase() + str.slice(1);

    const data = await response.json();

    setPokemon({
      id: id,
      name: capitalize(data.name),
      imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  return {
    formattedId: id.toString().padStart(3, '0'),
    isLoading,
    pokemon,
  };
};
