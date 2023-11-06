"use client"
const Header = () => {
  return (
    <header className="fixed w-screen top-0 left-0 z-50 bg-white flex justify-between items-center">
      <div className=" flex flex-1 py-3 pl-5">
        <div className=" bg-black h-6 aspect-square flex justify-center items-center mr-2">
          <div className=" bg-white h-4 w-4 rounded-full">

          </div>
        </div>
        <h1 className=" font-semibold text-black" style={{fontSize: "18px", lineHeight: "24px"}}>WIX <span className=" font-light">STUDIO</span></h1>
      </div>
      <div className=" flex items-center">
        <button onClick={() => console.log("Log In")} type="button" className=" px-5 text-sm font-light underline">
          Log In
        </button>
        <div className=" bg-black text-white h-12 aspect-square flex justify-center items-center">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  )
}

export default Header