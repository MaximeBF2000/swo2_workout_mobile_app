import tw from 'twrnc'
import moment from 'moment'
import { get, includes, reduce } from 'lodash'
import { Calendar as RNCalendar } from 'react-native-calendars'
import { apiUris, useAxiosSWR } from '../../features/apiClient'
import { useStore } from '../../features/store'

export const Calendar = ({ onDayPress }) => {
  const { user } = useStore()
  const { data } = useAxiosSWR(apiUris.seriesDates(get(user, 'id')))
  const dates = get(data, 'dates')

  const markedDates = reduce(
    dates,
    (acc, date) => ({ ...acc, [date]: { marked: true } }),
    {}
  )

  const handleDayPress = date => {
    if (includes(dates, get(date, 'dateString'))) onDayPress(date)
  }

  return (
    <RNCalendar
      style={tw`p-0`}
      initialDate={moment().format('YYYY-MM-DD')}
      monthFormat={'MMMM yyyy'}
      onDayPress={handleDayPress}
      // onDayLongPress={day => console.log('selected day', day)}
      // onMonthChange={month => console.log('month changed', month)}
      hideExtraDays={true}
      firstDay={1}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
      disableAllTouchEventsForDisabledDays={true}
      enableSwipeMonths={true}
      markedDates={markedDates}
      // hideArrows={true}
    />
  )
}
