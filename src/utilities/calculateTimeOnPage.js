// import store from '../state';
import getCumulativeDuration from "./getCumulativeDuration";
import millisecondsToTime from "./millisecondsToTime";
import getCurrentDateTime from "./getCurrentDateTime";

const calculateTimeOnPage = (startTime, prefix, prefix2) => {
  const identifier = `cumulative${prefix}Duration`;
  // const identifier2 = `set${prefix2}DurationCumulative`;
  const identifier3 = `timeOn${prefix2}(s)`;
  const identifier4 = `lastAccess${prefix2}`;

  // const durationCumulative = store.getState()[identifier];
  const durationCumulative = localStorage.getItem(identifier) || 0;

  const newDurationCumulative = getCumulativeDuration(
    startTime,
    +durationCumulative
  );
  // send to state
  localStorage.setItem(identifier, newDurationCumulative);

  // send last access time to state
  const dateString = getCurrentDateTime();
  localStorage.setItem(identifier4, dateString);

  // send to memory
  const formattedDuration = millisecondsToTime(newDurationCumulative);
  localStorage.setItem(identifier3, formattedDuration);
};

export default calculateTimeOnPage;
