export default function FilledFormResult({ mortgage }) {
  console.log(mortgage);
  return (
    <div className="bg-my-slate-900 flex flex-col gap-4 p-6 text-white md:basis-1/2 md:gap-10 md:rounded-r-3xl md:rounded-bl-[4rem] md:pt-20">
      <h2 className="text-xl font-semibold">Your results</h2>
      <p className="text-my-slate-500">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click 'calculate repayments'
        again.
      </p>
      <div className="bg-my-slate-max overflow-hidden rounded-xl">
        <div className="border-my-lime border-t-4"></div>
        <div className="flex flex-col gap-4 p-5">
          <div className="flex flex-col gap-4">
            <p className="text-my-slate-500">Your monthly repayments</p>
            <p className="text-my-lime text-4xl font-bold">$1,797.74</p>
          </div>
          <div className="border-my-slate-700 border-b"></div>
          <div className="flex flex-col gap-4">
            <p className="text-my-slate-500">
              Total you'll repay over the term
            </p>
            <p className="text-my-white text-2xl font-bold">$536,322.94</p>
          </div>
        </div>
      </div>
    </div>
  );
}
