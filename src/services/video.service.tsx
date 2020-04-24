export class VideoService {

    public setTime(time: number): string {
      const minutes = Math.floor(time / 60);
      const seconds = this.setNumber(Math.floor(time - minutes * 60));
      return minutes + ':' + seconds;
    };

    public setNumber(time: number): string {
      return ('0' + time).slice(-2)
    };
}
