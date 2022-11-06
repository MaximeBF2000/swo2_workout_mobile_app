import moment from 'moment'

export const DATE_FORMATS = {
  fullday: 'dddd',
  dateWithFullday: 'dddd DD/MM/YYYY',
  normalDate: 'DD/MM/YYYY'
}

export const now = () => moment()

export const isToday = date => moment(date).isSame(new Date(), 'days')
