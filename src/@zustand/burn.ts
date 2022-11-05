import create from "zustand";

interface BurnState {
  burnAmount: string | number;
  setBurnAmount: (value: string | number) => void;
}

const useBurnStore = create<BurnState>()((set) => ({
  burnAmount: "",
  setBurnAmount: (value) => set(() => ({ burnAmount: value })),
}));

export { useBurnStore };
