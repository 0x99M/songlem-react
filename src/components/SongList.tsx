import React from 'react';
import type { Song } from '@/types/models';

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => (
  <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
    <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {songs.map(song => (
        <div key={song.id} className="group relative flex flex-col rounded-xl border bg-card p-3 sm:p-4 lg:p-5 text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:bg-muted/50 hover:scale-[1.02]">
          <div className="flex-1 space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight line-clamp-2 leading-tight">
              {song.title}
            </h3>
            {song.description && (
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 sm:line-clamp-3" title={song.description}>
                {song.description}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-border/50">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              <span className="hidden sm:inline">Released: </span>
              <span className="sm:hidden">
                {new Date(song.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: '2-digit'
                })}
              </span>
              <span className="hidden sm:inline">
                {new Date(song.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </p>

            <a
              href={song.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover:bg-primary/20"
              aria-label={`Play ${song.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ml-0.5"
              >
                <path d="m6 3 14 9-14 9V3z" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SongList;