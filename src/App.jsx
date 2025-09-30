import { useState } from "react";
import FormSide from "./Comps/FormSide";
import EmptyFormResult from "./Comps/EmptyFormResult";
import FilledFormResult from "./Comps/FilledFormResult";

export default function App() {
  const [mortgage, setMortgage] = useState({
    amount: "",
    term: "",
    rate: "",
    type: 1,
  });
  const [formFilled, setFormFilled] = useState(false);

  function handleMortgage(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setMortgage(data);
    setFormFilled(true);
  }

  function clearAll(e) {
    setFormFilled(false);
  }

  return (
    <div>
      <FormSide
        handleMortgage={handleMortgage}
        mortgage={mortgage}
        clearAll={clearAll}
      />
      {formFilled ? (
        <FilledFormResult mortgage={mortgage} />
      ) : (
        <EmptyFormResult />
      )}
    </div>
  );
}
