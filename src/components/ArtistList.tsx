import React from 'react';
import type { Artist } from '@/types/models';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => (
  <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
    <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {artists.map(artist => (
        <div key={artist.id} className="group flex items-center justify-center rounded-xl border bg-card p-4 sm:p-6 text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted/50 hover:scale-[1.05]">
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-center">
            {`${artist.firstName} ${artist.lastName}`}
          </h3>
        </div>
      ))}
    </div>
  </div>
);

export default ArtistList;