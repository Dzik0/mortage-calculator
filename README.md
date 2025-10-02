Here is the completed README.md content with your details filled in:

---

# Mortgage Calculator React App

This is a mortgage calculator web application built with React. It allows users to calculate monthly mortgage repayments, total repayment amounts, and total interest over the term for two types of mortgages: **Repayment** and **Interest Only**.

## Features

- Enter mortgage amount, term (years), interest rate, and mortgage type.
- Supports two mortgage types:
  - **Repayment** — monthly payments including principal and interest
  - **Interest Only** — monthly payments of interest only, principal paid at term end
- Calculates monthly repayments for repayment mortgage type.
- Calculates total interest payable for interest-only mortgage type.
- Calculates total repayment amount over the mortgage term.
- Clear all inputs and recalculate dynamically.
- Responsive UI styled with Tailwind CSS.
- Accessible forms with labeled inputs and keyboard navigation.
- Shows dynamic results in a separate result panel.

## Usage

Clone the repository and install dependencies:

```bash
git clone https://github.com/Dzik0/mortgage-calculator.git
cd mortgage-calculator
npm install
npm start
```

Open the app in the browser (usually `http://localhost:3000`).

---

## Code Structure

- `App.js` — Main app component managing mortgage form state and conditionally rendering form or results.
- `FormSide.js` — Form component for user inputs including amount, term, rate, type, and buttons.
- `FilledFormResult.js` — Component displaying computed mortgage repayment results.
- Icons imported (e.g., calculator icon) for UI enhancement.

---

## Calculation Logic

Typical mortgage calculations are implemented including:

- **Repayment mortgage** monthly payment calculated using annuity formula:

$$
P = \frac{rL}{1 - (1+r)^{-n}}
$$

where $$P$$ is monthly payment, $$r$$ is monthly interest rate, $$L$$ is loan amount, and $$n$$ is number of months.

- **Interest Only** total interest and repayments calculated as:

$$
\text{Total Interest} = L \times r \times n
$$

- Total repayment sums principal plus total interest.

---

## Preview

![App Preview]( Future Improvements

- Add validation and error handling for inputs.
- Support additional mortgage types or custom terms.
- Improve number input formatting with thousand separators.
- Add unit and integration tests.
- Deploy with CI/CD pipeline.

---

## License

MIT License © Dzik0

---
