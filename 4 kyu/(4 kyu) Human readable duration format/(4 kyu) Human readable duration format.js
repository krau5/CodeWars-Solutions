const template = (unit, amount) => `${amount} ${unit}${amount > 1 ? 's' : ''}`;

const duration = { year: 31536000, day: 86400, hour: 3600, minute: 60 };

const getYears = (seconds) => Math.floor(seconds / duration.year);
const getDays = (seconds) => Math.floor(seconds / duration.day);
const getHours = (seconds) => Math.floor(seconds / duration.hour);
const getMinutes = (seconds) => Math.floor(seconds / duration.minute);
const getSeconds = (seconds, amount, duration) => seconds - amount * duration;

const processDuration = (seconds) => {
  const years = getYears(seconds);
  seconds = getSeconds(seconds, years, duration.year);
  const days = getDays(seconds);
  seconds = getSeconds(seconds, days, duration.day);
  const hours = getHours(seconds);
  seconds = getSeconds(seconds, hours, duration.hour);
  const minutes = getMinutes(seconds);
  seconds = getSeconds(seconds, minutes, duration.minute);

  return { years, days, hours, minutes, seconds };
}

const formatDuration = (rawSeconds) => {
  const { years, days, hours, minutes, seconds } = processDuration(rawSeconds);
  const results = [];

  years && results.push(template('year', years));
  days && results.push(template('day', days));
  hours && results.push(template('hour', hours));
  minutes && results.push(template('minute', minutes));
  seconds && results.push(template('second', seconds));

  if (results.length >= 3) return `${results.slice(0, -1).join(', ')} and ${results.slice(-1)}`;
  if (results.length === 2) return results.join(' and ');
  return results[0] || 'now';
};
