import photo from "/illustration-empty.svg";

export default function EmptyFormResult() {
  return (
    <div className="bg-my-slate-900 flex flex-col gap-4 p-7 text-center text-white">
      <div className="flex justify-center">
        <img src={photo} alt="Calculator" className="w-45" />
      </div>
      <h2 className="text-xl font-semibold">Results shown here</h2>
      <p className="text-my-slate-500">
        Complete the form and click "calculate repayments' to see what your
        monthly repayments would be .
      </p>
    </div>
  );
}
