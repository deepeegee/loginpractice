import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../../lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/");
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <>
          <p className="mt-4">Welcome, {user.displayName || user.email}!</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="mt-4">Not logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
