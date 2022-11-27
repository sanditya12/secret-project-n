import Profile from "./Profile";
import ProfileLocked from "./ProfileLocked";

const ProfileRow = () => {
  return (
    <div className="flex justify-center space-x-12">
      <ProfileLocked />
      <Profile avatar="/PLACEHOLDERS/san.jpeg" username="San" />
      <Profile avatar="/PLACEHOLDERS/sha.jpeg" username="Sha" />
    </div>
  );
};
export default ProfileRow;
