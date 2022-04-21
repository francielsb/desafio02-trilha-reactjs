import { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<SetStateAction<number>>;  
}

export function SideBar(props: SideBarProps) {
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  // Complete aqui
  return (
    <>
      <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {props.genres.map(genre => (
              <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={props.selectedGenreId === genre.id}
              />
            ))}
          </div>

        </nav>
    </> 
  );
}