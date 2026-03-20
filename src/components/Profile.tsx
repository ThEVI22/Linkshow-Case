// import React removed for lint

interface ProfileProps {
  name: string;
  subtitle: string;
  avatarUrl: string;
}

export const Profile: React.FC<ProfileProps> = ({ name, subtitle, avatarUrl }) => {
  return (
    <div className="profile-container flex-col-center">
      <div className="avatar-wrapper">
        <img src={avatarUrl} alt={name} className="avatar-img" />
      </div>
      <h1 className="profile-name">{name}</h1>
      <p className="profile-subtitle">{subtitle}</p>
    </div>
  );
};
