import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import lockIcon from "../assets/lock.svg";
import { FaEye } from "react-icons/fa6";
import { GoEyeClosed } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Vault = () => {

    const [formData, setFormData] = useState({
        fullUrl: "",
        userName: "",
        password: "",
    });

    const [passwordsArray, setPasswordsArray] = useState([]);

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000");
        const passwords = await req.json();    
        setPasswordsArray(passwords)
        console.log(passwords);
        
    }
    

    //Load passwords from MongoDB Database on component mount
    useEffect(()=>{
        getPasswords();
        
    },[])

    //Save Password Function
    const savePassword = async () => {
        const newErrors = {};


            if(!formData.fullUrl.trim()){
                newErrors.fullUrl = "Website URL is required.";
            }
            if(!formData.userName.trim()){
                newErrors.userName = "Username is required.";
            }
            if(!formData.password.trim()){
                newErrors.password = "Password is required.";
            }
            
            if(Object.keys(newErrors).length > 0){
                setErrors(newErrors);
                return;
            }
        

        setPasswordsArray([...passwordsArray, {...formData, id: uuidv4()}]);
        let res = await fetch("http://localhost:3000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...formData, id: uuidv4()})
        });

        setFormData({
            fullUrl: "",
            userName: "",
            password: "",
        });
    }

    //Edit Credential Function
    const editCred = async (id) =>{
        console.log("Edit Credential with ID:", id);
        setFormData(passwordsArray.filter(item => item.id === id)[0]);
        setPasswordsArray(passwordsArray.filter(item => item.id !== id));
        let res = await fetch("http://localhost:3000", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        });
    }

    //Delete Credential Function
    const deleteCred = async (id) =>{
        let confirmation = confirm("Are you sure you want to delete this credential?");
        if(!confirmation) return;

        setPasswordsArray(passwordsArray.filter(item => item.id !== id));

        let res = await fetch("http://localhost:3000", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        });
    }

    //Password show Functioning
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const eyeClick = () =>{
        setShowPassword(!showPassword);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        // console.log(formData);

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
              [name]: "",
            }));
        }
    };

    const copyText = (text) => {
        navigator.clipboard.writeText(text)

        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    };  

  

  return (
    <>
        <ToastContainer/>

      <div className="absolute inset-0 -z-10 top-[11vh] h-[89vh] w-full overflow-hidden">
        {/* The Background */}
        <div className="absolute inset-0 -z-10  h-[89vh]  w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_60%,#15803d_100%)]"></div>

        {/* The Vault */}
        <div className="relative z-10 h-[89vh] flex flex-col items-center top-0 md:top-9">
          <div className="cont h-[89vh] md:h-[75vh] top-1 p-5 pt-0 md:pt-4 mx-auto bg-white md:bg-[#FDFAF6] max-w-7xl w-full rounded-lg shadow-[1px_1px_20px_15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row ">
            <div className="CONT1 h-[70vh]  text-white flex flex-col justify-start md:justify-center p-0 md:border-0 border-t border-slate-900 md:p-5 gap-5 max-w-3xl w-full">
              {/*WebApp Intro */}
              <div className="app-intro">
                <h1 className="mb-5 md:flex justify-center hidden text-center text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-slate-900">
                  Password Vault
                </h1>
                <p className="mx-auto flex text-center mt-4 md:mt-0 mb-0 md:mb-8 max-w-2xl text-sm text-slate-700">
                  Manage your passwords securely and efficiently with our
                  intuitive Password Manager. Store, organize, and access your
                  passwords with ease.
                </p>
              </div>

              {/* Full URL */}
              <div className="inputFullUrl relative">
                <input
                  type="text"
                  name="fullUrl"
                  id="fullUrl"
                  value={formData.fullUrl}
                  onChange={handleInputChange}
                  placeholder=""
                  className={`text-gray-950 peer w-full h-10 px-4 py-3  border rounded-lg focus:ring-2 focus:ring-green-900 focus:border-green-900      outline-none transition-colors ${
                    errors.fullUrl ? "border-red-500" : "border-gray-400"
                  }`}
                />

                <label
                  htmlFor="fullUrl"
                  className={`md:bg-[#FDFAF6] bg-white  absolute left-1 transition-all duration-300 text-[15px] transform        scale-100      px-1 py-0 pt-[1px]  peer-focus:text-[13px] peer-focus:text-green-800 peer-focus:-top-3    peer-focus:opacity-100       peer-focus:font-semibold                          
                                            ${
                                              formData.fullUrl
                                                ? "-top-3 text-[13px] font-semibold  text-green-700"
                                                : " top-2  text-gray-500 "
                                            }`}
                >
                  Enter Website URL
                </label>
                {errors.fullUrl && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullUrl}</p>
                )}
              </div>

              {/* Username and Password */}
              <div className="flex gap-3 relative">
                <div className="inputUsername relative">

                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder=""
                    className={`text-gray-950 peer  w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900    focus:border-green-900      outline-none transition-colors ${
                      errors.userName ? "border-red-500" : "border-gray-400"
                    }`}
                  />

                  <label
                    htmlFor="userName"
                    className={`md:bg-[#FDFAF6] bg-white  absolute left-1  transition-all duration-300 text-[15px]   transform        scale-100      px-1 py-0 pt-[1px] peer-focus:text-[13px] peer-focus:text-green-800 peer-focus:-top-3     peer-focus:opacity-100       peer-focus:font-semibold                          
                                    ${
                                      formData.userName
                                        ? "-top-3 text-[13px] font-semibold  text-green-700"
                                        : " top-2  text-gray-500 "
                                    }
                                `}
                  >
                    Enter Username
                  </label>

                  {errors.userName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.userName}
                    </p>
                  )}
                </div>
                <div className="inputPassword relative">
                    
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder=""
                    className={` peer text-gray-950 w-full h-10 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-900    focus:border-green-900      outline-none transition-colors ${
                      errors.password ? "border-red-500" : "border-gray-400"
                    }`}
                  />

                  <label
                    htmlFor="password"
                    className={`md:bg-[#FDFAF6] bg-white  absolute left-1 transition-all duration-300 text-[15px]   transform        scale-100      px-1 py-0 pt-[1px] peer-focus:text-[13px] peer-focus:text-green-800 peer-focus:-top-3     peer-focus:opacity-100       peer-focus:font-semibold                          
                                    ${
                                      formData.password
                                        ? "-top-3 text-[13px] font-semibold  text-green-700"
                                        : " top-2  text-gray-500 "
                                    }
                                `}
                  >
                    Enter Password
                  </label>

                    {showPassword ? <FaEye onClick={eyeClick} className={`text-xl text-gray-700 absolute right-2 top-[12px] cursor-pointer ${formData.password ? "flex" : "hidden"} md:hidden`} />
                    : <GoEyeClosed onClick={eyeClick} className={`text-xl text-gray-700 absolute right-2 top-[12px] cursor-pointer ${formData.password ? "flex" : "hidden"} md:hidden`}/>}

                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
                <button onClick={savePassword} className="savePasswordBtn h-10 w-60 text-xl bg-green-700 hover:bg-green-800 rounded text-white font-semibold hidden md:flex justify-center items-center gap-2">
                  <img className="size-6" src={lockIcon} alt="" /> Save
                </button>
              </div>
              <button onClick={savePassword} className="savePasswordBtn h-10 w-full text-xl bg-green-700 hover:bg-green-800 rounded text-white font-semibold md:hidden flex justify-center items-center gap-2">
                  <img className="size-6" src={lockIcon} alt="" /> Save
                </button>
            </div>
            <div className="CONT2 h-[65vh] pl-0 md:px-3 md:pl-8 md:mt-6 md:mx-4 w-full md:border-l-1 border-gray-400">
            
                {passwordsArray.length === 0 ? <p className="text-center text-lg md:text-2xl text-gray-600 h-full p-1 md:p-30 flex justify-center md:items-center items-start">No credentials saved yet.</p> :

                <div className="TheListOfCreds flex flex-col gap-3 overflow-scroll overflow-x-hidden h-[65vh]">
                    {passwordsArray.map((item, index)=>{
                        return (
                            <div key={index} className="singleCred p-4 mt-4 md:mt-0 md:mr-3 border border-green-800 rounded-2xl shadow bg-white flex justify-between items-center relative">
                                <div className="flex flex-col gap-3">
                                    <p className="font-semibold text-gray-800 flex items-center gap-2"><FaLink onClick={() => copyText(item.fullUrl)}  className="size-5"/>
                                      <a href={item.fullUrl} target="_blank" className="flex items-center gap-2">{item.fullUrl}</a>
                                    </p>
                                    <p className="text-sm text-gray-600 flex gap-3"><FaUserAlt onClick={() => copyText(item.userName)} className="size-4" /> {item.userName}</p>
                                    <p className="text-sm text-gray-600 flex gap-2"><TbLockPassword onClick={() => copyText(item.password)} className="size-5"/> {item.password}</p>
                                </div>
                                <div className="btns absolute right-3 top-3 flex gap-2">
                                    <button onClick={()=>{editCred(item.id)}} className="editBtn px-1 py-1 text-sm bg-green-600 hover:bg-green-700 text-white rounded"><BiEdit className="size-5 "/></button>
                                    <button onClick={()=>{deleteCred(item.id)}} className="deleteBtn px-1 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded"><MdDeleteOutline className="size-5 "/></button>
                                </div>
                            </div>
                        )
                    })}
                </div> 
                }   
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vault;
