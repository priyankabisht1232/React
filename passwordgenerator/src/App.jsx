import { useState, useCallback,useEffect ,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  //useRef hook
  const PasswordRef =useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDFGHHGFDGFFRFHGF";
    if (number) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-+=[](){}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, number, charAllowed,setpassword])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(Password)
    PasswordRef.current?.select()
    
    
  }


  useEffect(()=>{
    passwordGenerator()
  }, [length, number, charAllowed])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={PasswordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <lable>Length :{length}</lable>

            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={number}
                id="numberInput"
                onChange={(e) => {
                  setnumber((prev) => !prev);
                }}
              />
              <lable htmlFor="numberInput">Numbers</lable>

              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id="charInput"
                  onChange={(e) => {
                    setcharAllowed((prev) => !prev);
                  }}
                />
                <lable htmlFor="CharInput">Character</lable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
