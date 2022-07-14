import React, { useEffect } from "react";
import { BsApple, BsGoogle } from "react-icons/bs";
import GoogleLogin from "react-google-login";
import Image from "next/image";
import { auth, db, signInWithGoogle } from "../Firebase/Firebase";
import { useRouter } from "next/router";
import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";

const Welcome = () => {
  const history = useRouter();
  const responseGoogle = (response) => {
    console.log(response);
  };
  useEffect(() => {
    const getData = async () => {
      // const q = query(collection(db, "users"));
      // const querySnapshot = await getDocs(q);
      // querySnapshot?.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // });
      const user = auth.currentUser;
      const docRef = doc(db, "users", user?.uid ?? "1");
      0;
      setDoc(docRef, {
        name: user?.displayName,
        phone: user?.phoneNumber,
        pic: user?.photoURL,
      })
        .then((docRef) => {
          console.log("Entire Document has been updated successfully");
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, [auth.currentUser]);

  // set(ref(db, "users"), {
  //   ...auth.currentUser,
  // })
  //   .then((res) => {
  //     // Data saved successfully!
  //     console.log(res);
  //   })
  //   .catch((error) => {
  //     // The write failed...
  //     console.log(error);
  //   });

  return (
    <div>
      <div className="w-full px-5 flex justify-center items-center h-[89vh]">
        <div className="w-[80%] h-full flex items-center">
          <div className=" flex flex-col gap-4 items-start px-10 justify-center h-full w-[50%]">
            <div className=" font-serif font-[600] text-[32px]">
              Welcome to Binance
            </div>
            <div className="text-[14px] w-[350px]  font-serif mb-4 font-[500] text-black/60 ">
              By creating an account you agree to our{" "}
              <span className="text-[12px] cursor-pointer text-yellow-600">
                Terms and Conditions
              </span>{" "}
              and
              <span className="text-[12px] cursor-pointer text-yellow-600">
                {" "}
                Data Protection Guidelines.
              </span>
            </div>

            <button className="w-[350px] text-[16px] rounded-md bg-slate-200 h-[50px]">
              {" "}
              Sign up with phone or Email
            </button>
            <div className="flex justify-between items-center w-[350px]">
              <div className="h-[1px] w-[40%] bg-black/60"></div>
              <div className="text-[20px] flex-shrink-0 text-black/60 w-[10%]">
                Or
              </div>
              <div className="h-[1px] w-[43%] bg-black/60"></div>
            </div>
            <button
              onClick={async () => {
                let data = await signInWithGoogle();
                console.log(data?.user);

                history.push("/");
              }}
              className="w-[350px] text-[16px] rounded-md text-white bg-black flex justify-center items-center gap-2 h-[50px]"
            >
              <BsApple size={20} /> Countinue with Apple{" "}
            </button>
            <GoogleLogin
              clientId="409158068741-pnn93003l21qlesa4p3r9p20acofffod.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="w-[350px] text-[16px] rounded-md  border-[1px] bg-white flex justify-center items-center gap-2 h-[50px]"
                >
                  <BsGoogle size={20} /> Countinue with Google{" "}
                </button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />

            <div className="text-[16px] w-[350px]  font-serif mb-4 font-[600] text-black/60 ">
              Already registered?{" "}
              <span className="text-[16px] cursor-pointer text-yellow-600">
                Log In
              </span>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-5 items-center justify-center">
            <div className="w-full h-[300px] relative">
              <Image
                src={require("../../public/image/register.png")}
                alt="register"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-[28px] font-serif font-semibold">
              Buy Crypto in Minutes
            </div>
            <div className="text-[16px] w-[80%] text-center font-serif text-black/60">
              Enjoy the world’s largest cryptocurrency exchange at your
              fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
