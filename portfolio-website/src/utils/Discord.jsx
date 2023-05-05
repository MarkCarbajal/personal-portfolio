import React from 'react';
import { useLanyard } from 'use-lanyard';
import '../assets/css/discord.css';

const Discord = () => {
  const { data: discordData } = useLanyard('303852465248534532');

  const status = discordData?.discord_status;
  const username = discordData?.discord_user?.username;
  const discriminator = discordData?.discord_user?.discriminator;
  const avatar = discordData?.discord_user?.avatar;
  const userId = discordData?.discord_user?.id;

  const avatarUrl = avatar
    ? `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${discriminator % 5}.png`;

  let statusClass = 'offline';
  if (status === 'online') {
    statusClass = 'online';
  } else if (status === 'idle') {
    statusClass = 'away';
  } else if (status === 'dnd') {
    statusClass = 'busy';
  }

  return (
    <div className="discord-container">
      <div className="avatar-container">
        <img className="avatar" src={avatarUrl} alt="Discord avatar" />
        <div className={`status-light ${statusClass}`}></div>
      </div>
      <div className="discord-info">
        <h2 className="discord-username">{username}</h2>
        <span className="discord-discriminator">#{discriminator}</span>
      </div>
    </div>
  );
};

export default Discord;
