export default function FilledFormResult({ mortgage }) {
  function calculateMonthlyRepayment(mortgage) {
    // Only works for 'Repayment' type
    // For "Interest Only", just returns monthly interest
    const principal = Number(mortgage.amount);
    const years = Number(mortgage.term);
    const interestRate = Number(mortgage.rate);
    const type = mortgage.type;

    const months = years * 12;
    const monthlyInterest = interestRate / 100 / 12;

    if (type === 2) {
      // Interest Only: only pay monthly interest on principal
      const totalInterest = principal * monthlyInterest * months;
      return totalInterest.toFixed(2); // whole interest amount
    }

    if (monthlyInterest === 0 || "") {
      // Zero interest: equal principal payments
      return (principal / months).toFixed(2);
    }
    // Repayment: standard annuity formula
    const payment =
      (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    return payment.toFixed(2);
  }

  function calculateTotalRepayment(mortgage) {
    const principal = Number(mortgage.amount || 0);
    const years = Number(mortgage.term || 0);
    const interestRate = Number(mortgage.rate || 0);
    const type = Number(mortgage.type);

    const months = years * 12;
    const monthlyInterest = interestRate / 100 / 12;

    if (type === 2) {
      // Interest Only: total repayment = principal + total interest
      const totalInterest = principal * monthlyInterest * months;
      return (principal + totalInterest).toFixed(2);
    }

    if (monthlyInterest === 0) {
      return principal.toFixed(2);
    }

    const monthlyPayment =
      (principal * monthlyInterest * Math.pow(1 + monthlyInterest, months)) /
      (Math.pow(1 + monthlyInterest, months) - 1);

    return (monthlyPayment * months).toFixed(2);
  }

  const reypaments = calculateMonthlyRepayment(mortgage);
  const totalMoney = calculateTotalRepayment(mortgage);

  return (
    <div className="bg-my-slate-900 flex flex-col gap-4 p-6 text-white md:basis-1/2 md:gap-10 md:rounded-r-3xl md:rounded-bl-[4rem] md:pt-20">
      <h2 className="text-xl font-semibold">Your results</h2>
      <p className="text-my-slate-500">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form.
      </p>
      {mortgage.type === 1 ? (
        <div className="bg-my-slate-max overflow-hidden rounded-xl">
          <div className="border-my-lime border-t-4"></div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-4">
              <p className="text-my-slate-500">Your monthly repayments</p>
              <p className="text-my-lime text-4xl font-bold">
                {reypaments === "Infinity" || reypaments === "NaN" ? (
                  "Fill the gaps"
                ) : (
                  <span>
                    {" "}
                    <span className="mr-2">&#163;</span> {reypaments}
                  </span>
                )}
              </p>
            </div>
            <div className="border-my-slate-700 border-b"></div>
            <div className="flex flex-col gap-4">
              <p className="text-my-slate-500">
                Total you'll repay over the term
              </p>
              <p className="text-my-white text-2xl font-bold">
                {totalMoney === "NaN" ? (
                  "Fill the gaps"
                ) : (
                  <span>
                    <span className="mr-2">&#163;</span> {totalMoney}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-my-slate-max overflow-hidden rounded-xl">
          <div className="border-my-lime border-t-4"></div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex flex-col gap-4">
              <p className="text-my-slate-500">Total interest over the term:</p>
              <p className="text-my-lime text-4xl font-bold">
                {reypaments === "Infinity" ? (
                  "Fill the gaps"
                ) : (
                  <span>
                    {" "}
                    <span className="mr-2">&#163;</span> {reypaments}
                  </span>
                )}
              </p>
            </div>
            <div className="border-my-slate-700 border-b"></div>
          </div>
        </div>
      )}
    </div>
  );
}
