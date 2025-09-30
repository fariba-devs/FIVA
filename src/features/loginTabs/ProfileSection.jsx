import { useUser } from "./useUser.jsx";
import Loading from "../../components/ui/Loading.jsx";
import { useSignOut } from "./useSignOut.jsx";

const ProfileSection = () => {
  const { user } = useUser();
  const { logout, isLoading: isLoggingOut } = useSignOut();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
  };

  if (isLoggingOut) return <Loading />;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="text-primary">{user.email}</div>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Account Created
        </label>
        <div className="text-primary">
          {new Date(user.created_at).toLocaleDateString()}
        </div>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Last Sign In
        </label>
        <div className="text-primary">
          {user.last_sign_in_at
            ? new Date(user.last_sign_in_at).toLocaleString()
            : "N/A"}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-light-dark text-white py-3 px-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 font-medium"
      >
        Sign Out
      </button>
    </form>
  );
};

export default ProfileSection;
