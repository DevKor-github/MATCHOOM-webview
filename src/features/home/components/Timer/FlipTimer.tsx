import { useMemo, useEffect } from 'react';
import TimerItem from './TimerItem';
import { useClockDigit } from './hooks';
import { flipclockStyle } from './styled';

const dynamicStyle = document.createElement('style');
dynamicStyle.type = 'text/css';

const FlipTimer = ({
  dark,
  seconds,
  fontSize,
}: {
  dark?: boolean;
  seconds: number;
  fontSize?: number;
}) => {
  const duration = useMemo(
    () =>
      seconds > 24 * 60 * 60 ? 'days' : seconds > 3600 ? 'hours' : 'seconds',
    [seconds],
  );

  useEffect(() => {
    const head = document.querySelector('head') as HTMLHeadElement;
    dynamicStyle.innerHTML = flipclockStyle({
      fontSize,
      dark,
    });
    head.append(dynamicStyle);
    return () => {
      dynamicStyle.remove();
    };
  }, []);

  const {
    day1TranslateY,
    day2TranslateY,
    day3TranslateY,
    hour1TranslateY,
    hour2TranslateY,
    minute1TranslateY,
    minute2TranslateY,
    second1TranslateY,
    second2TranslateY,
  } = useClockDigit({ seconds, duration });

  return (
    <div className='react-simple-flipclock'>
      {duration === 'days' && (
        <>
          <TimerItem translateY={day1TranslateY} />
          <TimerItem translateY={day2TranslateY} />
          <TimerItem translateY={day3TranslateY} />
          <span className='countdown-separator'>:</span>
        </>
      )}
      {(duration === 'days' || duration === 'hours') && (
        <>
          <TimerItem translateY={hour1TranslateY} />
          <TimerItem translateY={hour2TranslateY} />
          <span className='countdown-separator'>:</span>
        </>
      )}
      <TimerItem translateY={minute1TranslateY} />
      <TimerItem translateY={minute2TranslateY} />
      <span className='countdown-separator'>:</span>
      <TimerItem translateY={second1TranslateY} />
      <TimerItem translateY={second2TranslateY} />
    </div>
  );
};

export default FlipTimer;
