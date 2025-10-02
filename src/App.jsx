import { useState } from "react";
import FormSide from "./Comps/FormSide";
import EmptyFormResult from "./Comps/EmptyFormResult";
import FilledFormResult from "./Comps/FilledFormResult";

export default function App() {
  const [mortgage, setMortgage] = useState({
    amount: 100,
    term: 1,
    rate: 0,
    type: 1,
  });

  const [formFilled, setFormFilled] = useState(false);

  function clearAll(e) {
    setMortgage({
      amount: 100,
      term: 1,
      rate: 0,
      type: 1,
    });

    setFormFilled(false);
  }

  function sendForm() {
    setFormFilled(true);
  }

  function handleInput(e) {
    const { name, value } = e.currentTarget;
    setMortgage((pS) => ({ ...pS, [name]: value === "" ? "" : Number(value) }));
  }

  return (
    <div className="flex max-w-[1000px] flex-col bg-white md:flex-row md:rounded-l-3xl md:rounded-r-3xl">
      <FormSide
        mortgage={mortgage}
        clearAll={clearAll}
        handleInput={handleInput}
        sendForm={sendForm}
        formFilled={formFilled}
      />
      {formFilled ? (
        <FilledFormResult mortgage={mortgage} />
      ) : (
        <EmptyFormResult />
      )}
    </div>
  );
}
