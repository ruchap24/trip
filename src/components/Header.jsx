import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { Dialog } from "@headlessui/react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app, db } from "../firebase";

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
   const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate()
     const [openDialog, setOpenDialog] = useState(false);

  useEffect(()=>{
    console.log(user)
  }, [])

const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const signOut = () => {
   localStorage.removeItem("user")
   navigate("/")
   
  };

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      // Create user object with necessary details
      const user = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      };

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user));

       setOpenDialog(false);
       setDropdownOpen(false);
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };


  const onRegister = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
  }
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
       <Link to="/">
      <img src="logo.svg" alt="Logo" />
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-5 relative">
              <Link to="/create-trip">
            <button className="bg-slate-700 text-white p-3 rounded-full hover:opacity-95 disabled:opacity-80">
             +  Create Trip
            </button>
            </Link>
             <Link to="/trips">
            <button className="bg-slate-700 text-white p-3 rounded-full hover:opacity-95 disabled:opacity-80">
              My Trips
            </button>
            </Link>
            <div className="relative">
              <img
                className="rounded-full h-10 w-10 object-cover cursor-pointer"
                src={user.photo}
                alt="profile"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
                  <ul className="text-gray-700">
                   
                     <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={signOut}
                    >
                      Sign Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button  onClick={onRegister} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Sign In
          </button>
        )}
      </div>
       <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        className="relative z-5"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
            <Dialog.Title className="text-xl font-medium mb-4">
              <img src="/logo.svg" />
            </Dialog.Title>

            <p>Sign in to the App with Google authentication securely </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleGoogleClick}
                className="w-full px-4 py-3 rounded-md text-white bg-slate-700 hover:opacity-95 disabled:opacity-80"
              >
                Sign in with Google
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
    
  );
}