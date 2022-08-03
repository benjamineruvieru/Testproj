export function msToTime(duration: number) {
  let milliseconds: string | number = (duration % 1000) / 100;
  let seconds: string | number = Math.floor((duration / 1000) % 60);
  let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
  let hours: string | number = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  hours = hours === '00' ? '' : hours + ':';
  return hours + minutes + ':' + seconds;
}
