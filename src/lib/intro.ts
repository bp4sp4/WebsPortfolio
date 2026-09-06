// 인트로 로더 완료 상태를 공유하는 아주 작은 스토어.
// Loader가 finish()를 호출하면 Hero 등이 onDone 콜백으로 애니메이션을 시작한다.
type Cb = () => void;

let done = false;
const listeners = new Set<Cb>();

export const intro = {
  get done() {
    return done;
  },
  finish() {
    if (done) return;
    done = true;
    listeners.forEach((cb) => cb());
    listeners.clear();
  },
  onDone(cb: Cb): () => void {
    if (done) {
      cb();
      return () => {};
    }
    listeners.add(cb);
    return () => {
      listeners.delete(cb);
    };
  },
};
