import React from 'react';
import type { Album } from '@/types/models';

interface AlbumListProps {
  albums: Album[];
}

const AlbumList: React.FC<AlbumListProps> = ({ albums }) => (
  <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {albums.map(album => (
      <div key={album.id} className="flex flex-col justify-between rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-shadow duration-200 ease-in-out hover:shadow-lg">
        <div>
          <h3 className="mb-2 text-lg font-semibold tracking-tight">{album.title}</h3>
          {album.description && (
            <p className="mb-4 text-sm text-muted-foreground">
              {album.description}
            </p>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          Created: {new Date(album.dateCreated).toLocaleDateString()}
        </p>
      </div>
    ))}
  </div>
);

export default AlbumList;
