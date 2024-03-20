import BG_DP from "../../assets/bg1.png";
// import MSG_BG from "../../assets/home_textbg.png";

export const Base = () => {
  return (
    <main className="mr-5 flex ">
      <img
        src={BG_DP}
        className="bg-image absolute top-0  w-full bg-cover z-[-99]"
        alt="bg-main"
      />
      <section className="text-bg-red  absolute  top-0 text-white space-y-10  flex flex-col  h-[100vh] justify-center items-center px-[150px] mt-[60px]">
        {/* py-[253px] */}

        <h1 className="text-[50px] base font-bold   text-center ">
          <mark >
            Welcome to MARVELOUS{" "}
          </mark>
        </h1>
        <h1 className="text-[35px] base font-bold   text-center ">
          <mark>
            Your Comprehensive Resource for All MCU Knowledge - From Character
            Bios to Movie Details{" "}
          </mark>
        </h1>
        {/* <p className="text-[38px] font-bold  w-[500px] ">
         <span className="text-white"> Deadpool here</span>, ready to show you the MCU like never before. Get ready
          for a wild ride!
        </p> */}
      </section>
    </main>
  );
};
