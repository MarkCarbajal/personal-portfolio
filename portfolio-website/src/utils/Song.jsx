import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { useLanyardWS } from 'use-lanyard';

const Song = () => {
  const discordUserId = '303852465248534532'; 
  const lanyardData = useLanyardWS(discordUserId);

  const getSpotifyInfo = () => {
    if (!lanyardData || !lanyardData.listening_to_spotify) return null;

    return {
      song: lanyardData.spotify.song,
      artist: lanyardData.spotify.artist,
    };
  };

  const spotifyInfo = getSpotifyInfo();

  return (
    <>
      {spotifyInfo ? (
        <div className="spotify-song">
          <FontAwesomeIcon icon={faSpotify} size="2x" />
          <div className="song-info">
            <h4>{spotifyInfo.song}</h4>
            <p>{spotifyInfo.artist}</p>
          </div>
        </div>
      ) : (
        <p>User is not listening to Spotify.</p>
      )}
    </>
  );
};

export default Song;
