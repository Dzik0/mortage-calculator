import calc from "/icon-calculator.svg";

export default function FormSide({
  handleInput,
  mortgage,
  clearAll,
  sendForm,
}) {
  return (
    <div className="bg-white p-4 py-5 pb-10 md:basis-1/2 md:rounded-l-2xl">
      <div className="mb-7 flex flex-col items-start gap-1">
        <h1 className="text-xl font-semibold">Mortgage Calculator</h1>
        <button
          className="text-my-slate-500 underline underline-offset-3"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      <label htmlFor="amount" className="text-my-slate-700">
        Mortgage Amount
      </label>
      <div className="border-my-slate-500 mt-2 mb-6 flex overflow-hidden rounded-md border">
        <div className="bg-my-slate-100 text-my-slate-700 grid place-items-center p-2 px-4 text-xl font-semibold">
          &#163;
        </div>
        <input
          type="number"
          min={1}
          name="amount"
          className="b text-my-slate-900 h-full w-full p-3 text-xl font-bold"
          id="amount"
          placeholder="300 000"
          onChange={handleInput}
          value={mortgage.amount}
        />
      </div>
      <div className="md:flex md:flex-row md:gap-4">
        <div className="basis-1/2">
          <label htmlFor="term" className="text-my-slate-700">
            Mortgage Term
          </label>
          <div className="border-my-slate-500 mt-2 mb-6 flex overflow-hidden rounded-md border">
            <input
              type="number"
              min={1}
              name="term"
              className="b text-my-slate-900 h-full w-full p-3 text-xl font-bold"
              id="term"
              placeholder="5"
              onChange={handleInput}
              value={mortgage.term}
            />
            <div className="bg-my-slate-100 text-my-slate-700 grid place-items-center p-2 px-4 text-xl font-semibold">
              years
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <label htmlFor="rate" className="text-my-slate-700">
            Interest Rate
          </label>
          <div className="border-my-slate-500 mt-2 mb-6 flex overflow-hidden rounded-md border">
            <input
              type="number"
              min={0}
              name="rate"
              className="b text-my-slate-900 h-full w-full p-3 text-xl font-bold"
              id="rate"
              placeholder="5.25"
              onChange={handleInput}
              value={mortgage.rate}
            />
            <div className="bg-my-slate-100 text-my-slate-700 grid place-items-center p-2 px-4 text-xl font-semibold">
              %
            </div>
          </div>
        </div>
      </div>
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-2">Mortgage Type</legend>
        <div className="border-my-slate-300 flex items-center rounded-md border p-3">
          <input
            type="radio"
            name="type"
            id="type"
            className="mr-3 h-5 w-5"
            value="1"
            onChange={handleInput}
            defaultChecked
          />

          <label
            htmlFor="type"
            className="border-my-slate-300 text-my-slate-900 font-bold"
          >
            Repayment
          </label>
        </div>
        <div className="border-my-slate-300 flex items-center rounded-md border p-3">
          <input
            type="radio"
            name="type"
            id="type"
            className="z-0 mr-3 h-5 w-5"
            value="2"
            onChange={handleInput}
          />

          <label
            htmlFor="type"
            className="border-my-slate-300 text-my-slate-900 font-bold"
          >
            Interest Only
          </label>
        </div>
      </fieldset>
      <button
        className="bg-my-lime mt-6 flex w-full justify-center gap-3 rounded-4xl p-4 font-bold"
        onClick={sendForm}
      >
        <img src={calc} alt="" />
        Calculate Repayments
      </button>
    </div>
  );
}
