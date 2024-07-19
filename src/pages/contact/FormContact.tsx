import { ButtonLarge } from "../../components/buttons/ButtonLarge";

export const FormContact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10 ">
      <h1 className="text-xl text-text">Ask us anything here</h1>
      <form className="flex flex-col items-center md:items-start gap-6 mt-4">
        <div className="w-[1000px] gap-4 flex flex-col md:flex-row items-center justify-between">
          <input
            className="bg-slate-100 rounded-full px-4 py-2 w-[350px] md:w-[50%] focus:outline-none  focus:ring-1 focus:ring-orange"
            type="text"
            placeholder="Name *"
          />
          <input
            className="bg-slate-100 rounded-full px-4 py-2 w-[350px] md:w-[50%] focus:outline-none  focus:ring-1 focus:ring-orange"
            type="text"
            placeholder="Email *"
          ></input>
        </div>
        <input
          className="bg-slate-100 rounded-full px-4 py-2 w-[350px] md:w-full focus:outline-none  focus:ring-1 focus:ring-orange "
          type="text"
          placeholder="Subject *"
        ></input>
        <textarea
          className="bg-slate-100 rounded-xl h-[150px] md:h-[200px] w-[350px] md:w-full px-4 py-2 focus:outline-none  focus:ring-1 focus:ring-orange"
          placeholder="Message *"
          name="message"
          id="message"
        ></textarea>
      </form>
      <div className=" p-10">
        <ButtonLarge text="Send message" />
      </div>
    </div>
  );
};
