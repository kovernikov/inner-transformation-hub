
declare global {
  interface Window {
    Koalendar: {
      (action: string, config?: any): void;
      props?: any[];
    };
  }
}

export {};
