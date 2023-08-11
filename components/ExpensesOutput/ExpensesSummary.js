import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

const colors = GlobalStyles.colors;

function ExpensesSummary({expenses, periodName}) {
    const expensesSum = expenses.reduce((sum, expense)=> {
        return sum + expense.amount
    }, 0);
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.primary50,
    borderRadius: 6,
  },
  period: {
    fontSize: 14,
    color: colors.primary400
  },
  sum:{
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary500,
  }


})
