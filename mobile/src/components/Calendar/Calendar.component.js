import tw from 'twrnc'
import moment from 'moment'
import { Calendar as RNCalendar } from 'react-native-calendars'

export const Calendar = ({ onDayPress }) => {
  return (
    <RNCalendar
      style={tw`p-0`}
      initialDate={moment().format('YYYY-MM-DD')}
      monthFormat={'MMMM yyyy'}
      onDayPress={onDayPress}
      onDayLongPress={day => console.log('selected day', day)}
      onMonthChange={month => console.log('month changed', month)}
      // hideArrows={true}
      hideExtraDays={true}
      firstDay={1}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableAllTouchEventsForDisabledDays={true}
      enableSwipeMonths={true}
      markedDates={{
        '2022-10-17': { marked: true },
        '2022-10-19': { marked: true },
        '2022-10-23': { marked: true }
      }}
    />
  )
}
