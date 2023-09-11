const toastElement = typeof window !== 'undefined' ? (window as any).toast : undefined;

const toast = (message: string) => {
  if (toastElement) {
    const container = toastElement as HTMLDivElement;

    const newToast = document.createElement('div');
    newToast.classList.add('alert');
    newToast.classList.add('alert-error');
    newToast.classList.add('whitespace-wrap');
    newToast.classList.add('transition-all');
    newToast.classList.add('duration-200');
    newToast.innerHTML = message;

    container.append(newToast);
    setTimeout(() => {
      newToast.classList.add('opacity-0');
    }, 2000);
    setTimeout(() => {
      newToast.classList.add('p-0');
      newToast.classList.add('h-0');
      newToast.classList.add('border-0');
    }, 2200);
    setTimeout(() => {
      container.removeChild(newToast);
    }, 2500);
  }
};

const success = (message: string) => {
  if (toastElement) {
    const container = toastElement as HTMLDivElement;

    const newToast = document.createElement('div');
    newToast.classList.add('alert');
    newToast.classList.add('alert-success');
    newToast.classList.add('whitespace-wrap');
    newToast.classList.add('transition-all');
    newToast.classList.add('duration-200');
    newToast.innerHTML = message;

    container.append(newToast);
    setTimeout(() => {
      newToast.classList.add('opacity-0');
    }, 2000);
    setTimeout(() => {
      newToast.classList.add('p-0');
      newToast.classList.add('h-0');
      newToast.classList.add('border-0');
    }, 2200);
    setTimeout(() => {
      container.removeChild(newToast);
    }, 2500);
  }
};

export default Object.assign(toast, {
  success,
});
