import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { getExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function RecentExpensesScreen() {
  const [isFethcing, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses(){
      setIsFetching(true);
      try {
        const expenses = await getExpenses();
        expensesCtx.setExpenses(expenses);
      } catch(err){
        setError('Could not fetch expenses!')
      }
      setIsFetching(false);
    }

    fetchExpenses();
  }, [])


  if (isFethcing) {
    return <LoadingOverlay />
  }

  if (error && !isFethcing) {
    return <ErrorOverlay message={error} />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallBackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpensesScreen;
